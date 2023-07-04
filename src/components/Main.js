import React from 'react'

function Main() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        <article>
            <h3>Articulo 1</h3>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <p>$500</p>
        </article>
        <article>
            <h3>Articulo 1</h3>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <p>$500</p>
        </article>
        <article>
            <h3>Articulo 1</h3>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <p>$500</p>
        </article>
        <article>
            <h3>Articulo 1</h3>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <p>$500</p>
        </article>
        <article>
            <h3>Articulo 1</h3>
            <img src="https://picsum.photos/200/300" alt="img1" className='w-full max-h-[200px] object-cover' />
            <p>$500</p>
        </article>
    </section>
  )
}

export default Main