import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8meBoF0ZYRIaEvSED1_84mGeJXRXe4AY",
  authDomain: "paso-fresa-crud.firebaseapp.com",
  projectId: "paso-fresa-crud",
  storageBucket: "paso-fresa-crud.firebasestorage.app",
  messagingSenderId: "1078014482003",
  appId: "1:1078014482003:web:274fc14d683c70d42058a6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)