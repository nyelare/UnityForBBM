import logo from '../components/bbm-logo-red.webp'


function Navigation() {
  return (
    <nav className="w-full h-[80px] p-4 flex justify-center items-center shadow-xl shadow-red-100">
    <img src={logo} className='w-[150px] h-[50px]' alt='logo' />
    
    </nav>
  )
}

export default Navigation