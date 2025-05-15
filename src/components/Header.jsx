import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#2c003e", // Deep violet background
        color: "#ffffff",
        boxShadow: "0 4px 20px rgb(84, 24, 105)", // Slightly stronger shadow for depth
        fontFamily: "Arial, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 10
    };

    const logoStyle = {
        fontSize: "24px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: "bold",
        letterSpacing: "1px",
        textShadow: "0 0 10px #ff33cc, 0 0 20px #ff33cc, 0 0 30px #ff33cc", // Neon pink glow
        transition: "text-shadow 0.3s ease-in-out",
        animation: "neonGlow 1.5s ease-in-out infinite alternate" // Animation for neon pulse
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textShadow: "0 0 10px #ff66cc, 0 0 20px #ff66cc", // Neon pink glow
        transition: "color 0.3s ease-in-out"
    };

    const cartCountStyle = {
        backgroundColor: "#ff66cc", // Pink-violet neon background
        color: "#2c003e", // Dark violet for contrast
        borderRadius: "12px",
        padding: "2px 8px",
        marginLeft: "4px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 0 10px rgba(255, 102, 204, 0.8), 0 0 20px rgba(255, 102, 204, 1)", // Neon pink glow
        animation: "neonGlow 1.5s ease-in-out infinite alternate" // Neon glow animation for count
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>CodeShop</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
