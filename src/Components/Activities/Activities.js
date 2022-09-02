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
                        <h1>Actividad de la ONG</h1>
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
                    <h3>Programas Educativos</h3>
                    <p> Mediante nuestros programas educativos, buscamos incrementar la capacidad intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad a la que pertenecen.</p>
                    <p><b> Apoyo Escolar para el nivel Primario:</b> El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atención especial! Actualmente se encuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos con el material que traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos para nivelar a los niños y que vayan con más herramientas a la escuela.</p>
                    <p><b>Apoyo Escolar Nivel Secundaria:</b> Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13 y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y una docente de la institución y un grupo de voluntarios los recibe para ayudarlos a estudiar o hacer la tarea. Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos y la institución.</p>
                    <p><b>Tutorías:</b> Es un programa destinado a jóvenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio. El objetivo de esta propuesta es lograr la integración escolar de niños y jóvenes del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a través de la articulación de nuestras intervenciones con las escuelas que los alojan, con las familias de los alumnos y con las instancias municipales, provinciales y nacionales que correspondan. El programa contempla:</p>
                    <p>● Encuentro semanal con tutores (Individuales y grupales)</p>
                    <p>● Actividad proyecto (los participantes del programa deben pensar una actividad relacionada a lo que quieren hacer una vez terminada la escuela y su tutor los acompaña en el proceso)</p>
                    <p>● Ayudantías (los que comienzan el 2do años del programa deben elegir una de las actividades que se realizan en la institución para acompañarla e ir conociendo como es el mundo laboral que les espera).</p>
                    <p>● Acompañamiento escolar y familiar (Los tutores son encargados de articular con la familia y con las escuelas de los jóvenes para monitorear el estado de los tutorados)</p>
                    <p>● Beca estímulo (los jóvenes reciben una beca estímulo que es supervisada por los tutores). Actualmente se encuentran inscriptos en el programa 30 adolescentes.</p>
                    <p>● Taller Arte y Cuentos: Taller literario y de manualidades que se realizasemanalmente.</p>
                    <p>● Paseos recreativos y educativos: Estos paseos están pensados para promover la participación y sentido de pertenencia de los niños, niñas y adolescentes al área educativa.</p>
                        
                        <div>
                            <button className="btn btn-danger"><Link to="/" className="text-header white" >Ir al inicio</Link></button> 
                        </div>
                </div>
            </div>
        </>
    )
}

export default Activities;