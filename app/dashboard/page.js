'use client';
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.auth/me")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setUser(data[0]);
        }
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    // ✅ Only redirect AFTER checking auth
    window.location.href = "/login";
    return null;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <p>Welcome: {user.userDetails}</p>

      <button onClick={() => window.location.href = "/.auth/logout"}>
        Logout
      </button>
    </div>
  );
}