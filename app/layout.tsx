import { RootLayoutProps } from "@/types/general";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "../app/_styles/globals.css";

export const metadata = {
    title: "The Wild Oasis",
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
            <body className="min-h-screen bg-primary-950 text-primary-100">
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
