import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <img
          alt="instagram-2.0"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>
      <div className="navbarRight">
        <h3>Login</h3>
      </div>
    </div>
  );
};
