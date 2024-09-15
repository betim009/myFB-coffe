// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB90ky2aFQXdkdoP1KwCtSwDo9brZ2d6Lc",
    authDomain: "myfb-coffe.firebaseapp.com",
    projectId: "myfb-coffe",
    storageBucket: "myfb-coffe.appspot.com",
    messagingSenderId: "958084731341",
    appId: "1:958084731341:web:d3d26ef4b892387e463484"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Get a reference to the "coffees" collection
const coffeesCollectionRef = collection(db, 'coffes');

console.log("resultado", coffeesCollectionRef)
async function getCoffees() {
    try {
        const querySnapshot = await getDocs(coffeesCollectionRef);
        querySnapshot.forEach((doc) => {
            console.log("resultado 2:", doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

getCoffees();
