
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from '../components/SearchResults/SearchResults';
import { addSong } from '../redux/slices/librarySlice';
import theme from '../styles/theme';

jest.mock('react-router', () => {
    const React = jest.requireActual('react');

    return {
        Link: ({ children, to }) =>
            React.createElement('a', { href: to }, children)
    };
});

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

const renderizarResultados = () => {
    return render(
            <ThemeProvider theme={theme}>
                <SearchResults artista="Britney Spears" />
            </ThemeProvider>
    );
};

describe("SearchResults", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        useDispatch.mockReturnValue(dispatchSimulado);

        useSelector.mockReturnValue({
            results: cancionesSimuladas,
            loading: false,
            error: null
        });
    });

    test("muestra las canciones recibidas desde Redux", () => {
        renderizarResultados();

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

        expect(
            screen.getByText("Artista: Justin Timberlake")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Álbum: Justified")
        ).toBeInTheDocument();
    });

    test("agrega una canción al hacer clic en el botón", () => {
        renderizarResultados();

        const botonesAgregar = screen.getAllByRole("button", {
            name: "Agregar a mi biblioteca"
        });

        fireEvent.click(botonesAgregar[0]);

        expect(dispatchSimulado).toHaveBeenCalledWith(
            addSong(cancionesSimuladas[0])
        );
    });
});