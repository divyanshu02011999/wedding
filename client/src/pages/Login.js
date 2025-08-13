
import { Container, Typography } from '@mui/material';

function Login() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f5f5f5" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: "320px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: ".5rem" }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: ".5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: ".5rem" }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: ".5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: ".75rem", background: "#1976d2", color: "#fff", border: "none", borderRadius: "4px", fontWeight: "bold" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
