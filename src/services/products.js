import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// GET DATA FIRESTORE
export const getAllProducts = async () => {
  try {
    const dataRef = await getDocs(query(collection(db, "products")));
    const dataDocs = [];

    dataRef.forEach((item) => {
      dataDocs.push({
        id: item.id,
        ...item.data(),
      });
    });

    return dataDocs;
  } catch (error) {
    //console.log(error);
  }
};
