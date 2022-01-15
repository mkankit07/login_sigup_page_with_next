import Head from "next/head";
import Link from "next/link";
import img from "next/image";
import axios from 'axios'
import React, { useState } from 'react'
import Navbar from "./navbar";
export default function Signup() {
  const [name, setname] = useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [date,setdate]=useState("")
  const [gender,setgender]=useState("")


  const hendlesubmit=(e)=>{
    // e.preventDefault()
    setname("")
    console.log({email,password,phoneNumber,date ,gender});
    axios.post('http://localhost:8000/signup',{email,password,phoneNumber  ,gender}).then((data)=>{
      console.log(data);
      
    }).catch(err=>{
      console.log(err.massage);
    })
  }


  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />{" "}
        <title>Signup</title>
      </Head>
      <Navbar />
      <main className="d-flex flex-xl-column align-items-center justify-content-center">
        <div className="login-page d-flex align-items-center mt-2">
          <div className="bg-img"></div>
          <div className="mainContainer">
            <section>
              <div className=" d-flex justify-content-center">
                <h2>Sign up</h2>
              </div>
            </section>
            <div>
              <div
                className="d-flex flex-xl-column justify-content-center mx-3 my-2 "
                style={{ fontSize: "90%" }}
              >
                <form className="d-flex flex-xl-column"  onSubmit={hendlesubmit}>
                  <div>
                  <input
                    type="text"
                    placeholder="Enter  Name"
                    className="input-field"
                    value={name} name="name" onChange={(e)=>{setname(e.target.value)}}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="input-field"
                    value={email} name="email" onChange={(e)=>{setemail(e.target.value)}}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-field"
                    value={password} name="password" onChange={(e)=>{setpassword(e.target.value)}}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="input-field"
                    value={phoneNumber} name="PhoneNumber" onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    required
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    style={{ fontSize: "90%" }}
                    className="input-field"
                    value={date} name="date" onChange={(e)=>{setdate(e.target.value)}}
                    required
                  />
                  </div>
                  <div
                    className="gender_input ms-3 text-align-center"
                    style={{ fontSize: "90%" }}
                  >
                    <p className="mt-3 mb-2">Gender*</p>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      onChange={(e)=>{setgender(e.target.value)}}
                    />  <label htmlFor="male">Male</label> {" "}
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      onChange={(e)=>{setgender(e.target.value)}}
                    />
                      <label htmlFor="female">female</label> {" "}
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="Other"
                      onChange={(e)=>{setgender(e.target.value)}}
                    />
                      <label htmlFor="other">Other</label>
                  </div>
                  <div className="num my-3 d-flex justify-content-center text-align-center">
                    <input type="checkbox" name="remember" className="ms-3" />
                    <p className="ms-3 me-4" style={{ fontSize: "80%" }}>
                      By creating account I accept Glitch{" "}
                      <a href="#">Terms & Conditions </a> and{" "}
                      <a href="#">privary policy</a>{" "}
                    </p>
                  </div>
                  <div>
                    <input type="submit"className="submit-btn"/>      
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
