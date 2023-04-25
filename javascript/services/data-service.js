import { collection, doc, getDocs, addDoc, updateDoc, serverTimestamp, query, where } from "firebase/firestore";
import { db } from '../firestore/firestore-provider';


export default class DataService {
  constructor(collectionName){
    this.collectionName = collectionName;
    this.collectionRef = collection(db, collectionName)
  }

  create(data) {
    return addDoc(this.collectionRef, data)
  }

  update(id, data) {
    const docRef = doc(db, this.collectionName, id);
    return updateDoc(docRef, {...data, timestamp: serverTimestamp()})
  }

  get(id) {
    const docRef = doc(db, this.collectionName, id);
    return getDocs(docRef).then((response) => {
      if(response.exists()){
        return response.data();
      } else {
        console.error("No such document!");
      }
    })
  }

  list(params) {
    let q;
    if(params){
     q = query(this.collectionRef, where(...params))
    }
    return getDocs(this.collectionRef, q).then((response) => {
      const docArr = []
      response.forEach(doc => {
        const obj = { id: doc.id, ...doc.data()}
        docArr.push(obj)
      })
      return docArr;
    })
  }

}