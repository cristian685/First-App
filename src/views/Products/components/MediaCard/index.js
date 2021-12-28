import React from 'react';
import { Link } from'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {ThemeProvider} from "@emotion/react";
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
const useStyles = makeStyles({
    mediaCard: {
        minWidth: 250,
        margin: 10,
    }
})


export default function MediaCard(props) {

    const classes = useStyles();
    const { post } = props;
    const { adress, id, name , price ,contact ,program } = post;


    return (
        <Card className={classes.mediaCard} >
            <Link to='/terenuri/${id}'>
                <CardMedia
                    component="img"
                    src={post.url}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                    Adresa: {adress}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                    Contact: {contact}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                    Program: {program}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" marginTop={'10px'}>
                    Pret/h: {price} RON
                </Typography>
            </CardContent>

            <CardActions>
                <ThemeProvider theme={theme}>
                <Button
                    display='flex'
                    to={`/terenuri/${id}`}
                    component={Link}
                    variant="contained"
                    color="secondary"
                >Fa o rezervare</Button>
                    </ThemeProvider>
            </CardActions>
        </Card>
    );
}