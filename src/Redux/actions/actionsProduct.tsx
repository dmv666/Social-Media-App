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
export const actionListproductAsyn:any = () => {
  const pro:any = [];
  return async (dispatch:any) => {
    const productosListar = await getDocs(collection(dataBase, "Products"));
    console.log("respuesta", productosListar);
    productosListar.forEach((p) => {
      pro.push({
        ...p.data(),
      });
    });
    console.log("LA LISTA DE FIRESTORE", pro);
    dispatch(actionListproductSyn(pro));
  };
};

export const actionListproductSyn = (payload:any) => {
  return {
    type: typesProducts.list,
    payload,
  };
};
// ------------------Agregar---------------------
export const actionAddproductAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    await addDoc(collection(dataBase, "Products"), payload)
      .then((resp) => {
        dispatch(actionAddproductSyn(payload));
        dispatch(actionListproductAsyn());
      })
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  };
};
export const actionAddproductSyn = (payload:any) => {
  return {
    type: typesProducts.add,
    payload,
  };
};

// ------------------Editar---------------------
export const actionEditProductAsyn:any = (payload:any) => {
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
        dispatch(actionEditProductSyn(payload));
        dispatch(actionListproductAsyn());
      })
      .catch((error) => console.log(error));
  };
};

export const actionEditProductSyn = (payload:any) => {
  return {
    type: typesProducts.edit,
    payload,
  };
};

// ----------------Eliminar Productos-----------------------

export const actionDeleteProductAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    const productosCollection = collection(dataBase, "Products");
    const q = query(productosCollection, where("id", "==", payload));
    const dataQ = await getDocs(q);
    console.log(dataQ);

    dataQ.forEach((docu) => {
      deleteDoc(doc(dataBase, "Products", docu.id));
    });
    dispatch(actionDeleteProductSyn(payload));
  };
};

export const actionDeleteProductSyn = (payload:any) => {
  return {
    type: typesProducts.delete,
    payload,
  };
};

// ------------------Seacrh--------------------------
export const actionSearchProductAsyn:any = (payload:any) => {
  return async (dispatch:any) => {
    // llamar a la colleccion para que me de los datos
    const productosCollection = collection(dataBase, "amigos");
    // hacer el filtro por nombre
    const q = query(
      productosCollection,
      where("Name", ">=", payload),
      where("Name", "<=", payload + '\uf8ff')
    );

    const dataQ = await getDocs(q);
    console.log(dataQ);
    // paso los datos a el estado sync
    const prod:any[] = [];
    dataQ.forEach((docu) => {
      prod.push(docu.data());
    });
    dispatch(actionSearchProductSyn(prod));
  };
};

export const actionSearchProductSyn = (payload:any) => {
  return {
    type: typesProducts.search,
    payload,
  };
};

