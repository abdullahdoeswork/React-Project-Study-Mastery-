import '../App.css';
import navbarImg from '../navbarimg.svg';

const NavbarButton = () => {
    return (
    <button className='NavbarButton'>
        <img src={navbarImg} alt='Navbar Button'/>
    </button>
    )
}

export default NavbarButton