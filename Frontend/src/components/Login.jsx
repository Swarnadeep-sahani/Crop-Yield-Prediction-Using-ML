import "./Login.css";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ensure the login modal does not render when closed

  // Handle click outside the login box
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("login-overlay")) {
      onClose(); // Close the modal
    }
  };

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-submit">Login</button>
      </div>
    </div>
  );
};

export default Login;
