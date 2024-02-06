import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAAlTZB6Q74q43e3IIdIZp9GehQI38ZKgk",
    authDomain: "platformer-796eb.firebaseapp.com",
    projectId: "platformer-796eb",
    storageBucket: "platformer-796eb.appspot.com",
    messagingSenderId: "445330797576",
    appId: "1:445330797576:web:89afd29d72391f219f8dbd",
    measurementId: "G-EXFNB57ZNN"
  });
    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);

    onAuthStateChanged(auth, (user) => {
        if(user != null){
            console.log(user);
        } else {
            console.log("No user");
        }
    });
