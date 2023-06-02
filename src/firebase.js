import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDD3miUw6ks6OMSRR4xRV0YSY93B1Djy8g",
  authDomain: "library-management-syste-ef1be.firebaseapp.com",
  projectId: "library-management-syste-ef1be",
  storageBucket: "library-management-syste-ef1be.appspot.com",
  messagingSenderId: "709223293342",
  appId: "1:709223293342:web:8c71e8114bf1c727ea768f",
  measurementId: "G-WL1HL73VMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;