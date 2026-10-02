import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "../components/SearchResults/SearchResults";
import { addSong } from "../redux/slices/librarySlice";
import { fetchSongs } from "../redux/slices/searchSlice";
import theme from "../styles/theme";

jest.mock("react-router", () => {
    const React = jest.requireActual("react");

    return {
        Link: ({ children, to, ...props }) =>
            React.createElement("a", { ...props, href: to }, children)
    };
});

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

jest.mock("../redux/slices/searchSlice", () => ({
    fetchSongs: jest.fn()
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
        fetchSongs.mockImplementation((artista) => ({
            type: "search/fetchSongs",
            payload: artista
        }));
        useDispatch.mockReturnValue(dispatchSimulado);
        useSelector.mockReturnValue({
            results: cancionesSimuladas,
            loading: false,
            error: null,
            hasSearched: true
        });
    });

    test("muestra las canciones recibidas desde Redux", () => {
        renderizarResultados();

        expect(screen.getByText("Gimme More")).toBeInTheDocument();
        expect(screen.getByText("Britney Spears")).toBeInTheDocument();
        expect(screen.getByText("Blackout · 5:55")).toBeInTheDocument();
        expect(screen.getByText("Cry Me A River")).toBeInTheDocument();
        expect(screen.getByText("Justin Timberlake")).toBeInTheDocument();
        expect(screen.getByText("Justified · 3:03")).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "Portada de Blackout" }))
            .toHaveAttribute("src", "portada-blackout.jpg");
    });

    test("agrega la canción seleccionada al hacer clic en el botón", () => {
        renderizarResultados();

        const botonesAgregar = screen.getAllByRole("button", {
            name: "Agregar a mi biblioteca"
        });

        fireEvent.click(botonesAgregar[1]);

        expect(dispatchSimulado).toHaveBeenCalledTimes(1);
        expect(dispatchSimulado).toHaveBeenCalledWith(
            addSong(cancionesSimuladas[1])
        );
    });

    test("enlaza a los detalles de cada canción", () => {
        renderizarResultados();

        expect(screen.getByRole("link", { name: "Ver detalles de Gimme More" }))
            .toHaveAttribute("href", "/song/1");
        expect(screen.getByRole("link", { name: "Ver detalles de Cry Me A River" }))
            .toHaveAttribute("href", "/song/2");
    });

    test("muestra la bienvenida antes de realizar una búsqueda", () => {
        useSelector.mockReturnValue({
            results: [],
            loading: false,
            error: null,
            hasSearched: false
        });

        renderizarResultados();

        expect(screen.getByRole("heading", { name: "Encuentra tu próxima canción" }))
            .toBeInTheDocument();
        expect(screen.queryByText("No encontramos canciones"))
            .not.toBeInTheDocument();
    });

    test("muestra un mensaje cuando la búsqueda no devuelve canciones", () => {
        useSelector.mockReturnValue({
            results: [],
            loading: false,
            error: null,
            hasSearched: true
        });

        renderizarResultados();

        expect(screen.getByRole("heading", { name: "No encontramos canciones" }))
            .toBeInTheDocument();
        expect(screen.queryByText("Encuentra tu próxima canción"))
            .not.toBeInTheDocument();
    });

    test("muestra el estado de carga durante la búsqueda", () => {
        useSelector.mockReturnValue({
            results: [],
            loading: true,
            error: null,
            hasSearched: true
        });

        renderizarResultados();

        expect(screen.getByText("Cargando canciones...")).toBeInTheDocument();
        expect(screen.queryByText("No encontramos canciones"))
            .not.toBeInTheDocument();
    });

    test("muestra el error y permite reintentar la búsqueda", () => {
        useSelector.mockReturnValue({
            results: [],
            loading: false,
            error: "No fue posible buscar las canciones.",
            hasSearched: true
        });

        renderizarResultados();

        expect(screen.getByText("No fue posible buscar las canciones."))
            .toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Reintentar" }));

        expect(fetchSongs).toHaveBeenCalledWith("Britney Spears");
        expect(dispatchSimulado).toHaveBeenCalledWith({
            type: "search/fetchSongs",
            payload: "Britney Spears"
        });
    });
});
