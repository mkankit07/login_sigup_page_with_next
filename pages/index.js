import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import  Signup from './signup'
import Login from "./login"
import Navbar from './navbar'
export default function Home() {
  return (
    <>
    <Head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      <title>Signup</title>
    </Head>
    <Navbar/>
   <Login/>
  </>
  )
}
