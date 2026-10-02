import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import SongDetail from "../components/SongDetail/SongDetail";
import theme from "../styles/theme";

jest.mock("axios");

jest.mock("react-router", () => {
    const React = jest.requireActual("react");

    return {
        useParams: () => ({ id: "1" }),
        Link: ({ children, to, ...props }) =>
            React.createElement("a", { ...props, href: to }, children)
    };
});

const detalleCancion = {
    idTrack: "1",
    strTrack: "Gimme More",
    strArtist: "Britney Spears",
    strAlbum: "Blackout",
    strTrackThumb: "portada-BritneySpears.jpg",
    intDuration: "355000"
};

const renderizarSongDetail = () => {
    return render(
        <ThemeProvider theme={theme}>
            <SongDetail />
        </ThemeProvider>
    );
};

describe("SongDetail", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        axios.get.mockReset();
    });

    test("muestra un mensaje mientras carga la canción", () => {
        axios.get.mockReturnValue(new Promise(() => {}));

        renderizarSongDetail();

        expect(screen.getByText("Cargando canción...")).toBeInTheDocument();
    });

    test("muestra los detalles y el enlace para volver a la biblioteca", async () => {
        axios.get.mockResolvedValue({ data: { track: [detalleCancion] } });

        renderizarSongDetail();

        expect(await screen.findByText("Gimme More")).toBeInTheDocument();
        expect(screen.getByText("Artista: Britney Spears")).toBeInTheDocument();
        expect(screen.getByText("Álbum: Blackout")).toBeInTheDocument();
        expect(screen.getByText("Duración: 5:55")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Volver a la biblioteca" }))
            .toHaveAttribute("href", "/");
        expect(axios.get).toHaveBeenCalledWith(
            "https://www.theaudiodb.com/api/v1/json/123/track.php?h=1"
        );
    });

    test("muestra un mensaje cuando no existen detalles", async () => {
        axios.get.mockResolvedValue({ data: { track: [] } });

        renderizarSongDetail();

        expect(await screen.findByText("No se encontraron detalles para esta canción."))
            .toBeInTheDocument();
    });

    test("permite reintentar después de un error", async () => {
        axios.get
            .mockRejectedValueOnce(new Error("Error de conexión"))
            .mockResolvedValueOnce({ data: { track: [detalleCancion] } });

        renderizarSongDetail();

        expect(await screen.findByText("Hubo un problema al cargar la canción."))
            .toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Reintentar" }));

        expect(await screen.findByText("Gimme More")).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(2);
    });
});
