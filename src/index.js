import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

//Reducer
const MarksReducer = (
  state = {
    test: 1,
    testMarks: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        test: state.test + action.payload,
        testMarks: [...state.testMarks, action.payload]
      };

      break;
    case "SUBTRACT":
      state = {
        ...state,
        test: state.test - action.payload,
        testMarks: [...state.testMarks, action.payload]
      };
      break;
    default:
      break;
  }
  return state;
};

//Another Reducer
const UserReducer = (
  state = {
    name: "Patrick"
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };

      break;
    // case "SUBTRACT":
    //   state = {
    //     ...state,

    //   };
    //   break;
    default:
      break;
  }
  return state;
};

//Manual Action logger
// const mylogger = state => next => action => {
//   console.log("Action from my logger", action);
//   next(action);
// };

//Combine all multi reducers
const reducer = combineReducers({ marks: MarksReducer, user: UserReducer });

//Create Store
const store = createStore(
  reducer,
  {},
  applyMiddleware(createLogger())
  //applyMiddleware(mylogger)
);

//This provides all state stored in store of redux
store.subscribe(() => {
  //   console.log("Store", store.getState());
});

//Dispatch Actions
store.dispatch({ type: "ADD", payload: 10 });
store.dispatch({ type: "ADD", payload: 5 });
store.dispatch({ type: "SUBTRACT", payload: 2 });
store.dispatch({ type: "SET_NAME", payload: "Pat" });
