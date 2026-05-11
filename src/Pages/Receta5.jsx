import MenuBar from "../components/Menubar"
import { Footer } from "../components/Footer"
import gofioEscaldao from "../assets/gofioEscaldao.jpg"

// Estilo embebido del container principal
const pageStyle = {
    fontFamily: 'Times New Roman, serif',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '30px 20px',
    color: '#2c2c2c',
}

function Receta5() {
    return (
        <>
            {/* Encabezado de navegación */}
            <MenuBar />

            {/* container principal */}
            <div style={pageStyle}>

                {/* Nombre del plato */}
                <h2 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>
                    Gofio Escaldado Canario
                </h2>

                {/*  Imagen del plato */}
                <div style={{ width: '100%', marginBottom: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                        src={gofioEscaldao}
                        alt="Gofio escaldado"
                        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                    />
                </div>

                {/*  Contenido de la receta */}
                <div style={{ fontSize: '1.05rem', lineHeight: '1.9', textAlign: 'justify' }}>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Ingredientes</h3>
                    <ul>
                        <li>100 gr de gofio de trigo</li>
                        <li>500 ml de caldo (de verduras, pollo, carne o pescado)</li>
                        <li>Hierbabuena</li>
                        <li>Sal</li>
                        <li>Cebolla roja (opcional)</li>
                    </ul>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Preparación</h3>
                    <ol style={{ lineHeight: '2' }}>
                        <li>Ponemos el gofio en una fuente o bol junto con unas ramitas de hierbabuena.</li>
                        <li>Vamos vertiendo sobre el gofio el caldo muy caliente sin parar de remover para que no se formen grumos, hasta que quede una mezcla homogénea.</li>
                        <li>Sazonamos con sal al gusto y servimos inmediatamente acompañado de unos gajos de cebolla roja si se desea y de mojos canarios.</li>
                    </ol>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Consejos</h3>
                    <ul>
                        <li>Se puede usar cualquier caldo: de verduras, de pollo, de carne o de pescado. Lo importante es que esté sabroso y añadirlo siempre muy caliente.</li>
                        <li>La cantidad de caldo puede variar según la consistencia deseada: no debe quedar ni muy flojo ni demasiado espeso.</li>
                        <li>Una vez preparado hay que consumirlo enseguida mientras está bien caliente, ya que cuando se enfría pierde todo el encanto.</li>
                    </ul>

                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Receta5