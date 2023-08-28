import { General } from "./ss7_redux/practice/practice1/General";
import { Provider } from 'react-redux'
import store from "./ss7_redux/practice/practice1/store"
import React from "react";
export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <General />
      </Provider>
    </React.StrictMode>
  );
}


export default App;
