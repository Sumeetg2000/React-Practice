import React from 'react'

function Fourth({ setManageAll, manageAll, errors }) {
  return (
    <div className="fourthTest" id="fourthPage">
      <form className="firstS">
        <label htmlFor="date" className="labelClass fw-bold">
          Date <span className="text-danger fw-bold">*</span>
        </label>
        <br />
        <input
          id="date"
          placeholder="Date"
          max="2023-01-01"
          value={manageAll.dob}
          type="date"
          onChange={(e) => setManageAll(data=>({...data,date:e.target.value}))}
          className="inputClass pe-2"
        />
        <span className="text-danger">{errors.date}</span>
        <br />
      </form>
    </div>
  );
}

export default Fourth