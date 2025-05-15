import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "900px",
            margin: "60px auto",
            padding: "40px",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Vibrant gradient
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            fontFamily: "'Poppins', sans-serif",
            textAlign: "center",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "25px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        },
        name: {
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "#fff", // Neon effect
            marginBottom: "15px",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 1)", // Neon glow effect
            animation: "glow 1.5s ease-in-out infinite alternate",
        },
        description: {
            fontSize: "1.1rem",
            color: "#f0f0f0",
            lineHeight: "1.6",
            marginBottom: "20px",
        },
        price: {
            fontSize: "1.5rem",
            color: "#2ecc71", // Neon green
            marginBottom: "30px",
            fontWeight: 600,
        },
        button: {
            padding: "12px 25px",
            fontSize: "1.2rem",
            backgroundColor: "#ff6f61", // Neon button color
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            boxShadow: "0 4px 10px rgba(255, 111, 97, 0.3)",
        },
        buttonHover: {
            backgroundColor: "#d24d3a", // Darker neon hover effect
            transform: "scale(1.05)",
        }
    };

    // Neon text animation keyframes (add this in your global CSS file)
    const stylesGlobal = {
        "@keyframes glow": {
            "0%": { textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 1)" },
            "50%": { textShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 1)" },
            "100%": { textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 1)" },
        }
    };

    if (!product) {
        return (
            <div style={styles.container}>
                <h2 style={styles.name}>Product Not Found</h2>
                <p style={styles.description}>The product you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={`Image of ${product.name}`} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price.toLocaleString("en-IN")}</p>
            <button
                style={styles.button}
                onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
