import { Product_List } from "./Data.js";
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../firebase/config.js';

const prodRef = collection(db, "products")

Product_List.forEach((item)=> {
  addDoc(prodRef, item);
})
