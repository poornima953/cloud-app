'use client';

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/.auth/me");
        const data = await response.json();

        if (data && data.length > 0) {
          setUser(data[0]);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    window.location.href = "/.auth/logout";
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (!user) {
    // ✅ Only redirect AFTER loading is complete
    window.location.href = "/login";
    return null;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <p><b>User:</b> {user.userDetails}</p>
      <p><b>Provider:</b> {user.identityProvider}</p>

      <button
        onClick={handleLogout}
        style={{ marginTop: "20px", padding: "10px 15px", cursor: "pointer" }}
      >
        Logout
      </button>
    </div>
  );
}