import MenuBar from "../components/Menubar"
import { Footer } from "../components/Footer"
import carneMechada from "../assets/carneMechada.jpg"

// Estilo embebido del container principal
const pageStyle = {
    fontFamily: 'Times New Roman, serif',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '30px 20px',
    color: '#2c2c2c',
}

function Receta4() {
    return (
        <>
            {/* Encabezado de navegación */}
            <MenuBar />

            {/* container principal */}
            <div style={pageStyle}>

                {/* Nombre del plato */}
                <h2 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>
                    Carne Mechada Canaria
                </h2>

                {/*  Imagen del plato */}
                <div style={{ width: '100%', marginBottom: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                        src={carneMechada}
                        alt="Carne mechada"
                        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                    />
                </div>

                {/*  Contenido de la receta */}
                <div style={{ fontSize: '1.05rem', lineHeight: '1.9', textAlign: 'justify' }}>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Ingredientes</h3>
                    <ul>
                        <li>1 vena (peceto) de 1.200 kg</li>
                        <li>12 dientes de ajo pelados (8 enteros y 4 laminados)</li>
                        <li>12 chalotas peladas y enteras</li>
                        <li>3 cebollas grandes peladas y troceadas</li>
                        <li>4 zanahorias peladas y cortadas en rodajas</li>
                        <li>2 hojas de laurel</li>
                        <li>Sal y pimienta</li>
                        <li>Aceite</li>
                        <li>Coñac</li>
                        <li>1 o 2 vasos de agua</li>
                        <li>6 papas peladas y cortadas en cuartos</li>
                    </ul>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Preparación</h3>
                    <ol style={{ lineHeight: '2' }}>
                        <li>Le hacemos ocho incisiones a la carne en diferentes puntos e introducimos los dientes de ajo enteros. Salpimentamos la vena y la atamos con un hilo de cocina o la metemos en una malla. Inyectamos un poco de coñac por diferentes puntos con una jeringuilla.</li>
                        <li>Ponemos aceite en un caldero amplio a fuego alto. Cuando esté caliente colocamos la carne y la giramos para sellarla por todos sus lados. Una vez sellada la retiramos a una bandeja.</li>
                        <li>Bajamos el fuego a la mitad. Agregamos las cebollas y los cuatro dientes de ajo laminados. Removemos y dejamos dorar ligeramente.</li>
                        <li>Volvemos a colocar la carne en el caldero junto con el jugo que haya soltado. Subimos el fuego al máximo, añadimos el coñac y dejamos hervir unos minutos para evaporar el alcohol. Agregamos las zanahorias, las chalotas, las hojas de laurel, un puñadito de sal gruesa y un vaso o dos de agua sin que llegue a cubrir la carne.</li>
                        <li>Cocinamos a fuego bajo durante media hora o hasta que al pincharla el líquido que sale sea claro. A mitad de cocción le damos la vuelta.</li>
                        <li>Sacamos la carne y la ponemos en una bandeja para que repose. Sacamos las zanahorias y chalotas de la salsa y trituramos el resto si se desea. Cortamos la carne y la ponemos en la salsa a fuego bajo unos minutos.</li>
                        <li>Freímos las papas y servimos la carne con las papas, zanahorias y chalotas.</li>
                    </ol>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Consejos</h3>
                    <ul>
                        <li>Aprovechar el agua del caldo para la salsa, así tendrá más sabor.</li>
                        <li>Es importante sellar bien la carne al principio para que conserve todos sus jugos durante la cocción.</li>
                        <li>Si se desea una salsa más fina, triturar toda la verdura del caldo una vez retirada la carne.</li>
                    </ul>

                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Receta4