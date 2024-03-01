import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { typesProducts } from "../types/types";
  import { dataBase } from "../../Firebase/firebaseConfig";
  // ------------------Listar---------------------
  export const actionAmigosAsyn:any = () => {
    const pro:any = [];
    return async (dispatch:any) => {
      const amigosListar = await getDocs(collection(dataBase, "amigos"));
      console.log("respuesta", amigosListar);
      amigosListar.forEach((p) => {
        pro.push({
          ...p.data(),
        });
      });
      console.log("LA LISTA DE FIRESTORE", pro);
      dispatch(actionAmigosSyn(pro));
    };
  };
  
  export const actionAmigosSyn = (payload:any) => {
    return {
      type: typesProducts.list,
      payload,
    };
  };
  // ----------------Eliminar Productos-----------------------

export const actionDeleteAmigosAsyn:any = (payload:any) => {
    return async (dispatch:any) => {
      const amigosListar = collection(dataBase, "amigos");
      const q = query(amigosListar, where("id", "==", payload));
      const dataQ = await getDocs(q);
      console.log(dataQ);
  
      dataQ.forEach((docu) => {
        deleteDoc(doc(dataBase, "amigos", docu.id));
      });
      dispatch(actionDeleteAmigosSyn(payload));
    };
  };
  
  export const actionDeleteAmigosSyn = (payload:any) => {
    return {
      type: typesProducts.delete,
      payload,
    };
  };
  
  