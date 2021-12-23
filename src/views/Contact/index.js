import React from "react"
import { connect} from "react-redux"
import {setName} from"./actions"
import { TextField, Container } from"@mui/material"


function Contact(props) {
    console.log(props)

    // useEffect(() => {
    //   props.dispatchSetName('Cristi');
    // });
    const handleOnChange = (event) => {
        props.dispatchSetName(event.target.value)
    }
    return(
        <Container>
            <TextField
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
    console.log(state)
    return {
        name: state.contact.name,
    };
}

const mapDispatchToProps= {
    dispatchSetName:setName
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)