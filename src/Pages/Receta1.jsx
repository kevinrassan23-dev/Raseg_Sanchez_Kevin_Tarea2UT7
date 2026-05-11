import MenuBar from "../components/Menubar"
import { Footer } from "../components/Footer"
import papasArrugadas from "../assets/papasArrugadas.jpg"

// Estilo embebido del container principal
const pageStyle = {
    fontFamily: 'Times New Roman, serif',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '30px 20px',
    color: '#2c2c2c',
}

function Receta1() {
    return (
        <>
            {/* Encabezado de navegación */}
            <MenuBar />

            {/* container principal */}
            <div style={pageStyle}>

                {/* Nombre del plato */}
                <h2 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>
                    Papas Arrugadas con Mojo Rojo
                </h2>

                {/*  Imagen del plato */}
                <div style={{ width: '100%', marginBottom: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                        src={papasArrugadas}
                        alt="Papas Arrugadas con Mojo Rojo"
                        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                    />
                </div>

                {/*  Contenido de la receta */}
                <div style={{ fontSize: '1.05rem', lineHeight: '1.9', textAlign: 'justify' }}>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Ingredientes</h3>
                    <ul>
                        <li>24 patatas mini</li>
                        <li>Sal gruesa</li>
                        <li>Agua</li>
                    </ul>

                    <h4 style={{ fontWeight: 'bold', marginTop: '16px' }}>Para el mojo rojo:</h4>
                    <ul>
                        <li>2 guindillas</li>
                        <li>4 pimientos rojos secos</li>
                        <li>1 cucharada de comino</li>
                        <li>30 gramos de pan duro</li>
                        <li>2 ajos escaldados</li>
                        <li>Vinagre de Jerez</li>
                        <li>100 ml de aceite de oliva</li>
                    </ul>

                    <h4 style={{ fontWeight: 'bold', marginTop: '16px' }}>Para el mojo verde:</h4>
                    <ul>
                        <li>Perejil fresco</li>
                        <li>Cilantro fresco</li>
                        <li>100 ml de aceite de oliva</li>
                        <li>3 dientes de ajo</li>
                        <li>40 gramos de anacardos</li>
                        <li>1/2 cucharada de comino</li>
                        <li>2 guindillas</li>
                        <li>20 ml de vino blanco</li>
                    </ul>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Preparación</h3>
                    <ol style={{ lineHeight: '2' }}>
                        <li>Lavamos las patatas y en un cazo grande las colocamos cubiertas con el mismo volumen de agua fría que de sal. Las patatas deben quedar simplemente cubiertas con el agua.</li>
                        <li>Sancochamos a fuego lento hasta que el agua se evapore y la sal se haya pegado a la piel de las patatas. Unos 21 minutos.</li>
                        <li><strong>Para el mojo verde:</strong> en una turmix triturar todos los ingredientes.</li>
                        <li><strong>Para el mojo rojo:</strong> en un mortero majar los ajos pelados y picados, el comino, el pan, los pimientos rojos secos, la guindilla y la sal hasta formar una pasta homogénea.</li>
                        <li>Añadimos el pimentón y muy lentamente el aceite de oliva y el vinagre hasta formar una pasta homogénea. Rectificamos el punto de la salsa y si es necesario añadimos un poco de agua.</li>
                        <li>Servimos las papas arrugadas acompañadas de los mojos verde y rojo.</li>
                    </ol>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Consejos</h3>
                    <ul>
                        <li>Usar un paño limpio o papel de cocina por encima de las papas al sancocharse en el caldero, para acelerar la cocción interna y que no se queden duras por dentro.</li>
                        <li>Añadir un limón partido antes de sancochar para darle más sabor.</li>
                    </ul>

                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Receta1