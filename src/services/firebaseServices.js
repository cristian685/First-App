import {useState , useEffect} from "react"
import {collection, getDocs , addDoc ,updateDoc, doc , deleteDoc} from "firebase/firestore";
import {fetchUser} from "./firebaseService"
import {database} from "../config/firebaseConfig";


function FirebaseGetProducts()
{
    const[newName, setNewName] = useState(" ")
    const[newAge , setNewAge] = useState(0)
   const [users, setUsers]=useState([]);
   const usersCollectionRef = collection(database,"users");

   const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName , age:Number(newAge)});
   };

   const updateUser= async (id, age) =>{
       const userDoc=doc (database, "users", id)
       const newFields = {age: age + 1}
       await updateDoc(userDoc , newFields)
   }

   const deleteUser=async (id) => {
       const userDoc=doc (database, "users", id)
       await deleteDoc(userDoc);
   }
    useEffect(() => {
        const getUsers = async () => {
            // const data = await getDocs(usersCollectionRef);
            // setUsers(data.docs.map((doc) =>({...doc.data() , id: doc.id}) ))
            const data = await fetchUser()
            console.log(data)
        };
        getUsers();
    },[]);

    return (
        <div>
            <input placeholder="Name..."
                   onChange={(event) =>{
                       setNewName(event.target.value);
                   } }
            />

            <input type="number" placeholder="Age..."
                   onChange={(event) =>{
                       setNewAge(event.target.value);
                   } }/>

            <button onClick={createUser} > Create User</button>
            {users.map((user) => {
                return <div>
                    <h1>Name: {user.name} </h1>
                    <h1>Age: {user.age} </h1>
                    <button onClick={() => updateUser(user.id ,user.age)}>
                        Increase age
                    </button>

                    <button onClick={() => {
                        deleteUser(user.id)
                    }}>
                        Delete user
                    </button>
                </div>;
            })
            }
    </div>
    );
}

export default FirebaseGetProducts;