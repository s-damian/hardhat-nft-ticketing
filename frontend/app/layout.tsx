import "./globals.css";
import AppWalletProvider from "../src/components/AppWalletProvider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <title>Hardhat NFT Ticketing</title>
                <meta name="description" content="Plateforme de billetterie NFT basée sur Ethereum" />
                <AppWalletProvider>{children}</AppWalletProvider>
            </body>
        </html>
    );
}
