import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import Announcements from '../components/Announcements'
import {Slider} from '../components/Slider'
const App = () => {
return (
  <>
    <Announcements/>
    <Navbar />
    <Slider />
  </>
)
}

export default App