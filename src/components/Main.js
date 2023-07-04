import React from 'react'

function Main() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        <article>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <h3>Articulo</h3>
            <p>$500</p>
            <button>Agregar</button>
        </article>
        <article>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <h3>Articulo</h3>
            <p>$500</p>
            <button>Agregar</button>
        </article>
        <article>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <h3>Articulo</h3>
            <p>$500</p>
            <button>Agregar</button>
        </article>
        <article>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <h3>Articulo</h3>
            <p>$500</p>
            <button>Agregar</button>
        </article>
        <article>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <h3>Articulo</h3>
            <p>$500</p>
            <button>Agregar</button>
        </article>
    </section>
  )
}

export default Main