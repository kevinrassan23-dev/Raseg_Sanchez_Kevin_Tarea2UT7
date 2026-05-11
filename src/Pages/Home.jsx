import MenuBar from "../components/Menubar"
import canarias from "../assets/islasCanarias.jpg"
import { Footer } from "../components/Footer"

function Home() {
    return (
        <>
            {/* Encabezado de navegación */}
            <MenuBar />

            {/* container principal */}
            <div style={pageStyle}>

                {/* Título */}
                <h2 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', textAlign: 'center', fontSize: '2.2rem', marginBottom: '24px' }}>
                    Recetas Canarias
                </h2>

                {/* Espacio para poner la imagen */}
                <div style={{
                    width: '100%',
                    height: '320px',
                    backgroundColor: '#f0ece0',
                    border: '2px dashed #b0a070',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    marginBottom: '28px',
                    color: '#888',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                }}>
                    
                    <img src={canarias} alt="Archipiélago Canario" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'8px'}} />
                </div>

                {/* Introducción */}
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px', textAlign: 'justify' }}>
                    En esta página se documentan algunas recetas de los manjares más conocidos de las Islas Canarias.
                    La gastronomía canaria es el resultado de siglos de historia, mezcla de culturas y del privilegio
                    de habitar un archipiélago volcánico de increíble riqueza natural. Desde las humildes papas arrugadas
                    con mojo hasta el reconfortante potaje de berros, cada plato cuenta una historia de identidad y tradición.
                    Aquí encontrarás paso a paso todo lo necesario para recrear en casa los sabores más auténticos de las islas.
                </p>

                <h3 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '14px' }}>
                    💡 Tip extra: Navegación por comandos de voz
                </h3>

                {/* Lista de comandos por voz */}
                <ul style={{ lineHeight: '2', fontSize: '1rem', paddingLeft: '24px', marginBottom: '40px' }}>
                    <li><strong>"para el chozo"</strong> → Vuelve a la página de inicio</li>
                    <li><strong>"para abajo"</strong> → Baja al pie de página</li>
                    <li><strong>"para arriba"</strong> → Sube al encabezado</li>
                    <li><strong>"papas arrugadas"</strong> → Navega a la receta de Papas Arrugadas</li>
                    <li><strong>"ropa vieja"</strong> → Navega a la receta de Ropa Vieja</li>
                    <li><strong>"potaje de berros"</strong> → Navega a la receta de Potaje de Berros</li>
                    <li><strong>"carne mechada"</strong> → Navega a la receta de Carne Mechada</li>
                    <li><strong>"gofio canario"</strong> → Navega a la receta de Gofio Escaldao</li>
                </ul>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home

// Estilo embebido del container principal
const pageStyle = {
    fontFamily: 'Times New Roman, serif',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '30px 20px',
    color: '#2c2c2c',
}