
import "./intro.css"
import Personas from "../img/personas.png";
const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hola, mi nombre es </h2>
                <h1 className="i-name">Napoleon Geronimo</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Desarrollador react </div>
                        
                        <div className="i-title-item">Estudiante tec. programacion</div>
                        <div className="i-title-item">Desarrollador react </div>
                        <div className="i-title-item">Estudiante tec. programacion</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop services for customers all sizes
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Personas} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro