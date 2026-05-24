'use client';

export default function LoginPage() {

  const handleLogin = () => {
    window.location.href =
      "/.auth/login/aad?post_login_redirect_uri=/dashboard";
  };

  return (
    <div style={styles.container}>
      <h1>Cloud App</h1>
      <p>Please sign in to continue</p>

      <button onClick={handleLogin} style={styles.button}>
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
    marginTop: "20px",
    padding: "12px 20px",
    fontSize: "16px",
    background: "#0078d4",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};