
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
            screen.getByRole("heading", {
                name: "Biblioteca Musical"
            })
        ).toBeInTheDocument();
    });

    test("solo muestra el título dentro del encabezado", () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        );

        const encabezado = container.querySelector("header");

        expect(encabezado.children).toHaveLength(1);
    });
});