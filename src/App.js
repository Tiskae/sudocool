import "./App.css";
import Sudoku from "./containers/Sudoku/Sudoku";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import appUIreducer from "./store/reducers/appUIreducer";
import sudokuReducer from "./store/reducers/sudokuReducer";

const store = createStore(
  combineReducers({
    appUI: appUIreducer,
    sudoku: sudokuReducer,
  })
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="GlowOnHover">
          Sudoku Game <span>♨︎</span>
        </h1>
        <Sudoku />
      </div>
    </Provider>
  );
}

export default App;
