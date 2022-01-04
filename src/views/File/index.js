import React from 'react';
import { connect } from 'react-redux';
import { setEmail } from './actions';
import {
    Container,
    TextField
} from "@mui/material";

function File(props) {

    //
    console.log(props)

    // useEffect(() => {
    //   props.dispatchSetEmail('Cristi');
    // });
    const handleOnChange = (event) => {
        props.dispatchSetEmail(event.target.value)
    }



    return (
        <Container>
            <TextField
                label="Introdu numarul de telefon"
                value={props?.name}
                margin="normal"
                required
                fullWidth
                name="name"
                autoComplete="current-password"
                onChange={handleOnChange}
            />
        </Container>
    )
}

const mapStateToProps = state => {
    console.log('File',state);
    return {
        email: state.email
    }
}
const mapDispatchToProps = {
    dispatchSetEmail:setEmail
}

export default connect(mapStateToProps,mapDispatchToProps)(File);
