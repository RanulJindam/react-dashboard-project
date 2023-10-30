import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <div className="body">
            <Routes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
