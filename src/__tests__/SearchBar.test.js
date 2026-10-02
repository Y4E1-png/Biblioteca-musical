import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";
import { fetchSongs } from "../redux/slices/searchSlice";
import theme from "../styles/theme";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

jest.mock("../redux/slices/searchSlice", () => ({
    fetchSongs: jest.fn()
}));

const dispatchSimulado = jest.fn();

const renderizarSearchBar = () => {
    const ComponenteDePrueba = () => {
        const [artista, setArtista] = useState("");

        return (
            <ThemeProvider theme={theme}>
                <SearchBar artista={artista} setArtista={setArtista} />
            </ThemeProvider>
        );
    };

    return render(<ComponenteDePrueba />);
};

describe("SearchBar", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        fetchSongs.mockImplementation((artista) => ({
            type: "search/fetchSongs",
            payload: artista
        }));
        useDispatch.mockReturnValue(dispatchSimulado);
        useSelector.mockReturnValue(false);
    });

    test("muestra el campo de búsqueda y el botón con lupa", () => {
        renderizarSearchBar();

        expect(screen.getByRole("textbox", { name: "Buscar artista" }))
            .toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Buscar artista" }))
            .toBeEnabled();
    });

    test("permite escribir el nombre de un artista", () => {
        renderizarSearchBar();

        const input = screen.getByRole("textbox", { name: "Buscar artista" });

        fireEvent.change(input, { target: { value: "Queen" } });

        expect(input).toHaveValue("Queen");
    });

    test("ejecuta la búsqueda y elimina los espacios alrededor del nombre", () => {
        renderizarSearchBar();

        const input = screen.getByRole("textbox", { name: "Buscar artista" });

        fireEvent.change(input, { target: { value: "  Queen  " } });
        fireEvent.click(screen.getByRole("button", { name: "Buscar artista" }));

        expect(fetchSongs).toHaveBeenCalledWith("Queen");
        expect(dispatchSimulado).toHaveBeenCalledTimes(1);
        expect(dispatchSimulado).toHaveBeenCalledWith({
            type: "search/fetchSongs",
            payload: "Queen"
        });
    });

    test("no busca si el campo está vacío o contiene solo espacios", () => {
        renderizarSearchBar();

        const input = screen.getByRole("textbox", { name: "Buscar artista" });
        const botonBuscar = screen.getByRole("button", { name: "Buscar artista" });

        fireEvent.click(botonBuscar);
        fireEvent.change(input, { target: { value: "   " } });
        fireEvent.click(botonBuscar);

        expect(fetchSongs).not.toHaveBeenCalled();
        expect(dispatchSimulado).not.toHaveBeenCalled();
    });

    test("deshabilita la búsqueda mientras se cargan las canciones", () => {
        useSelector.mockReturnValue(true);

        renderizarSearchBar();

        const input = screen.getByRole("textbox", { name: "Buscar artista" });
        const botonBuscar = screen.getByRole("button", { name: "Buscando canciones" });

        fireEvent.change(input, { target: { value: "Queen" } });
        expect(botonBuscar).toBeDisabled();

        fireEvent.click(botonBuscar);

        expect(dispatchSimulado).not.toHaveBeenCalled();
    });
});
