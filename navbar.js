import '../App.css'
import logo from '../logo.svg'

const Navbar = ({children}) => {
    return (
        <div className='Navbar'>
<img src={logo} className='Logo' alt='logo'/>
{children}
</div>
    );
}

export default Navbar