import React, {useState} from 'react';
import { Link } from'react-router-dom';

import { makeStyles } from '@mui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material'
import CardMediaCustom from "../../../components/CardMediaCustom";
import {openDialog} from "./Dialog/actions"
import {connect} from "react-redux";


const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 250,
        minWidth: 250,
        margin: 10,
    }
})

function MediaCardAdmin(props) {

    const {dispatchOpenDialog}=props;
    const classes = useStyles();
    const { post, onDelete } = props;
    const { adress, id, name , price ,contact ,program } = post;
    const handleOnDelete=()=>{
        onDelete(id);
    }

    return (
        <Card className={classes.mediaCard} >
            <Link to='/terenuri/${id}'>
                <CardMediaCustom idImage={id}/>
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
                <Button
                    onClick={() =>dispatchOpenDialog(true)}
                    display='flex'
                    // to={`/terenuri/${id}`}
                    // component={Link}
                    variant="outlined"
                    color="primary"
                >Edit element</Button>
                <Button
                    onClick={handleOnDelete}
                    display='flex'
                    variant="outlined"
                    color="primary"
                >Delete</Button>
            </CardActions>
        </Card>
    );
}
const mapStateToProps = state => {
    return {
        ...state.dialog,
    };
}

const mapDispatchToProps= {
    dispatchOpenDialog:openDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCardAdmin)