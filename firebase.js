import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyCXlTbZZMt1uXpxqfsRjsz76wN5KEvN3CQ",
        authDomain: "my-project-f1253.firebaseapp.com",
        projectId: "my-project-f1253",
        storageBucket: "my-project-f1253.appspot.com",
        messagingSenderId: "486673230827",
        appId: "1:486673230827:web:75e96a224371e1f9d647ae"
    }; 

    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    return {
        provide: {
            firestore
        }
    }
})