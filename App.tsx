import React from 'react';

import { Store } from "./src/store";
import { Provider } from "react-redux";
import { AppNavigation } from "./src/navigation";

export default function App() {

  return <Provider store={Store}>
    <AppNavigation />
  </Provider>

}
