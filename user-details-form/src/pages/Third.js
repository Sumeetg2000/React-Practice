import React from 'react'

function Third({setManageAll,manageAll,errors}) {
  return (
    <div className='thirdTest' id="thirdPage">
      <form className='firstS'>
      <label htmlFor="password" className="labelClass fw-bold">
        Password <span className="text-danger fw-bold">*</span>
      </label>
      <br />
      <input
        id="password"
        placeholder="Password"
        type="password"
        autoComplete="off"
        value={manageAll.password}
        maxLength="12"
        className="inputClass"
        onChange={(e)=>setManageAll(data=>({...data,password:e.target.value}))}
      />
      <span className="text-danger">{errors.password}</span>
      <br />
        
      </form>
    </div>
  )
}

export default Third