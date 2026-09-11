
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

        Route: ({ path, element }) =>
            path === "/" ? element : null,

        Link: ({ children, to }) =>
            React.createElement("a", { href: to }, children),

        useParams: () => ({
            id: "1"
        })
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
    });

    test("muestra los componentes principales", () => {
        renderizarApp();

        expect(
            screen.getByRole("heading", {
                name: "Biblioteca Musical"
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("textbox", {
                name: "Buscar artista"
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "Resultados de la búsqueda"
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "Mi biblioteca"
            })
        ).toBeInTheDocument();
    });

    test("busca una canción y la agrega a la biblioteca", async () => {
        axios.get
            .mockResolvedValueOnce({
                data: {
                    album: [
                        {
                            idAlbum: "10",
                            strAlbumThumb: "portada-justified.jpg"
                        }
                    ]
                }
            })
            .mockResolvedValueOnce({
                data: {
                    track: [
                        {
                            idTrack: "1",
                            strTrack: "Gimme More",
                            strArtist: "Britney Spears",
                            strAlbum: "Blackout",
                            intDuration: "355000"
                        }
                    ]
                }
            });

        renderizarApp();

        const input = screen.getByRole("textbox", {
            name: "Buscar artista"
        });

        fireEvent.change(input, {
            target: {
                value: "Britney Spears"
            }
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Buscar"
            })
        );

        expect(
            await screen.findByText("Gimme More")
        ).toBeInTheDocument();

        fireEvent.click(
            screen.getByRole("button", {
                name: "Agregar a mi biblioteca"
            })
        );

        await waitFor(() => {
            expect(
                screen.getAllByText("Gimme More")
            ).toHaveLength(2);
        });
    });
});