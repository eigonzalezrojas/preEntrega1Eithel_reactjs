import logo from './market-icon.gif'
import title from './title-logo.png'

function Navbar() {
    return(
        <header className="flex justify-between p-10 bg-slate-100">
            <img className='h-20 w-20' src={logo} alt="logo" />
            <div className='flex justify-items-center items-center'>
                <h1 className='font-mono text-5xl text-sky-400'>Almacén del Maule</h1>
            </div>                        
            <nav className="flex justify-between gap-1">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Home
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Productos
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Contacto
                </button>
            </nav>
        </header>
    )
}

export default Navbar


