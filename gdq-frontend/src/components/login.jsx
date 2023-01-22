import "../style.css";
import React, { useState, useEffect, useContext } from "react"
import "../style.css";
import { CurrentUserContext } from "../contexts/currentUser";
import {useNavigate} from "react-router-dom"
export default function (props) {

    const [state, setState, useState] = setState([])

    const login = async () => {
      console.log( "I'm in!")
      const login = await fetch("/router")
      console.log("ring! ring!", login)
      const cleanlogin = await login.json
  
  
      console.log("clean login", cleanlogin)
       setState (cleanlogin)
    }
  
    console.log("state", state)

  let [authMode, setAuthMode] = useState("signin")
  let [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  let {setCurrentUser} = useContext(CurrentUserContext)
  const navigate = useNavigate()
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  async function handleSubmit(e){
    e.preventDefault()
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if(response.status === 200){
      const {user,token} = data
      setCurrentUser(user)
      localStorage.setItem("token", token)
      navigate("/")
    } else {
      console.log("failed to login")
    }
  }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={e => setCredentials({...credentials, email: e.target.value}) }
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={e => setCredentials({...credentials, password: e.target.value}) }
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button  className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

