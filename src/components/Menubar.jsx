import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import NavegacionVoz from './NavegacionVoz'

function Menubar() {
    return (

        <>
            {/* Barra de navegación fija superior */}
            <AppBar position="static" sx={{backgroundColor: "#0077C8"}}>
                {/* Container de la barra de navegación */}
                <Container maxWidth="xl">
                    <Toolbar >
                        {/* Grid container con espacio entre items y alineación vertical centrada */}
                        <Grid container spacing={1} sx={{ width: '100%', alignItems: 'center' }}>

                            {/* Enlace a la página de inicio */}
                            <Grid size={{xs: 12, md: 2, lg: 2}}>        
                                <Link to={'/'} style={{ color:'white', whiteSpace:'nowrap' }}>🌴Recetas canarias🌴</Link>
                            </Grid>

                            {/* Enlace a la receta de Papas Arrugadas */}
                            <Grid size={{xs:12, md:2, lg:2}}>        
                                <Link to={'/papasArrugadas'} style={{color:'white', whiteSpace:'nowrap'}}>Papas Arrugadas</Link>
                            </Grid>

                            {/* Enlace a la receta de Ropa Vieja */}
                            <Grid size={{xs:12, md:2, lg:2}}>        
                                <Link to={'/ropaVieja'} style={{color:'white', whiteSpace:'nowrap'}}>Ropa vieja</Link>
                            </Grid>

                            {/* Enlace a la receta de Potaje de Berros */}
                            <Grid size={{xs:12, md:2, lg:2}}>        
                                <Link to={'/potajeBerros'} style={{color:'white', whiteSpace:'nowrap'}}>Potaje de berros</Link>
                            </Grid>

                            {/* Enlace a la receta de Carne Mechada */}
                            <Grid size={{xs:12, md:2, lg:2}}>        
                                <Link to={'/carneMechada'} style={{color:'white', whiteSpace:'nowrap'}}>Carne Mechada</Link>
                            </Grid>

                            {/* Enlace a la receta de Gofio Escaldao */}
                            <Grid size={{xs:12, md:2, lg:2}}>        
                                <Link to="/gofioEscaldao" style={{ color: 'white', whiteSpace:'nowrap' }}>Gofio Escaldao</Link>
                            </Grid>

                        </Grid>
                    </Toolbar >
                </Container>
            </AppBar>

            {/* Componente de navegación por voz */}
            <NavegacionVoz/>
        </>

    );
}

export default Menubar;