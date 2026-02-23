import LoginPage from "./LoginPage";

export default function Index() {
    return <LoginPage toggleTheme={function (): void {
        throw new Error("Function not implemented.");
    }} />;
}