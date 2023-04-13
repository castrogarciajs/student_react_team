import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {firebaseConfig} from "./config";

  const app = initializeApp(firebaseConfig);
  
  const db=getFirestore(app);

export const saveACalculation = async (valor)=>{
    const docRef= await addDoc(collection(db, "eval"),{
      valor
    });
    console.log(docRef)
}



