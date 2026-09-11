
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Library from "../components/Library/Library";
import { removeSong } from "../redux/slices/librarySlice";
import theme from "../styles/theme";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

const dispatchSimulado = jest.fn();

const cancionesSimuladas = [
    {
        id: "1",
        titulo: "Gimme More",
        artista: "Britney Spears",
        album: "Blackout",
        imagen: "portada-blackout.jpg",
        duracion: "5:55"
    },
    {
        id: "2",
        titulo: "Cry Me A River",
        artista: "Justin Timberlake",
        album: "Justified",
        imagen: "portada-justified.jpg",
        duracion: "3:03"
    }
];

const renderizarLibrary = () => {
    return render(
        <ThemeProvider theme={theme}>
            <Library />
        </ThemeProvider>
    );
};

describe("Library", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useDispatch.mockReturnValue(dispatchSimulado);
        useSelector.mockReturnValue(cancionesSimuladas);
    });

    test("muestra las canciones guardadas en la biblioteca", () => {
        renderizarLibrary();

        expect(
            screen.getByText("Gimme More")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Artista: Britney Spears")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Álbum: Blackout")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Cry Me A River")
        ).toBeInTheDocument();
    });

    test("elimina una canción al hacer clic en su botón", () => {
        renderizarLibrary();

        const botonesEliminar = screen.getAllByRole("button", {
            name: "Eliminar"
        });

        fireEvent.click(botonesEliminar[0]);

        expect(dispatchSimulado).toHaveBeenCalledWith(
            removeSong("1")
        );
    });

    test("muestra un mensaje cuando la biblioteca está vacía", () => {
        useSelector.mockReturnValue([]);

        renderizarLibrary();

        expect(
            screen.getByText("No hay canciones en tu biblioteca")
        ).toBeInTheDocument();
    });
});