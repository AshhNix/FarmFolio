const Header = ({ activeSection, onAddEmployee }) => {
  return (
    <header className="top-header">

      <div className="header-title">

        <div className="breadcrumb">
          FARMFOLIO <span>/</span> {activeSection.toUpperCase()}
        </div>

        <h1>
          {activeSection === "Dashboard"
            ? "Good afternoon, Admin."
            : activeSection}
        </h1>

        <p>
          Manage your farm workforce with clarity and confidence.
        </p>

      </div>

      <div className="header-actions">

        <button className="notification-button">
          ♧
          <span></span>
        </button>

        <button
          className="add-employee-button"
          onClick={onAddEmployee}
        >
          <span>+</span>
          Add Employee
        </button>

      </div>

    </header>
  );
};

export default Header;