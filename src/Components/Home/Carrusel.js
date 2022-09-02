import './Carrusel.css'
import { useRef, useEffect } from 'react';
import axios from "axios";
import Get from "../../Services/publicApiService";

function Carrusel(){

    const slider = useRef(null);
    const intervaloSlider = useRef(null);

    const btnNext = () => {
        /* Valido que haya varios elementos hijos para que no rompa */
        if(slider && slider.current.children.length > 0){

            const firstSlide = slider.current.children[0];

            /* Establezco transicion del carrusel */
            slider.current.style.transition = `1000ms ease-out all`;
            const tamañoSlide = slider.current.children[0].offsetWidth;

            /* Muevo el carrusel */
            slider.current.style.transform = `translateX(-${tamañoSlide}px)`;
            
            const logicaTransicion = () => {
                /* Reinicio la posición del slider */
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(0)`;
                /* Tomamos el primer elemento y lo mandamos al final */
                slider.current.appendChild(firstSlide);

                /* Elimino el evento para que no siga ejecutándose */
                slider.current.removeEventListener('transitionend', logicaTransicion)
            }

            /* EventListenner para esperar a que termine la transicion */
            slider.current.addEventListener('transitionend', logicaTransicion);
        }
    }
    
    const btnPrevious = () => {
        if(slider && slider.current.children.length > 0){

            const cantSlides = slider.current.children.length -1;
            const lastSlide = slider.current.children[cantSlides];

            /* Tomamos el último elemento y lo mandamos al ppo */
            slider.current.insertBefore(lastSlide, slider.current.firstChild);

            slider.current.style.transition = 'none';

            const tamañoSlide = slider.current.children[0].offsetWidth;
            slider.current.style.transform = `translateX(-${tamañoSlide}px)`;
            
            /* Función para que espere finalizar la transición antes de ejecutarse y que no se mezclen las slides*/
            setTimeout(()=>{
                slider.current.style.transition = '1000ms ease-out all';
                slider.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    /* useEffect(()=>{
        intervaloSlider.current = setInterval(()=>{
            btnNext();
        }, 5000);

        slider.current.addEventListener('mouseenter', ()=>{
            clearInterval(intervaloSlider.current);
        })
        slider.current.addEventListener('mouseleave', ()=>{
            intervaloSlider.current = setInterval(()=>{
                btnNext();
            }, 5000);
        })
    }, []);

    useEffect (()=>{
        return intervaloSlider.current = clearInterval(intervaloSlider.current)
    }, []) */

    return(
        <>
        <div className="carrusel">
            <button className='slide-btn slide-btn-left' onClick={ btnPrevious }>&#60;</button>
            <div className="gr-slides" ref={ slider }>
                <div className="slide">
                    <img src="#" alt="img 1" className="slide-img"></img>
                    <h2 className="slide-title">Titulo 1</h2>
                    <p className="slide-p">ipse Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed aspernatur aperiam, numquam soluta temporibus libero laboriosam. Nihil non adipisci, magnam qui sit voluptates officia omnis totam quibusdam! Libero, nulla.</p>
                </div>
                <div className="slide">
                    <img src="#" alt="img 1" className="slide-img"></img>
                    <h2 className="slide-title">Titulo 2</h2>
                    <p className="slide-p">ipse Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed aspernatur aperiam, numquam soluta temporibus libero laboriosam. Nihil non adipisci, magnam qui sit voluptates officia omnis totam quibusdam! Libero, nulla.</p>
                </div>
                <div className="slide">
                    <img src="#" alt="img 1" className="slide-img"></img>
                    <h2 className="slide-title">Titulo 3</h2>
                    <p className="slide-p">ipse Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed aspernatur aperiam, numquam soluta temporibus libero laboriosam. Nihil non adipisci, magnam qui sit voluptates officia omnis totam quibusdam! Libero, nulla.</p>
                </div>
                <div className="slide">
                    <img src="#" alt="img 1" className="slide-img"></img>
                    <h2 className="slide-title">Titulo 4</h2>
                    <p className="slide-p">ipse Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed aspernatur aperiam, numquam soluta temporibus libero laboriosam. Nihil non adipisci, magnam qui sit voluptates officia omnis totam quibusdam! Libero, nulla.</p>
                </div>
                <div className="slide">
                    <img src="#" alt="img 1" className="slide-img"></img>
                    <h2 className="slide-title">Titulo 5</h2>
                    <p className="slide-p">ipse Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed aspernatur aperiam, numquam soluta temporibus libero laboriosam. Nihil non adipisci, magnam qui sit voluptates officia omnis totam quibusdam! Libero, nulla.</p>
                </div>
            </div>
            <button className='slide-btn slide-btn-right' onClick={ btnNext }>&#62;</button>
        </div>
        </>
    );
}

export default Carrusel;