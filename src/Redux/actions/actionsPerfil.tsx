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
export const actionListperfilAsyn:any = () => {
    const pro:any = [];
    return async (dispatch:any) => {
      const perfilesListar = await getDocs(collection(dataBase, "Perfil"));
      console.log("respuesta", perfilesListar);
      perfilesListar.forEach((pe) => {
        pro.push({
          ...pe.data(),
        });
      });
      console.log("LA LISTA DE FIRESTORE", pro);
      dispatch(actionListperfilSyn(pro));
    };
  };
  
  export const actionListperfilSyn = (payload:any) => {
    return {
      type: typesProducts.list,
      payload,
    };
  };
  //----------------------add-----------------------//
  export const actionAddperfilAsyn = (payload:any) => {
    return async (dispatch:any) => {
      await addDoc(collection(dataBase, "Perfil"), payload)
        .then((resp) => {
          dispatch(actionAddperfilSyn(payload));
          dispatch(actionListperfilAsyn());
        })
        .catch((e) => {
          console.error("Error adding document: ", e);
        });
    };
  };
  export const actionAddperfilSyn = (payload:any) => {
    return {
      type: typesProducts.add,
      payload,
    };
  };
  
  // ------------------Editar---------------------
  export const actionEditperfilAsyn = (payload:any) => {
    return async (dispatch:any) => {
      let uid = "";
      const collectionP = collection(dataBase, "Products");
      const q = query(collectionP, where("id", "==", payload.id));
      const datosQ = await getDocs(q);
      datosQ.forEach((docu) => {
        uid = docu.id;
      });
      const docRef = doc(dataBase, "Products", uid);
      await updateDoc(docRef, payload)
        .then((resp) => {
          dispatch(actionEditperfilSyn(payload));
          dispatch(actionListperfilAsyn());
        })
        .catch((error) => console.log(error));
    };
  };
  
  export const actionEditperfilSyn = (payload:any) => {
    return {
      type: typesProducts.edit,
      payload,
    };
  };
  
  // ----------------Eliminar Perfiles-----------------------
  
  export const actionDeletePerfilAsyn = (payload:any) => {
    return async (dispatch:any) => {
      const productosCollection = collection(dataBase, "Perfil");
      const q = query(productosCollection, where("id", "==", payload));
      const dataQ = await getDocs(q);
      console.log(dataQ);
  
      dataQ.forEach((docu) => {
        deleteDoc(doc(dataBase, "Products", docu.id));
      });
      dispatch(actionDeletePerfilSyn(payload));
    };
  };
  
  export const actionDeletePerfilSyn = (payload:any) => {
    return {
      type: typesProducts.delete,
      payload,
    };
  };