import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header_folder/header";
import Footer from "./component/footer_folder/footer/Footer";
import { AuthProvider } from "@/context/AuthContext";


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}> 
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
    </AuthProvider>
  );
}
