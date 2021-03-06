import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("username is Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Both password need to be the same"
  )
});

class Register extends Component {
  submitForm = (values, history) => {
    axios
      .post("http://localhost:8080/register", values)
      .then(response => {
        console.log(response.data.result);
        if (response.data.result === "exito") {
          swal("Todo bien!", response.data.message, "success")
          .then(value =>{
            history.push("/login");
          });
        } else if(response.data.result === "error"){
          swal("Error!", response.data.message, "error")
        }
      })
      .catch(error => {
        console.log(error);
        swal("Error!", "Something went wrong", "error");
      });
  };
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
        <div className="form-group has-feedback">
          <input 
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            onChange={handleChange}
            value={values.username}
            className={
              errors.username && touched.username ? "form-control is-invalid" : "form-control"
            }
            />
            {errors.fullname && touched.fullname ? (
              <small id="passwordHelp" class="text-danger">
              {errors.username}
              </small>
            ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            className="form-control"
            placeholder="Email"
            className={
              errors.email && touched.email ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.email && touched.email ? (
              <small id="passwordHelp" class="text-danger">
              {errors.email}
              </small>
            ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Password"
            className={
              errors.password && touched.password ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.password && touched.password ? (
              <small id="passwordHelp" class="text-danger">
              {errors.password}
              </small>
            ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            placeholder="Confirm Password"
            className="form-control"
            className={
              errors.password && touched.password ? "form-control is-invalid" : "form-control"
            }
          />
          {errors.confirm_password && touched.confirm_password ? (
              <small id="passwordHelp" class="text-danger">
              {errors.confirm_password}
              </small>
            ) : null}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Confirm
            </button>
          </div>
        </div>
        </form>
      );
    };
  render() {
    return(
<div className="register-box mx-auto">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Basic</b>POS
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
 
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                password: "",
                confirm_password: ""
              }}
              onSubmit={(values,{setSubmitting}) => {
                this.submitForm(values, this.props.history);
                console.log(values);
                setSubmitting(false);
              }}
              validationSchema={SignupSchema}
            >
              {props => this.showForm(props)}
            </Formik>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
    );
  }
}

export default Register;
