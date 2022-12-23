function First({ setManageAll, manageAll, errors }) {
  return (
    <div className="testscreen" id="firstPage">
      <div className="firstS">
        <label htmlFor="firstName" className="labelClass fw-bold">
          First Name <span className="text-danger fw-bold">*</span>
        </label>
        <br />
        <input
          type="text"
          className="inputClass"
          placeholder="Enter your Name"
          id="firstName"
          autoFocus={true}
          value={manageAll.firstName}
          onChange={(e) =>
            setManageAll((data) => ({ ...data, firstName: e.target.value }))
          }
        />
        <span className="text-danger errorM">{errors.name}</span>
        <br />
        <label htmlFor="lastName" className="labelClass fw-bold pt-3">
          Last Name <span className="text-danger fw-bold">*</span>
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter your Last Name"
          className="inputClass"
          id="lastName"
          value={manageAll.lastName}
          onChange={(e) =>
            setManageAll((data) => ({ ...data, lastName: e.target.value }))
          }
        />
        <span className="text-danger errorM">{errors.lastname}</span>
      </div>
    </div>
  );
}

export default First;
