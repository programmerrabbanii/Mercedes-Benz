import { AiOutlineMenu } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import  { AuthContext } from '../Provider/AuthProvider'


const  Dropdown= () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user,logOut } = useContext(AuthContext)

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : ''}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            
             {
              user ? 
              <>
           <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

           <Link
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </Link>

           

           <a
              onClick={logOut}
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Lot Out
            </a>

              </>
              
              :
              <>
              <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

            <Link
              to='/login'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Sign Up
            </Link>
              </>
             }
            

          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown 