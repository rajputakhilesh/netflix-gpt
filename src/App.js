import Home from "./components/Home";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
   <Home />
   </Provider>
  );
}

export default App;
