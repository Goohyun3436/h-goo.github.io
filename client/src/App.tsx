import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import ApiTest from "./pages/ApiTest";
import Charts from "./pages/Charts";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apitest" element={<ApiTest />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </>
  );
}

export default App;
