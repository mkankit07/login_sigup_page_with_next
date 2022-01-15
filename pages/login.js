import Head from "next/head";
import Image from "next/image";
import axios from 'axios'
import React, { useState ,useEffect} from "react";
export default function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [loginStatus,setLoginStatus]=useState(false)
  function login(){
      setemail("")
      setpassword("")
      axios.post("http://localhost:8000/login",{
        email,password
      }).then((data)=>{
        console.log(data)
        if(!data.data.data.token){
          setLoginStatus(false)
        }else{
          localStorage.setItem('Name', data.data.data.token);
          setLoginStatus(true)
          alert(data.data.data.token)
        }
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
        <title>login</title>
      </Head>
      <main className="d-flex flex-xl-column align-items-center justify-content-center">
        <div className="login-page d-flex align-items-center mt-2">
          <div className="bg-img"></div>
          <div className="mainContainer">
            <section>
              <div className="start">
                <span style={{ fontSize: "150%" }}>
                  <b>login ✌</b>
                </span>
                <p style={{ fontSize: "80%" }}>
                  How do I get stated dolor at?
                </p>
              </div>
            </section>
            <section>
              <div className="logwith">
                <div className="acc">
                  {/* <img src="google-logo.png" width="6%" height="6%" alt="" /> */}
                  <p>login with google</p>
                </div>
                <div className="acc">
                  {/* <img src="facebook.png" width="6%" height="6%" alt="" /> */}
                  <p> login with facabook</p>
                </div>
              </div>
            </section>
            <div className="hr">
              <hr />
              Or log in with Email <hr />
            </div>
            <div className="logdetail">
              <div className="input_group">
                <span style={{ fontSize: "80%" }}>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter the email"
                  onChange={(e)=>{setemail(e.target.value)}}
                  className="inp"
                />
              </div>
              <div className="input_group">
                <span style={{ fontSize: "80%" }}>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter the pasword"
                  className="inp"
                  onChange={(e)=>{setpassword(e.target.value)}}
                />
              </div>
            </div>
            <div className="forg">
              <span>
               <a href="#"> <p style={{ fontSize: "85%", color: "RED" }}>forget password</p></a>
              </span>
            </div>
            <div className="sub_button">
              <button className="button"  onClick={login}  type="button">
                Login
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
