import { useMemo, useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

import "./App.css";


const initialEmployees = [
  {
    id: 1,
    name: "Arjun Das",
    employeeId: "EMP-1001",
    department: "Crop Management",
    gender: "Male",
    phone: "+91 98765 43210",
    localAddress: "New Town, Kolkata",
    permanentAddress: "Bardhaman, West Bengal",
  },

  {
    id: 2,
    name: "Maya Sen",
    employeeId: "EMP-1002",
    department: "Administration",
    gender: "Female",
    phone: "+91 91234 56789",
    localAddress: "Salt Lake, Kolkata",
    permanentAddress: "Siliguri, West Bengal",
  },

  {
    id: 3,
    name: "Rahul Roy",
    employeeId: "EMP-1003",
    department: "Farm Operations",
    gender: "Male",
    phone: "+91 99887 66554",
    localAddress: "Rajarhat, Kolkata",
    permanentAddress: "Howrah, West Bengal",
  },

  {
    id: 4,
    name: "Sneha Ghosh",
    employeeId: "EMP-1004",
    department: "Animal Care",
    gender: "Female",
    phone: "+91 90012 34567",
    localAddress: "Dum Dum, Kolkata",
    permanentAddress: "Krishnanagar, West Bengal",
  },

  {
    id: 5,
    name: "Vikram Singh",
    employeeId: "EMP-1005",
    department: "Equipment & Machinery",
    gender: "Male",
    phone: "+91 93333 22110",
    localAddress: "Barasat, West Bengal",
    permanentAddress: "Durgapur, West Bengal",
  },

  {
    id: 6,
    name: "Priya Sharma",
    employeeId: "EMP-1006",
    department: "Logistics",
    gender: "Female",
    phone: "+91 95555 44332",
    localAddress: "Lake Town, Kolkata",
    permanentAddress: "Asansol, West Bengal",
  },
];


function App() {

  const [employees, setEmployees] =
    useState(initialEmployees);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [departmentFilter, setDepartmentFilter] =
    useState("All Departments");

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [editingEmployee, setEditingEmployee] =
    useState(null);

  const [activeSection, setActiveSection] =
    useState("Dashboard");


  const departments = [
    "All Departments",
    ...new Set(
      employees.map((employee) => employee.department)
    ),
  ];


  const filteredEmployees = useMemo(() => {

    return employees.filter((employee) => {

      const searchableData = `
        ${employee.name}
        ${employee.employeeId}
        ${employee.department}
        ${employee.phone}
      `.toLowerCase();

      const matchesSearch =
        searchableData.includes(
          searchTerm.toLowerCase()
        );

      const matchesDepartment =
        departmentFilter === "All Departments" ||
        employee.department === departmentFilter;

      return matchesSearch && matchesDepartment;

    });

  }, [employees, searchTerm, departmentFilter]);


  const handleAddEmployee = () => {

    setEditingEmployee(null);
    setIsFormOpen(true);

  };


  const handleEditEmployee = (employee) => {

    setEditingEmployee(employee);
    setIsFormOpen(true);

  };


  const handleDeleteEmployee = (id) => {

    const employee = employees.find(
      (item) => item.id === id
    );

    const confirmed = window.confirm(
      `Delete ${employee.name} from the employee directory?`
    );

    if (!confirmed) return;

    setEmployees((previousEmployees) =>
      previousEmployees.filter(
        (employee) => employee.id !== id
      )
    );

  };


  const handleSaveEmployee = (employeeData) => {

    if (editingEmployee) {

      setEmployees((previousEmployees) =>
        previousEmployees.map((employee) =>
          employee.id === editingEmployee.id
            ? {
                ...employeeData,
                id: editingEmployee.id,
              }
            : employee
        )
      );

    } else {

      const newEmployee = {
        ...employeeData,
        id: Date.now(),
      };

      setEmployees((previousEmployees) => [
        newEmployee,
        ...previousEmployees,
      ]);

    }

    setIsFormOpen(false);
    setEditingEmployee(null);

  };


  const closeForm = () => {

    setIsFormOpen(false);
    setEditingEmployee(null);

  };


  return (
    <div className="farm-app">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />


      <main className="main-content">

        <Header
          activeSection={activeSection}
          onAddEmployee={handleAddEmployee}
        />


        <div className="dashboard-content">

          <Stats employees={employees} />


          <section className="directory-section">

            <div className="directory-heading">

              <div>

                <span className="section-eyebrow">
                  PEOPLE DIRECTORY
                </span>

                <h2>Farm Workforce</h2>

                <p>
                  Search and manage your registered employees.
                </p>

              </div>

              <div className="result-count">
                Showing <strong>{filteredEmployees.length}</strong>{" "}
                of {employees.length}
              </div>

            </div>


            <div className="directory-toolbar">

              <div className="search-box">

                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search by name, ID, department..."
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="clear-search"
                  >
                    ×
                  </button>
                )}

              </div>


              <select
                className="department-filter"
                value={departmentFilter}
                onChange={(event) =>
                  setDepartmentFilter(event.target.value)
                }
              >

                {departments.map((department) => (
                  <option
                    key={department}
                    value={department}
                  >
                    {department}
                  </option>
                ))}

              </select>


              <button
                className="mobile-add-button"
                onClick={handleAddEmployee}
              >
                + Add
              </button>

            </div>


            <EmployeeList
              employees={filteredEmployees}
              onEdit={handleEditEmployee}
              onDelete={handleDeleteEmployee}
            />

          </section>

        </div>

      </main>


      <EmployeeForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSave={handleSaveEmployee}
        editingEmployee={editingEmployee}
      />

    </div>
  );
}

export default App;