import { RootLayoutProps } from "@/types/general";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
    title: "The Wild Oasis",
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <Logo />
                    <Navigation />
                </header>
                <main>{children}</main>
                <footer>Copyright by The Wild Oasis</footer>
            </body>
        </html>
    );
};

export default RootLayout;
