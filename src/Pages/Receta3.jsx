import MenuBar from "../components/Menubar"
import { Footer } from "../components/Footer"
import potajeBerros from "../assets/potajeBerros.jpg"

// Estilo embebido del container principal
const pageStyle = {
    fontFamily: 'Times New Roman, serif',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '30px 20px',
    color: '#2c2c2c',
}

function Receta3() {
    return (
        <>
            {/* Encabezado de navegación */}
            <MenuBar />

            {/* container principal */}
            <div style={pageStyle}>

                {/* Nombre del plato */}
                <h2 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>
                    Potaje de Berros
                </h2>

                {/*  Imagen del plato */}
                <div style={{ width: '100%', marginBottom: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                        src={potajeBerros}
                        alt="Potaje de berros"
                        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                    />
                </div>

                {/*  Contenido de la receta */}
                <div style={{ fontSize: '1.05rem', lineHeight: '1.9', textAlign: 'justify' }}>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Ingredientes</h3>
                    <ul>
                        <li>2 calabacinos medianos</li>
                        <li>200 gramos de habichuelas (judías verdes)</li>
                        <li>2 zanahorias medianas</li>
                        <li>350 gramos de calabaza</li>
                        <li>1 cebolla</li>
                        <li>450 gramos de berros</li>
                        <li>Aceite de oliva virgen</li>
                        <li>Sal</li>
                        <li>200 gramos de costilla fresca de cerdo</li>
                        <li>1 muslo de pollo</li>
                        <li>3 piñas (mazorcas)</li>
                    </ul>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Preparación</h3>
                    <ol style={{ lineHeight: '2' }}>
                        <li>Pelamos la cebolla y la cortamos en trozos pequeños. En un caldero con un poco de aceite la hacemos a fuego bajo. Lavamos y pelamos la zanahoria y las habichuelas en trozos pequeños y las introducimos en el caldero removiendo.</li>
                        <li>Añadimos agua, las piñas troceadas, peladas y lavadas junto con la costilla y el pollo. Subimos el fuego a medio/alto.</li>
                        <li>Lavamos las papas, las pelamos, las cortamos en trozos pequeños y las añadimos al caldero.</li>
                        <li>Hacemos igual con la calabaza y los calabacinos: los lavamos, cortamos y añadimos al caldero con sal.</li>
                        <li>Por último lavamos y picamos los berros, ya que necesitan poco tiempo en el fuego para su cocción, y los añadimos.</li>
                        <li>Dejamos unos minutos más al fuego, comprobamos que las verduras están tiernas y emplatamos.</li>
                    </ol>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Consejos</h3>
                    <ul>
                        <li>Echar las judías a los 30 o 45 minutos después de empezar a sancochar.</li>
                        <li>Se puede acompañar espolvoreando una cuchara de gofio por encima del potaje y un buen queso canario.</li>
                        <li>En un plato hondo colocar varios cucharones de potaje y encima un trozo de piña.</li>
                    </ul>

                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Receta3