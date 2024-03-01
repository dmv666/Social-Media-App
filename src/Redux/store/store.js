import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import loginReducer from "../reducers/loginReducer";
import productsReducers from "../reducers/productsReducers";
import { thunk } from "redux-thunk";
import perfilReducer from "../reducers/perfilReducer";
import amigosReducer from "../reducers/amigosReducer";


// Configuracion de los middleware para manejar acciones asíncronas con Redux-Thunk
const middleware = [thunk];

// Ojo: solo para el entorno de desarrollo ye sto me permite ver a la extensión de Redux en la consola
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const reducers = combineReducers({
  loginStore: loginReducer,
  productsStore: productsReducers,
  perfilStore: perfilReducer,
  amigosStore: amigosReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);