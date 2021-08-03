import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { doSignIn } from "../../store/action/user";

const SignIn = () => {
const [isField,setIsField]=useState({})

const dispatch=useDispatch()

const history=useHistory()

const isChangeField=(event)=>{
    setIsField({ ...isField, [event.target.name]: event.target.value });
}
const submitForm=(event)=>{
    event.preventDefault();
    dispatch(doSignIn(isField))
    history.push('/home')
}

  return (
    <form className="modal__form form-sign-in" onSubmit={submitForm}>
      <div className="modal__form-header">
        <div className="modal__form-items">
          <div className="modal__form-item">
            <label>Email:</label>
            <input type="email" name="email" placeholder="helenjohnson@gmail.com" required onChange={isChangeField}/>
          </div>
          <div className="modal__form-item">
            <label>Password:</label>
            <input type="password" name="password" placeholder="**********" required onChange={isChangeField}/>
          </div>
        </div>
      </div>
      <div className="modal__form-footer">
        <div className="modal__form-these-terms">
          By clicking “Submit”, you agree to us processing your information in
          accordance with
          <NavLink to="#">these terms</NavLink>.
        </div>

        <div className="modal__form-buttons">
          <div
            className="button border-blue modal__close"
            aria-label="Close modal"
            data-micromodal-close
            onClick={() => {
              window.history.back();
            }}
          >
            Cancel
          </div>
          <button className="button blue icon-paw" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
export default SignIn;
