import React from 'react';
import CustomButton from "../../components/CustomButton"
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
// import Background from'../../components/Background'
import HomeNav from "../../components/HomeNav";



export default function Home() {
    return (
        <div className="pageWrapHome">
            <HomeNav/>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Link to="/products">
                            <CustomButton class="CustomButton "
                                          sx={{ my: 2, color: 'white', display: 'block' }}
                                          text="Inchiriaza teren">
                            </CustomButton>
                        </Link>
                        <Link to="/">
                            <CustomButton class="CustomButton "
                                          sx={{ my: 2, color: 'white', display: 'block' }}
                                          text="Competitii">
                            </CustomButton>
                        </Link>
                    </Box>
                </Box>
            </Container>
         </div>
    )
}
