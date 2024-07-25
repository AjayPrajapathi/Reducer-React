/* we can have multiple stores in an appplication but it is not recomended 
-->we can import the redux using "require"  or by using import functions as shown below*/


// const redux = require("redux");

import redux from "redux";
import todoReducer from "./reducers/todoReducer";

export const store = redux.createStore(todoReducer);

