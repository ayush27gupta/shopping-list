import "./App.css";
import List from "./components/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddShop from "./components/shop/AddShop";

import NotFound from "./components/not-found/NotFound";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<AddShop />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
