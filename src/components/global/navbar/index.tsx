import logo from "../../../assets/logo.png";
import { Button } from "../../shared/button";
import "./navbar.css";

export function Navbar() {
    return(
        <aside className="w-screen py-12.5 px-[5%] bg-black">
            <header className="flex justify-between items-center text-[#999]">
                <img src={logo} alt="Logo" className="w-18.75" />
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Button>
                    Order now
                </Button>
            </header>
        </aside>
    );
}