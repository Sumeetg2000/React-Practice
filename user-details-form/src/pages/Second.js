
function Second({ setManageAll, manageAll, errors }) {
  return (
    <div className="secomndTest" id="secondPage">
      <form className="firstS">
        <label htmlFor="email" className="labelClass fw-bold">
          E-mail <span className="text-danger fw-bold">*</span>
        </label>
        <br />
        <input
          id="email"
          placeholder="Enter your email address"
          type="email"
          className="inputClass"
          value={manageAll.eMail}
          onChange={(e) =>
            setManageAll((data) => ({ ...data, eMail: e.target.value }))
          }
        />
        <span className="text-danger">{errors.email}</span>
        <br />
      </form>
    </div>
  );
}

export default Second;
