import MenuBar from "../components/Menubar"
import { Footer } from "../components/Footer"
import ropaVieja from "../assets/ropaVieja.jpg"

// Estilo embebido del container principal
const pageStyle = {
    fontFamily: 'Times New Roman, serif',
    maxWidth: '860px',
    margin: '0 auto',
    padding: '30px 20px',
    color: '#2c2c2c',
}

function Receta2() {
    return (
        <>
            {/* Encabezado de navegación */}
            <MenuBar />

            {/* container principal */}
            <div style={pageStyle}>

                {/* Nombre del plato */}
                <h2 style={{ fontFamily: 'Times New Roman, serif', fontWeight: 'bold', textAlign: 'center', fontSize: '2rem', marginBottom: '24px' }}>
                    Ropa Vieja Canaria
                </h2>

                {/*  Imagen del plato */}
                <div style={{ width: '100%', marginBottom: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img
                        src={ropaVieja}
                        alt="Ropa vieja canaria"
                        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                    />
                </div>

                {/*  Contenido de la receta */}
                <div style={{ fontSize: '1.05rem', lineHeight: '1.9', textAlign: 'justify' }}>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Ingredientes</h3>
                    <ul>
                        <li>Restos de carne y pollo de un caldo, puchero o cocido</li>
                        <li>250 gr de garbanzos sancochados (pueden ser de bote)</li>
                        <li>1 cebolla</li>
                        <li>2 o 3 dientes de ajo</li>
                        <li>1 pimiento verde o rojo mediano</li>
                        <li>2 o 3 tomates de fritura o 200 g de tomate natural triturado de bote</li>
                        <li>1 o 2 hojas de laurel</li>
                        <li>1 cucharadita de tomillo seco</li>
                        <li>1 cucharadita de orégano</li>
                        <li>1 cucharadita de pimentón dulce</li>
                        <li>10 granos de pimienta negra</li>
                        <li>Aceite de oliva virgen</li>
                        <li>1/2 vaso de caldo de guisar el pollo y la carne</li>
                        <li>1/2 vaso de vino blanco (opcional)</li>
                        <li>Sal</li>
                        <li>Perejil</li>
                        <li>Papas fritas (opcional)</li>
                    </ul>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Preparación</h3>
                    <ol style={{ lineHeight: '2' }}>
                        <li>Desmenuzamos bien el pollo y la carne y reservamos.</li>
                        <li>Pelamos los ajos y la cebolla y la cortamos pequeñita. En una sartén honda o caldero con un poco de aceite sofreímos los ajos y la cebolla. Cuando estén doraditas añadimos el pimiento cortado en juliana y sofreímos.</li>
                        <li>Añadimos el tomate triturado y dejamos que se cocine hasta tener un sofrito consistente.</li>
                        <li>Añadimos una cucharita de pimentón y rehogamos 1 minuto, incorporamos el pollo y la carne desmenuzados y rehogamos otro minuto. Añadimos también los garbanzos sancochados, el laurel, el tomillo, el orégano y la pimienta en grano.</li>
                        <li>Sazonamos con sal y echamos un poco de caldo o vino si se prefiere. Tapamos y dejamos que hierva todo junto unos 5 minutos.</li>
                        <li>En el momento de servir lo acompañamos con perejil picado y unas papas fritas cortadas en daditos pequeños.</li>
                    </ol>

                    <h3 style={{ fontWeight: 'bold', marginTop: '28px' }}>Consejos</h3>
                    <ul>
                        <li>La tarea de desmenuzar el pollo y la carne es mucho más fácil si lo hacemos cuando están tibios y con las manos. Si dejas que se enfríe del todo la carne se endurece.</li>
                        <li>Este es un plato de aprovechamiento, se trata de usar los restos de carne o pollo que hayan sobrado de cualquier otra preparación.</li>
                        <li>La cantidad de caldo a añadir es al gusto, dependiendo de si te gusta más seca o más jugosa. Por lo general es un plato que se toma sobre lo seco.</li>
                        <li>Si no tienes caldo puedes añadir un poco de vino blanco, dejar que se evapore el alcohol y si te parece muy espesa añadir un poquito de agua.</li>
                    </ul>

                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Receta2