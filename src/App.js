import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./app.css";
import { LayoutPage } from "./page/layout";
import { Paragraph1 } from "./html/paragraph-1";
import { Paragraph2 } from "./html/paragraph-2";
import { Paragraph3 } from "./html/paragraph-3";
import { Paragraph4 } from "./html/paragraph-4";
import { Paragraph5 } from "./html/paragraph-5";
import { Paragraph6 } from "./html/paragraph-6";
import { Paragraph7 } from "./html/paragraph-7";
import { CSSParagraph1 } from "./css/css-paragraph-1";
import { CSSParagraph2 } from "./css/css-paragraph-2";
import { CSSParagraph3 } from "./css/css-paragraph-3";
import { CSSParagraph4 } from "./css/css-paragraph-4";
import { CSSParagraph5 } from "./css/css-paragraph-5";
import { CSSParagraph6 } from "./css/css-paragraph-6";
import { CSSParagraph7 } from "./css/css-paragraph-7";
import { JSParagraph1 } from "./js/js-paragraph-1";
import { JSParagraph2 } from "./js/js-paragraph-2";
import { JSParagraph3 } from "./js/js-paragraph-3";
import { JSParagraph4 } from "./js/js-paragraph-4";
import { JSParagraph5 } from "./js/js-paragraph-5";
import { JSParagraph6 } from "./js/js-paragraph-6";
import { JSParagraph7 } from "./js/js-paragraph-7";
import { BSParagraph1 } from "./bootstrap/bs-paragraph-1";
import { BSParagraph2 } from "./bootstrap/bs-paragraph-2";
import { BSParagraph3 } from "./bootstrap/bs-paragraph-3";
import { BSParagraph4 } from "./bootstrap/bs-paragraph-4";
import { BSParagraph5 } from "./bootstrap/bs-paragraph-5";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Paragraph1 />} />
          <Route path="html">
            <Route element={<Paragraph1 />} path="paragraph1" />
            <Route element={<Paragraph2 />} path="paragraph2" />
            <Route element={<Paragraph3 />} path="paragraph3" />
            <Route element={<Paragraph4 />} path="paragraph4" />
            <Route element={<Paragraph5 />} path="paragraph5" />
            <Route element={<Paragraph6 />} path="paragraph6" />
            <Route element={<Paragraph7 />} path="paragraph7" />
          </Route>
          <Route path="css">
            <Route element={<CSSParagraph1 />} path="paragraph1" />
            <Route element={<CSSParagraph2 />} path="paragraph2" />
            <Route element={<CSSParagraph3 />} path="paragraph3" />
            <Route element={<CSSParagraph4 />} path="paragraph4" />
            <Route element={<CSSParagraph5 />} path="paragraph5" />
            <Route element={<CSSParagraph6 />} path="paragraph6" />
            <Route element={<CSSParagraph7 />} path="paragraph7" />
          </Route>
          <Route path="js">
            <Route element={<JSParagraph1 />} path="paragraph1" />
            <Route element={<JSParagraph2 />} path="paragraph2" />
            <Route element={<JSParagraph3 />} path="paragraph3" />
            <Route element={<JSParagraph4 />} path="paragraph4" />
            <Route element={<JSParagraph5 />} path="paragraph5" />
            <Route element={<JSParagraph6 />} path="paragraph6" />
            <Route element={<JSParagraph7 />} path="paragraph7" />
          </Route>
          <Route path="bootstrap">
            <Route element={<BSParagraph1 />} path="paragraph1" />
            <Route element={<BSParagraph2 />} path="paragraph2" />
            <Route element={<BSParagraph3 />} path="paragraph3" />
            <Route element={<BSParagraph4 />} path="paragraph4" />
            <Route element={<BSParagraph5 />} path="paragraph5" />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
