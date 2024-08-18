import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <title>Hardhat NFT Ticketing</title>
            <meta name="description" content="Plateforme de billetterie NFT basée sur Ethereum" />
            <body>{children}</body>
        </html>
    );
}
