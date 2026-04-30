import React from 'react';
import '../css/admindashboard.css';

const AdminDashboard = () => {
  const users = [
    { id: 1, name: "Marcus Wright", role: "Editor", status: "Active", email: "m.wright@nexus.com" },
    { id: 2, name: "Sarah Jenkins", role: "Admin", status: "Active", email: "s.jenkins@nexus.com" },
    { id: 3, name: "Leo Gill", role: "Viewer", status: "Suspended", email: "l.gill@nexus.com" },
  ];

  return (
    <div className="admin-container">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">ADMIN<span>PANEL</span></div>
        <nav className="admin-nav">
          <div className="nav-group">Main</div>
          <button className="nav-btn active">System Overview</button>
          <button className="nav-btn">User Management</button>
          <div className="nav-group">Security</div>
          <button className="nav-btn">Audit Logs</button>
          <button className="nav-btn">API Keys</button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="search-bar">
            <input type="text" placeholder="Search system logs..." />
          </div>
          <div className="admin-actions">
            <button className="btn-primary">+ Create User</button>
            <div className="status-dot"></div>
          </div>
        </header>

        {/* Admin KPI Cards */}
        <section className="admin-grid">
          <div className="kpi-card">
            <p className="kpi-label">Total Users</p>
            <h2 className="kpi-value">24,502</h2>
            <p className="kpi-sub">↑ 4% this week</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Active Subscriptions</p>
            <h2 className="kpi-value">$142.8k</h2>
            <p className="kpi-sub">MRR Growth</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Server Load</p>
            <h2 className="kpi-value text-green">Optimal</h2>
            <p className="kpi-sub">99.9% Uptime</p>
          </div>
        </section>

        {/* User Management Table */}
        <section className="admin-table-section">
          <h3>Recent Users</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <span className="user-name">{user.name}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                  </td>
                  <td>{user.role}</td>
                  <td><span className={`status-pill ${user.status.toLowerCase()}`}>{user.status}</span></td>
                  <td>
                    <button className="action-link edit">Edit</button>
                    <button className="action-link delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;