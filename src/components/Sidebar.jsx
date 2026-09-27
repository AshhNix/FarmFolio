const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { icon: "⌂", label: "Dashboard" },
    { icon: "♙", label: "Employees" },
    { icon: "◈", label: "Departments" },
    { icon: "◌", label: "Workforce Analytics" },
  ];

  return (
    <aside className="farm-sidebar">

      <div className="brand-area">
        <div className="brand-symbol">F</div>

        <div>
          <h2>FARMFOLIO</h2>
          <span>Workforce Hub</span>
        </div>
      </div>

      <div className="sidebar-label">
        WORKSPACE
      </div>

      <nav className="sidebar-navigation">

        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`sidebar-link ${
              activeSection === item.label ? "sidebar-link-active" : ""
            }`}
            onClick={() => setActiveSection(item.label)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <div className="farm-status">
          <span className="status-dot"></span>

          <div>
            <strong>Farm Network</strong>
            <small>Systems operational</small>
          </div>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">A</div>

          <div>
            <strong>Admin</strong>
            <small>Farm Manager</small>
          </div>

          <span>⋮</span>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;