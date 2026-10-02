import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import App from "../App";
import searchReducer from "../redux/slices/searchSlice";
import libraryReducer from "../redux/slices/librarySlice";
import theme from "../styles/theme";

jest.mock("axios");

jest.mock("react-router", () => {
    const React = jest.requireActual("react");

    return {
        Routes: ({ children }) =>
            React.createElement(React.Fragment, null, children),
        Route: ({ path, element }) => path === "/" ? element : null,
        Link: ({ children, to, ...props }) =>
            React.createElement("a", { ...props, href: to }, children),
        useParams: () => ({ id: "1" })
    };
});

const crearStore = () => {
    return configureStore({
        reducer: {
            library: libraryReducer,
            search: searchReducer
        }
    });
};

const renderizarApp = () => {
    const store = crearStore();

    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    );

    return store;
};

describe("App", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        axios.get.mockReset();
    });

    test("muestra el encabezado, el buscador y los mensajes iniciales", () => {
        renderizarApp();

        expect(screen.getByRole("heading", { name: "UR TUNES", level: 1 }))
            .toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: "Buscar artista" }))
            .toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Encuentra tu próxima canción" }))
            .toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Mi biblioteca" }))
            .toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Aún no has guardado canciones" }))
            .toBeInTheDocument();
        expect(axios.get).not.toHaveBeenCalled();
    });

    test("busca una canción, la guarda sin duplicados y permite eliminarla", async () => {
        axios.get
            .mockResolvedValueOnce({
                data: {
                    album: [{
                        idAlbum: "10",
                        strAlbumThumb: "portada-blackout.jpg"
                    }]
                }
            })
            .mockResolvedValueOnce({
                data: {
                    track: [{
                        idTrack: "1",
                        strTrack: "Gimme More",
                        strArtist: "Britney Spears",
                        strAlbum: "Blackout",
                        intDuration: "355000"
                    }]
                }
            });

        const store = renderizarApp();
        const input = screen.getByRole("textbox", { name: "Buscar artista" });

        fireEvent.change(input, { target: { value: "Britney Spears" } });
        fireEvent.click(screen.getByRole("button", { name: "Buscar artista" }));

        expect(await screen.findByText("Gimme More")).toBeInTheDocument();

        const botonAgregar = screen.getByRole("button", {
            name: "Agregar a mi biblioteca"
        });

        fireEvent.click(botonAgregar);

        await waitFor(() => {
            expect(screen.getAllByText("Gimme More")).toHaveLength(2);
        });

        expect(store.getState().library).toEqual([{
            id: "1",
            titulo: "Gimme More",
            artista: "Britney Spears",
            album: "Blackout",
            imagen: "portada-blackout.jpg",
            duracion: "5:55"
        }]);

        fireEvent.click(botonAgregar);

        expect(store.getState().library).toHaveLength(1);
        expect(screen.getAllByText("Gimme More")).toHaveLength(2);

        fireEvent.click(screen.getByRole("button", {
            name: "Eliminar Gimme More de mi biblioteca"
        }));

        expect(store.getState().library).toEqual([]);
        expect(screen.getAllByText("Gimme More")).toHaveLength(1);
        expect(screen.getByRole("heading", { name: "Aún no has guardado canciones" }))
            .toBeInTheDocument();
    });
});
