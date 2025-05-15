import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#1a1a1a", // Dark background for neon effect
      padding: "20px",
      fontFamily: "'Segoe UI', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    neonText: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#8A00C4", // Neon Purple
      textShadow: "0 0 5px #8A00C4, 0 0 10px #8A00C4, 0 0 15px #8A00C4",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.2rem",
      color: "#fff", // White text for contrast
      marginBottom: "30px",
    },
    button: {
      padding: "12px 25px",
      fontSize: "1rem",
      backgroundColor: "#00F0FF", // Electric Blue
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      zIndex: 1,
      boxShadow: "0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF",
    },
    buttonHover: {
      backgroundColor: "#FFCE1B", // Mustard Yellow
      boxShadow: "0 0 5px #FFCE1B, 0 0 10px #FFCE1B, 0 0 15px #FFCE1B",
    },
    glowEffect: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "300%",
      height: "300%",
      background: "radial-gradient(circle, rgba(39,174,96,0.5) 0%, rgba(39,174,96,0) 70%)",
      filter: "blur(100px)",
      transform: "translate(-50%, -50%)",
      animation: "glowAnimation 1.5s infinite alternate",
      zIndex: 0,
    },
    "@keyframes glowAnimation": {
      "0%": {
        opacity: "0.5",
      },
      "100%": {
        opacity: "1",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.glowEffect}></div>
      <h1 style={styles.neonText}>🎉 Order Placed Successfully!</h1>
      <p style={styles.message}>Thank you for shopping with us.</p>
      <a
        href="/"
        style={styles.button}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Go to Home
      </a>
    </div>
  );
}
