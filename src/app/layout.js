import { Teko } from "next/font/google"; //Montserrat
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import "./fontawesome"
import "./globals.css";
import Call from "./_call/Call"
import AddBootstrap from "./addBootstrap";
import Navbar from "./_navbar/Navbar";

const inter = Teko({ subsets: ["latin"], weight: '600' });

export const metadata = {
  title: "Ahmed Teaima",
  description: "Coach Ahmed Teaima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Call />
        <AddBootstrap />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
