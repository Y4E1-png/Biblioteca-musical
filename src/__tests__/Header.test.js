import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header/Header";
import theme from "../styles/theme";

describe("Header", () => {
    test("muestra el título de la aplicación", () => {
        render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        );

        expect(
            screen.getByRole("heading", { name: "UR TUNES", level: 1 })
        ).toBeInTheDocument();
    });

    test("muestra el contenido recibido dentro del encabezado", () => {
        render(
            <ThemeProvider theme={theme}>
                <Header>
                    <button type="button">Buscar artista</button>
                </Header>
            </ThemeProvider>
        );

        expect(
            screen.getByRole("button", { name: "Buscar artista" })
        ).toBeInTheDocument();
    });
});
