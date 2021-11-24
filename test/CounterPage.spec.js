import {render, screen} from "@testing-library/vue";
import CounterPage from "../pages/CounterPage";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Echo Page", () => {
    describe("Layout", () => {
        it("has increase button", () => {
            render(CounterPage);
            const button = screen.queryByRole("button", {name: "Increase"});
            expect(button).toBeInTheDocument();
        });
        it("has decrease button", () => {
            render(CounterPage);
            const button = screen.queryByRole("button", {name: "Decrease"});
            expect(button).toBeInTheDocument();
        });
        it("disables zero at screen initially", () => {
            render(CounterPage);
            const text = screen.queryByText(0);
            expect(text).toBeInTheDocument();
        });
    });
    describe("Interactions", () => {
        it("number increases to 1 after clicking increase",async () => {
            render(CounterPage);
            await screen.queryByText(0);
            const button = screen.queryByRole("button", {name: "Increase"});
            await userEvent.click(button);
            const text = await screen.queryByText(1);
            expect(text).toBeInTheDocument();
        });
        it("number decreases to -1 after clicking decrease",async () => {
            render(CounterPage);
            await screen.queryByText(0);
            const button = screen.queryByRole("button", {name: "Decrease"});
            await userEvent.click(button);
            const text = await screen.queryByText(-1);
            expect(text).toBeInTheDocument();
        });
    });
});
