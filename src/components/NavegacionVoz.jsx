import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom'

function NavegacionVoz() {

    // Hook de React Router para redirigir al usuario entre rutas
    const Navegar = useNavigate()

    // Lista de comandos de voz: cada uno define la frase a reconocer y la acción a ejecutar
    const commands = [
        // Navega a la página principal
        { command: 'para el chozo', callback: () => Navegar('/') },
        // Scroll hasta el final de la página                        
        { command: 'para abajo', callback: () => window.scrollTo(0, document.body.scrollHeight) },
        // Scroll hasta el inicio de la página
        { command: 'para arriba', callback: () => window.scrollTo(0, 0) },
        // Navega a la receta de Papas Arrugadas
        { command: 'papas arrugadas', callback: () => Navegar('/papasArrugadas') },
        // Navega a la receta de Ropa Vieja
        { command: 'ropa vieja', callback: () => Navegar('/ropaVieja') },
        // Navega a la receta de Potaje de Berros
        { command: 'potaje de berros', callback: () => Navegar('/potajeBerros') },
        // Navega a la receta de Carne Mechada
        { command: 'carne mechada', callback: () => Navegar('/carneMechada') },
        // Navega a la receta de Carne Mechada
        { command: 'gofio canario', callback: () => Navegar('/gofioEscaldao') },
    ]

    // Extrae del resultado de cada comando si el navegador soporta reconocimiento de voz
    const { browserSupportsSpeechRecognition, transcript } = useSpeechRecognition({ commands })

    // Arranca el micrófono en modo continuo y en español
    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true, language: 'es-ES' })
    }, [])

    // Si el navegador no soporta la API de reconocimiento de voz, muestra un mensaje de aviso
    if (!browserSupportsSpeechRecognition) {
        return <span>El navegador no soporta el reconocimiento de voz</span>
    }
}

export default NavegacionVoz;