import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({
  employees,
  onEdit,
  onDelete
}) => {

  if (employees.length === 0) {
    return (
      <div className="empty-state">

        <div className="empty-icon">
          ♙
        </div>

        <h2>No employees found</h2>

        <p>
          Try changing your search or department filter.
        </p>

      </div>
    );
  }

  return (
    <div className="employee-grid">

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
};

export default EmployeeList;