import React from 'react'
import ItemListContainer from './ItemListContainer'

const Hero = () => {
    return (
        <>
            <div className='hero contenedor'>

                <div className='grid-item'>
                    <h1 className='upper titleHero'> Imperfecta Cosmética Natural </h1>
                    <h3 className='tipHero'> Cuidamos tu piel, Cuidamos tu salud, Cuidamos el planeta y Cuidamos tu bolsillo. </h3>
                    <h3 className='tipHero'> Libre de sufrimiento animal</h3>
                    <br/>
                    <h3 className='tipHero'> Comprá artesanal!</h3>
                </div>
                <div className=''>
                    <img src='/Imagenes/6600824.jpg' alt='ilustracion rostro de mujer' className='imgMujer' width={400}/>
                </div>
            </div>

            <div>
                <ItemListContainer/>
            </div>
        </>
    )
}

export default Hero