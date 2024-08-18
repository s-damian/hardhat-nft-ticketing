import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const contextClass = {
        success: "bg-blue-600",
        error: "bg-red-600",
        info: "bg-gray-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300",
    };

    return (
        <div className="container mx-auto text-center flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow bg-gray-100 flex flex-col py-12 px-8">{children}</div>
            <footer className="bg-blue-800 text-white py-4">
                <p>
                    &copy; {new Date().getFullYear()} |{" "}
                    <Link href="https://github.com/s-damian/hardhat-nft-ticketing" className="hover:text-yellow-300" target="_blank">
                        Hardhat NFT Ticketing
                    </Link>
                </p>
            </footer>
        </div>
    );
};

export default Layout;
