import Navbar from '../../Navbar/Navbar'
import Header from '../../Header/Header'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Outlet />
    </>
  )
}

export default RootLayouts