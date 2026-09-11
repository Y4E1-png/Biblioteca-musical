
import React, { useState } from "react";
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
    fetchSongs: jest.fn((artista) => ({
        type: "search/fetchSongs",
        payload: artista
    }))
}));

const dispatchSimulado = jest.fn();

const renderizarSearchBar = () => {
    const ComponenteDePrueba = () => {
        const [artista, setArtista] = useState("");

        return (
            <ThemeProvider theme={theme}>
                <SearchBar
                    artista={artista}
                    setArtista={setArtista}
                />
            </ThemeProvider>
        );
    };

    return render(<ComponenteDePrueba />);
};

describe("SearchBar", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useDispatch.mockReturnValue(dispatchSimulado);
        useSelector.mockReturnValue(false);
    });

    test("muestra el input de búsqueda", () => {
        renderizarSearchBar();

        expect(
            screen.getByRole("textbox", {
                name: "Buscar artista"
            })
        ).toBeInTheDocument();
    });

    test("permite escribir el nombre de un artista", () => {
        renderizarSearchBar();

        const input = screen.getByRole("textbox", {
            name: "Buscar artista"
        });

        fireEvent.change(input, {
            target: {
                value: "Queen"
            }
        });

        expect(input).toHaveValue("Queen");
    });

    test("ejecuta la búsqueda al hacer clic en Buscar", () => {
        renderizarSearchBar();

        const input = screen.getByRole("textbox", {
            name: "Buscar artista"
        });

        fireEvent.change(input, {
            target: {
                value: "Queen"
            }
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Buscar"
            })
        );

        expect(fetchSongs).toHaveBeenCalledWith("Queen");
        expect(dispatchSimulado).toHaveBeenCalledTimes(1);
    });
});