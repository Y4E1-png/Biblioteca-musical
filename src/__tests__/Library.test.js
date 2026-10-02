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

        expect(screen.getByText("Gimme More")).toBeInTheDocument();
        expect(screen.getByText("Britney Spears")).toBeInTheDocument();
        expect(screen.getByText("Blackout · 5:55")).toBeInTheDocument();
        expect(screen.getByText("Cry Me A River")).toBeInTheDocument();
        expect(screen.getByText("Justin Timberlake")).toBeInTheDocument();
        expect(screen.getByText("Justified · 3:03")).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "Portada de Blackout" }))
            .toHaveAttribute("src", "portada-blackout.jpg");
    });

    test("elimina la canción seleccionada al pulsar su botón de cierre", () => {
        renderizarLibrary();

        fireEvent.click(screen.getByRole("button", {
            name: "Eliminar Cry Me A River de mi biblioteca"
        }));

        expect(dispatchSimulado).toHaveBeenCalledTimes(1);
        expect(dispatchSimulado).toHaveBeenCalledWith(removeSong("2"));
    });

    test("muestra un mensaje cuando la biblioteca está vacía", () => {
        useSelector.mockReturnValue([]);

        renderizarLibrary();

        expect(screen.getByRole("heading", {
            name: "Aún no has guardado canciones"
        })).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: /Eliminar/ }))
            .not.toBeInTheDocument();
    });
});
