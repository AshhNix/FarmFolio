const EmployeeCard = ({
  employee,
  onEdit,
  onDelete
}) => {

  const initials = employee.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <article className="employee-card">

      <div className="employee-card-top">

        <div className="employee-avatar">
          {initials}
        </div>

        <span className="employee-department">
          {employee.department}
        </span>

      </div>


      <div className="employee-main">

        <h3>{employee.name}</h3>

        <span className="employee-id">
          {employee.employeeId}
        </span>

      </div>


      <div className="employee-details">

        <div className="detail-row">
          <span className="detail-symbol">☎</span>
          <span>{employee.phone}</span>
        </div>

        <div className="detail-row">
          <span className="detail-symbol">⌖</span>
          <span>{employee.localAddress}</span>
        </div>

        <div className="detail-row">
          <span className="detail-symbol">●</span>
          <span>{employee.gender}</span>
        </div>

      </div>


      <div className="employee-card-footer">

        <button
          className="view-button"
          onClick={() => onEdit(employee)}
        >
          View / Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>

      </div>

    </article>
  );
};

export default EmployeeCard;