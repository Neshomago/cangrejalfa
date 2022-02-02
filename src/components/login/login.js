import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("username is Required"),
  password: Yup.string().required("Password is required"),
});

class Login extends Component {
  submitForm = (values, history) => {
    console.log(values);
    axios
      .post("http://localhost:8080/login", values)
      .then(response => {
        console.log(response.data.result);
        if (response.data.result === "success") {
          localStorage.setItem("TOKEN_KEY", response.data.token);
          swal("Todo bien!", response.data.message, "success")
          .then(value =>{
            history.push("/dashboard");
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
    
        <div className="form-group input-group has-feedback">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Username"
            className={
              errors.username && touched.username ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user"></span>
            </div>
          </div>
          {errors.username && touched.username ? (
              <small id="passwordHelp" class="text-danger">
              {errors.username}
              </small>
            ) : null}
        </div>
        <div className="form-group input-group mb-3 has-feedback">
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
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
          {errors.password && touched.password ? (
              <small id="passwordHelp" class="text-danger">
              {errors.password}
              </small>
            ) : null}
        </div>
       
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">Remember Me</label>
            </div>
          </div>
          <div class="col-4">
            <button
              type="submit"
              disabled={isSubmitting}
              class="btn btn-primary btn-block"
            >
              Sign In
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
            <p className="login-box-msg">Login to the POS membership</p>
 
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values,{setSubmitting}) => {
                this.submitForm(values, this.props.history);
                console.log(values);
                setSubmitting(false);
              }}
              validationSchema={LoginSchema}
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

export default Login;
