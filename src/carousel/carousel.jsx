import React from 'react';
import styles from './Carousel.css';

function Carousel({imagenes}) {

const [imagenActual, setImagenActual] = React.useState(0);
const cantidad = imagenes?.length;

if(!Array.isArray(imagenes) || cantidad === 0)
return;

const nextImage =()=>{
    setImagenActual(imagenActual === cantidad -1 ? 0 : imagenActual + 1);
}

const previusImage =()=>{
    setImagenActual(imagenActual === 0 ? cantidad -1 : imagenActual - 1);
}

    return (
        <div className='container'>
            <button className='buttonleft' onClick={previusImage}>{'<'}</button>
            {imagenes.map((imagen,index)=>{
                if(imagenActual===index){
                    return(<div key={index} className='imgcontainer'>
                    <img  src={imagen} alt="imagen" className='imgcarousel'/>
                    </div>)
                }
                //return(<></>)
            })}
            <button className='buttonright' onClick={nextImage}>{'>'}</button>
        </div>
    )
}

export default Carousel;
