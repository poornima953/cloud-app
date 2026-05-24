'use client';

export default function LoginPage() {
  const login = () => {
    window.location.href = "/.auth/login/aad";
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Cloud App</h1>
      <p>Please sign in to continue</p>

      <button style={styles.button} onClick={login}>
        Sign in with Microsoft
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    background: "#0078d4",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }
};
