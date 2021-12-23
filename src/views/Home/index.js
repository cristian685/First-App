import React from 'react';
import './home.css'
import CustomButton from "../../components/CustomButton"
import LoadingComponent from "../../components/Loading";
import {isLoading} from "../AdminPage/actions";



export default function Home(props) {
    const {loading} =props.
    if(loading)
    {
        return <div >
            <h1>
                <LoadingComponent/>
            </h1>
        </div>
    }
    return <div className="pageWrapHome">

                     Home Page

                    <CustomButton />
            </div>
}