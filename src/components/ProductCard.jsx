import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        background: "linear-gradient(145deg, #6a0dad, #9b4dca)", // Neon gradient background (light purple)
        color: "#fff", 
        borderRadius: "12px", // Rounded corners for a soft, modern look
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        margin: "15px",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        position: "relative",
        cursor: "pointer",
        filter: "brightness(0.9)", // Slight dim to make neon effects pop
        animation: "neonGlow 2s ease-in-out infinite alternate",
    };

    const clickableStyle = {
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        transition: "transform 0.3s ease",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "12px",
        transition: "transform 0.3s ease",
        boxShadow: "0 0 15px rgba(106, 13, 173, 0.7)", //  blue Neon glow around the image
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#fff", // White text for better contrast on dark background
        textShadow: "0 0 10px rgba(106, 13, 173, 1), 0 0 20px rgba(106, 13, 173, 1)", // Neon glow effect
    };

    const priceStyle = {
        color: "#00bcd4", // Light cyan for price
        fontSize: "18px",
        marginBottom: "8px",
        textShadow: "0 0 10px rgba(0, 188, 212, 0.8), 0 0 20px rgba(0, 188, 212, 1)", // Cyan neon glow
    };

    const detailsText = {
        color: "#ddd", // Lighter text for details
        fontSize: "14px",
        marginTop: "8px",
        fontWeight: "normal",
        textShadow: "0 0 10px rgba(255, 102, 204, 0.8), 0 0 20px rgba(255, 102, 204, 1)", // Neon glow
    };

    const buttonStyle = {
        backgroundColor: "#00bcd4", // Light teal for button (elegant cyan)
        color: "#fff",
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        textShadow: "0 0 10px rgba(0, 188, 212, 0.8), 0 0 20px rgba(0, 188, 212, 1)", // Cyan neon glow
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#00acc1" : "#00bcd4"; // Darken on hover
        e.target.style.boxShadow = hover ? "0 0 10px rgba(0, 188, 212, 0.9)" : "0 0 20px rgba(0, 0, 0, 0.15)";
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
