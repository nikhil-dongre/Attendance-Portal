import { useState } from "react";

function Navbar({ onMenuClick }) {
  const role = localStorage.getItem("role");
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
        {/* LEFT: Hamburger menu */}
      <div className="navbar-menu">
        <img
          src="/menu.svg"
          alt="menu"
          className="menu-icon"
          onClick={() => setOpen(!open)}   // ✅ THIS WAS MISSING
        />

        {open && (
          <div className="menu-dropdown">
            <div className="menu-item">Leaves</div>
            <div className="menu-item">Self Services</div>
            <div className="menu-item">Attendance Times</div>
            <div className="menu-item">Salary Slip</div>
          </div>
        )}
      </div>
      <div className="navbar-left">
        <h3>Testing Company Pvt Ltd.</h3>
      </div>

      <div className="navbar-right">
        <span className="role">{role}</span>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
