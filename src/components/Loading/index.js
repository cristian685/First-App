import React from "react"
import ClipLoader from "react-spinners/ClipLoader"
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    parentLoaderClass:{
        display: 'flex',
        flex: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    loaderCustom: {
        color: "#A237B5"
    }
})

export default function LoadingComponent() {
    const classes = useStyles()
    return(
        <div className={classes.parentLoaderClass}>
            <ClipLoader className={classes.loaderCustom} />
        </div>
    )
}
