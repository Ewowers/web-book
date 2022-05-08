import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./app.css";
import { LayoutPage } from "./page/layout";
import { Paragraph0 } from "./paragraph/paragraph0";
import { Paragraph1 } from "./paragraph/paragraph1";
import { Paragraph2 } from "./paragraph/paragraph2";
import { Paragraph3 } from "./paragraph/paragraph3";
import { Paragraph4 } from "./paragraph/paragraph4";
import { Paragraph5 } from "./paragraph/paragraph5";
import { Paragraph6 } from "./paragraph/paragraph6";
import { Paragraph7 } from "./paragraph/paragraph7";
import { Paragraph8 } from "./paragraph/paragraph8";
import { Paragraph9 } from "./paragraph/paragraph9";
import { Paragraph10 } from "./paragraph/paragraph10";
import { Paragraph11 } from "./paragraph/paragraph11";
import { Paragraph12 } from "./paragraph/paragraph12";
import { Paragraph13 } from "./paragraph/paragraph13";
import { Paragraph14 } from "./paragraph/paragraph14";
import { Paragraph15 } from "./paragraph/paragraph15";
import { Paragraph16 } from "./paragraph/paragraph16";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Paragraph0 />} />
          <Route path="1" element={<Paragraph1 />} />
          <Route path="2" element={<Paragraph2 />} />
          <Route path="3" element={<Paragraph3 />} />
          <Route path="4" element={<Paragraph4 />} />
          <Route path="5" element={<Paragraph5 />} />
          <Route path="6" element={<Paragraph6 />} />
          <Route path="7" element={<Paragraph7 />} />
          <Route path="8" element={<Paragraph8 />} />
          <Route path="9" element={<Paragraph9 />} />
          <Route path="10" element={<Paragraph10 />} />
          <Route path="11" element={<Paragraph11 />} />
          <Route path="12" element={<Paragraph12 />} />
          <Route path="13" element={<Paragraph13 />} />
          <Route path="14" element={<Paragraph14 />} />
          <Route path="15" element={<Paragraph15 />} />
          <Route path="16" element={<Paragraph16 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
