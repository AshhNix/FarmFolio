const Stats = ({ employees }) => {

  const departmentCount = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const maleCount = employees.filter(
    (employee) => employee.gender === "Male"
  ).length;

  const femaleCount = employees.filter(
    (employee) => employee.gender === "Female"
  ).length;

  return (
    <section className="stats-grid">

      <div className="stat-card primary-stat">
        <div className="stat-top">
          <span>Total Workforce</span>
          <div className="stat-icon">♙</div>
        </div>

        <div className="stat-number">
          {employees.length}
        </div>

        <p>
          Registered employees
        </p>

        <div className="stat-line"></div>
      </div>


      <div className="stat-card">
        <div className="stat-top">
          <span>Departments</span>
          <div className="stat-icon">◈</div>
        </div>

        <div className="stat-number">
          {departmentCount}
        </div>

        <p>
          Active work divisions
        </p>
      </div>


      <div className="stat-card">
        <div className="stat-top">
          <span>Women Workforce</span>
          <div className="stat-icon">♀</div>
        </div>

        <div className="stat-number">
          {femaleCount}
        </div>

        <p>
          Female employees
        </p>
      </div>


      <div className="stat-card">
        <div className="stat-top">
          <span>Men Workforce</span>
          <div className="stat-icon">♂</div>
        </div>

        <div className="stat-number">
          {maleCount}
        </div>

        <p>
          Male employees
        </p>
      </div>

    </section>
  );
};

export default Stats;