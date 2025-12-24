function DashboardCards() {
  return (
    <div className="card-grid">
      <div className="card blue">
        <h4>Employee & Team</h4>
        <p>Explore your team detail</p>
      </div>

      <div className="card pink">
        <h4>Attendance & Leave</h4>
        <p>Daily / Monthly attendance</p>
        <small>In Time: 09:58 AM</small>
      </div>

      <div className="card orange">
        <h4>Salary</h4>
        <p>Processed salary details</p>
      </div>

      <div className="card green">
        <h4>Reports</h4>
        <p>Employee & HR reports</p>
      </div>
    </div>
  );
}

export default DashboardCards;
