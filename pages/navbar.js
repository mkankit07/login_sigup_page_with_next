
import Head from "next/head";
import Link from 'next/link' 
import Image from 'next/image'
export default function Navbar() {
    return (

 <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 d-flex ">
        <div className="container-fluid d-flex justify-content-end">
          <a className="navbar-brand" href="#">
            Top navbar
          </a>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav me-5 mb-2 mb-md-0">
              <li className="nav-item me-4">
                <Link className="nav-link active " aria-current="page" href="/">
                Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 



    )}



