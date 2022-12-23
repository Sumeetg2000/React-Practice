import React from 'react'

function Sixth({ setManageAll,manageAll}) {
  return (
    <div className="sixthTest" id="sixthPage">
      <form className="firstS">
        <label htmlFor="gender" className="labelClass fw-bold">
          Gender <span className="text-danger fw-bold">*</span>
        </label>
        <br />
        <div className="manageImage pt-3">
         
          <div
            className={`maleDiv ${manageAll.gender === "male" ? "bgCol":''}`}
            onClick={() =>
              setManageAll((data) => ({ ...data, gender: "male" }))
            }
          >
            <img src="male.jpg" alt="male" className="male" />
          </div>
          <div
            className={`femaleDiv ${manageAll.gender === "female"?"bgCol":''}`}
            onClick={() =>
              setManageAll((data) => ({ ...data, gender: "female" }))
            }
          >
            <img src="female.jpg" alt="female" className="female" />
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Sixth