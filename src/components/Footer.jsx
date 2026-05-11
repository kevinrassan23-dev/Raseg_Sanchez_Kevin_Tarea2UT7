// Estilos embebidos del footer
const footerStyle = {
    backgroundColor: '#FFCC00',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'bold',
    fontSize: '15px',
    marginTop: '40px',
    borderTop: '3px solid #c9a800',
    letterSpacing: '0.5px',
}

// Componente footer de la página
export function Footer() {
    return (
        <footer style={footerStyle}>
            Creado por Kevin Raseg Sánchez 2ºA-DAM © 2025 — Todos los derechos reservados
        </footer>
    )
}
