import React from 'react';
import '../css/userdash.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-brand">
          Nexus<span className="brand-accent">UI</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item active">Dashboard</li>
          <li className="nav-item">Analytics</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Settings</li>
        </ul>
      </nav>

      {/* Main Area */}
      <main className="main-viewport">
        <header className="top-bar">
          <div className="header-text">
            <h1>User Statistics</h1>
            <p>Real-time data overview</p>
          </div>
          <div className="user-circle">A</div>
        </header>

        {/* Stats Section */}
        <section className="stats-row">
          <div className="card-stat">
            <span className="label">Monthly Revenue</span>
            <span className="amount">$12,840</span>
            <span className="indicator up">+8%</span>
          </div>
          <div className="card-stat">
            <span className="label">Active Sessions</span>
            <span className="amount">1,204</span>
            <span className="indicator up">+12%</span>
          </div>
          <div className="card-stat">
            <span className="label">Bounce Rate</span>
            <span className="amount">24.2%</span>
            <span className="indicator down">-3%</span>
          </div>
        </section>

        {/* Detailed Table */}
        <section className="table-container">
          <div className="table-header">Recent Transactions</div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td><span className="badge success">Paid</span></td>
                <td>Oct 24, 2023</td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>Cody Fisher</td>
                <td><span className="badge pending">Pending</span></td>
                <td>Oct 23, 2023</td>
                <td>$1,200.00</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;