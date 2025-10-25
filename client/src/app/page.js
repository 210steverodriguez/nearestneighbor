
export default function Home() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0077ff 0%, #00c6ff 100%)",
      color: "white",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Hello, World! 👋🌎</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>We outside!</p>
    </main>
  );
}
