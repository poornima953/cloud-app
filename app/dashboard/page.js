'use client';
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/.auth/me")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setUser(data[0]);
        }
      });
  }, []);

  const logout = () => {
    window.location.href = "/.auth/logout";
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome: {user.userDetails}</p>
      
      <button onClick={logout} style={styles.logout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px"
  },
  logout: {
    marginTop: "20px",
    padding: "10px 15px",
    cursor: "pointer"
  }
};