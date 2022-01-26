import { getAuth, updateProfile } from "firebase/auth";
import Button from "@mui/material/Button";

const auth = getAuth();


export default function Profile() {


    const handleUpdateProfile= () => {
        updateProfile(auth.currentUser, {
            displayName: "Popina Cristian-Sebatian", photoURL: "https://example.com/jane-q-user/profile.jpg" ,isAdmin :true
        }).then(() => {
            // Profile updated!
            alert('updated')
            // ...
        }).catch((error) => {
            alert('error')
            // An error occurred
            // ...
        });
    }
    return <div>

        <Button onClick={handleUpdateProfile}>
            Update profile

        </Button>
        profile page
    </div>
}