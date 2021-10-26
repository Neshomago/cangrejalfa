import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

class Register extends Component {
showForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  setFieldValue,
  isSubmitting
}) => {
  return(
    <form onSubmit={handleSubmit}>
        <div class="form-group has-feedback">
          <input
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username}
          className="form-control"
          placeholder="Username"
          />
        </div>
        <div className="form-group has-feedback">
          <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
          />
        </div>
        <div className="form-group has-feedback">
          <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          className="form-control"
          placeholder="Password"
          />
        </div>
        <div className="form-group has-feedback">
          <input
          type="password"
          name="confirm-password"
          onChange={handleChange}
          placeholder="Confirm password"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-primary btn-block btn-flat"
            >
            Confirm</button>
          </div>
        </div>
      </form>
  );
}

  render() {
    return(
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Cangrejal de Fa</b> POS
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Registrar un nuevo miembro</p>

            <Formik
              intialValues={{
                fullname:"",
                email:"",
                password:"",
                confirm_password:""
              }}
              onSubmit={(values) => {
                console.log(values);
              }}>
              {props => this.showForm(props)}
            </Formik>

          </div>
        </div>
      </div>
    );
  }
}

export default Register;
