import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  employeeId: "",
  department: "Crop Management",
  gender: "Male",
  phone: "",
  localAddress: "",
  permanentAddress: "",
};

const EmployeeForm = ({
  isOpen,
  onClose,
  onSave,
  editingEmployee
}) => {

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {

    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(initialForm);
    }

  }, [editingEmployee, isOpen]);


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !formData.name ||
      !formData.employeeId ||
      !formData.phone ||
      !formData.localAddress ||
      !formData.permanentAddress
    ) {
      alert("Please complete all employee details.");
      return;
    }

    onSave(formData);

    setFormData(initialForm);
  };


  if (!isOpen) {
    return null;
  }


  return (
    <div className="modal-overlay">

      <div className="employee-modal">

        <div className="modal-header">

          <div>
            <span className="modal-eyebrow">
              WORKFORCE RECORD
            </span>

            <h2>
              {editingEmployee
                ? "Update Employee"
                : "Add New Employee"}
            </h2>

            <p>
              Enter accurate workforce information below.
            </p>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        <form
          className="employee-form"
          onSubmit={handleSubmit}
        >

          <div className="form-section-title">
            Personal Information
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Arjun Das"
              />
            </div>


            <div className="form-group">
              <label>Employee ID</label>

              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="e.g. EMP-1042"
              />
            </div>

          </div>


          <div className="form-row">

            <div className="form-group">
              <label>Department</label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option>Crop Management</option>
                <option>Farm Operations</option>
                <option>Animal Care</option>
                <option>Equipment & Machinery</option>
                <option>Logistics</option>
                <option>Administration</option>
              </select>

            </div>


            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

          </div>


          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />

          </div>


          <div className="form-section-title address-title">
            Address Information
          </div>


          <div className="form-group">

            <label>Local Address</label>

            <textarea
              name="localAddress"
              value={formData.localAddress}
              onChange={handleChange}
              placeholder="Current/local residential address"
              rows="2"
            />

          </div>


          <div className="form-group">

            <label>Permanent Address</label>

            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Permanent residential address"
              rows="2"
            />

          </div>


          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              {editingEmployee
                ? "Save Changes"
                : "Add Employee"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EmployeeForm;