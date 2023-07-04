import logo from '../market-icon.gif'
import CartWidget from './CartWidget'

function Navbar() {
    return(
        <header className="flex justify-between p-10 bg-slate-100">
            <img className='h-20 w-20' src={logo} alt="logo" />
            <div className='flex justify-items-center items-center'>
                <h1 className='font-mono text-5xl text-sky-400'>Almacén del Maule</h1>
            </div>                        
            <nav className="flex gap-2">            
                <a href="#home">Home</a>
                <a href="#news">Productos</a>
                <a href="#contact">Contacto</a>
                <a href="#about">About</a>
                <CartWidget></CartWidget>
            </nav>
        </header>
    )
}

export default Navbar


