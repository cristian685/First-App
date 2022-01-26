import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import React from "react";
import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";
import {ThemeProvider} from "@emotion/react";
import PropTypes from "prop-types";



const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#1b5e20',
        },
    },
});

export default function UserReservationCard(props) {

    const { reservationPost, userId } = props;
    const { phone, firstName , lastName ,id ,date ,hours ,isConfirmed ,numeTeren} = reservationPost;
    let color = "secondary"
    let itIsConfirmed = " ";
    if(isConfirmed ==false)
    {
        itIsConfirmed = "Nu este confirmata"
         color = "primary"
    }
    else {
        itIsConfirmed = "Rezervarea a fost confirmata"
    }

   const hour = (hours.map(product => {
       return  <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
            {product}
       </Typography>
   }))

    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
                sx={{
                    minWidth:250,
                    p: 1,
                    m: 1,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                    color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 5,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    ...sx,
                }}
                {...other}
            />
        );
    }

    Item.propTypes = {
        sx: PropTypes.oneOfType([
            PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
            ),
            PropTypes.func,
            PropTypes.object,
        ]),
    };

    return (
        <ThemeProvider theme={theme}>
            <Item>
                        <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                            {numeTeren}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                            firstname: {firstName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                            lastName: {lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                            data: {date && date.substr(0, 10)}
                        </Typography>
                        <Typography variant="body2" color={color} marginTop={'10px'}>
                           {itIsConfirmed}
                        </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                   interval rezervare: {hour}
                </Typography>
                        <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                            Id: {userId}
                        </Typography>
            </Item>
        </ThemeProvider>
    )
}