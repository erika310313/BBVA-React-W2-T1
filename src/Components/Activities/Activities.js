import React from "react";
import { Link } from 'react-router-dom';
import './Activities.css'
import Activities1 from '../../img/Activities1.jpg'
import Activities2 from '../../img/Activities2.jpg'
import Activities3 from '../../img/Activities3.png'
import Activities4 from '../../img/Activities4.jpg'

function Activities() {

    return(
        <>
            <div className="container">
                <div className="row">
                    
                    <div className='content-school "container-sm"'>
                        <h1>Actividades</h1>
                            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Activities1} className="img-fluid" alt="Responsive image"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Activities2}  className="img-fluid" alt="Responsive image"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Activities3} className="img-fluid" alt="Responsive image"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Activities4} className="img-fluid" alt="Responsive image"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                    </div>

                </div>
                <div className="row">
                    <h3>Nombre de la Actividad</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis vel mi id fermentum. Duis sit amet lacinia enim, vel fringilla diam. Mauris luctus lacus justo, non aliquam elit malesuada sit amet. Etiam maximus ut nisi nec commodo. Nullam lectus leo, tristique vitae pellentesque id, blandit ac eros. Suspendisse eu sapien sagittis, tincidunt velit accumsan, blandit felis. Mauris viverra nisl convallis, malesuada lacus a, finibus lacus. Suspendisse massa tellus, placerat eu quam a, eleifend pharetra nunc.
                        Aenean non mi id odio convallis aliquet. Ut imperdiet est eros, non molestie mauris venenatis in. Suspendisse mattis mauris ut faucibus ultricies. Vivamus id feugiat eros. Aenean malesuada iaculis nibh, nec vehicula nibh imperdiet et. Praesent id semper tortor. Sed sed metus sagittis, viverra neque a, blandit orci. Pellentesque et tincidunt tellus, eu vehicula dolor. Donec hendrerit enim non tortor posuere scelerisque. Ut lacinia ante ac porttitor fermentum. Maecenas consequat, diam sed scelerisque iaculis, nisi tellus commodo leo, quis placerat urna est ut sem. Vivamus ultricies, est vitae iaculis accumsan, orci odio vehicula sapien, ultrices vestibulum diam quam ac mi. Donec et sodales purus. Donec pulvinar felis sed metus iaculis, sed faucibus neque viverra. Nunc nisl felis, maximus nec mollis sit amet, varius a sem.</p>
                        <div>
                            <button className="btn btn-danger"><Link to="/" className="text-header white" >Ir al inicio</Link></button> 
                        </div>
                </div>
            </div>
        </>
    )
}

export default Activities;