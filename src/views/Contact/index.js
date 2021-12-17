import React, {useEffect} from "react"
import { connect} from "react-redux"
import {setName} from"./actions"
import { TextField, Container } from"@mui/material"


function Contact(props) {
    console.log(props)

    useEffect(() => {
      props.dispatchSetName('Cristi');

    });
    const handleOnChange = (event) => {
        props.dispatchSetName(event.target.value)
    }
    return(
        <Container>
            <TextField
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
    return {
     name: state.name,
    };
}

const mapDispatchToProps= {
    dispatchSetName:setName
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)