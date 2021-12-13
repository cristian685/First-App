// import React, {useState} from 'react';
// import {
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     signInWithEmailAndPassword,
//     //sendPasswordResetEmail
// } from 'firebase/auth'
// import { auth } from '../../Config/firebaseConfig';
//
// import {
//     Button,
//     Container,
//     Divider,
//     TextField,
//     Box,
//     Typography
// } from '@mui/material';
//
//  function Firebase() {
//     const [user, setUser] = useState(null);
//      const [loginObj, setLoginObj] = useState({});
//      const [userCreateObj, setUserCreateObj] = useState({});
//
//      const handleLoginChange = type => event => {
//          setLoginObj({
//              ...loginObj,
//              [type]: event.target.value
//          })
//      }
//     const handleLoginClick = async () => {
//         const { email, password } = loginObj;
//         try {
//             const createdUser =  await signInWithEmailAndPassword(auth, email, password)
//             console.log(createdUser);
//         } catch (errors) {
//             // Tema sa afisati un mesaj ca userul exista Snackbar
//             console.log(errors.message);
//
//         }
//
//     }
//
//     // mutati in firebase si refolositi nevoie ptr ca sa refolositi
//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     });
//
//     const handleLogout = () => {
//         signOut(auth);
//     }
//
//     const handleCreateChange = type => event => {
//         setUserCreateObj({
//             ...userCreateObj,
//             [type]: event.target.value
//         })
//
//     }
//     const handleCreateClick = async () => {
//
//         const { email, password } = userCreateObj;
//         try {
//             const createdUser =  await createUserWithEmailAndPassword(auth, email, password)
//             console.log(createdUser);
//         } catch (errors) {
//             // Tema sa afisati un mesaj ca userul exista Snackbar
//             console.log(errors.message);
//
//         }
//     }
//
//     return (
//         <Container maxWidth="lg">
//             <Box sx={{ margin: 10 }}>
//                 <Typography variant="h4">Create Account</Typography>
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus
//                     onChange={handleCreateChange('email')}
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     onChange={handleCreateChange('password')}
//                 />
//                 <Button onClick={handleCreateClick}>Create account</Button>
//                 <Typography>{}</Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ margin: 10 }}>
//                 <Typography variant="h4">Login</Typography>
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus
//                     onChange={handleLoginChange('email')}
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     onChange={handleLoginChange('password')}
//                 />
//                 <Button onClick={handleLoginClick}>Create Account</Button>
//             </Box>
//             <Divider />
//             <Box sx={{ margin: 10 }}>
//                 Auth user: {user?.email}
//
//                 <Button onClick={handleLogout}>
//                     Log out
//                 </Button>
//             </Box>
//
//         </Container>
//     )
// }
//
//
// // pentru forgot password folositi
// // sendPasswordResetEmail(auth, email)
//
// export default Firebase