import logo from "../../../assets/logo.png";
import { Button } from "../../shared/button";
import "./navbar.css";

export function Navbar() {
    return(
        <aside className="w-screen py-12.5 px-[5%]">
            <header className="flex justify-between items-center text-[#999]">
                <img src={logo} alt="Logo" className="w-18.75" />
                <ul className="navbar-list">
                    <li className="animate-scroll-top" style={{ animationDelay: "0.15s" }}>Home</li>
                    <li className="animate-scroll-top" style={{ animationDelay: "0.30s" }}>Shop</li>
                    <li className="animate-scroll-top" style={{ animationDelay: "0.45s" }}>About</li>
                    <li className="animate-scroll-top" style={{ animationDelay: "0.60s" }}>Contact</li>
                </ul>
                <Button>
                    Order now
                </Button>
            </header>
        </aside>
    );
}