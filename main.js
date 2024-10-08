import { auth } from "./server.js";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


const btnLogin = document.getElementById('btn-login');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user)
        // ...
    } else {
        // User is signed out
        // ...
    }
});


btnLogin.addEventListener("click", () => {

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
        });

});