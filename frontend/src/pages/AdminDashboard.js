import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import "../styles/dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="dashboard-content">
        <h2>Dashboard</h2>

        <p className="dashboard-note">
          Punctuality and regular attendance at assigned shift is essential to
          ensure optimal service productivity.
        </p>

        <DashboardCards />
      </div>
    </div>
  );
}

export default AdminDashboard;
