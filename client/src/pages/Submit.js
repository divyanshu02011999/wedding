import React from "react";
import { useLocation } from "react-router-dom";

export default function Submit() {
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f5f5f5" }}>
      <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: "320px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Submitted Credentials</h2>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Email:</strong> {email || "(none)"}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Password:</strong> {password ? "(hidden)" : "(none)"}
        </div>
      </div>
    </div>
  );
}
