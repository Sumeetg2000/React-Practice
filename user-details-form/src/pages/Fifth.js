import React from 'react'

function Fifth({ setManageAll, manageAll, errors }) {
  return (
    <div className="fifthTest" id="fifthPage">
      <form className="firstS">
        <label htmlFor="address" className="labelClass fw-bold">
          Address <span className="text-danger fw-bold">*</span>
        </label>
        <br />
        <textarea
          id="address"
          placeholder="Address"
          type="text"
          value={manageAll.address}
          className="inputClass address adress p-2"
          maxLength="180"
          onChange={(e) => setManageAll(data=>({...data,address:e.target.value}))}
        />
        <span className="text-danger">{errors.address}</span>
        <br />
      </form>
    </div>
  );
}

export default Fifth