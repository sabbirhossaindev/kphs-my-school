import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/UserContext'
import logo from '../assets/logo.png';
import './Navber.css';
import {FcRight} from "react-icons/fc";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
      .then(toast.warning('User logged out!'))
      .catch(error => console.log(error))
  }

  console.log(user)
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
        <img className='logo' src={logo} alt="" />
          <span className='ml-3 text-xl'>KPHS</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900'>Home</Link>

          {user?.email ? (
            <>
              <Link to='/profile' className='mr-5 hover:text-gray-900'>Profile</Link>
              <Link to='/wallet' className='mr-5 hover:text-gray-900'>Wallet</Link>
              <button
                onClick={handleLogout}className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>Logout <FcRight className='ml-2 items-center justify-center'/></button>
            </>
          ) : (
            <Link to='/login' className='mr-5 hover:text-gray-900'>Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
