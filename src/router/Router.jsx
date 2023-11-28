import { Route, Routes } from "react-router-dom";
import Viloyat from "../viloyatlar/Viloyat";
import Avtosalonlar from "../viloyatlar/Avtosalonlar";
import Bmw from "../viloyatlar/Bmw";
import Mers from "../viloyatlar/Mers";
import Gm from "../viloyatlar/Gm";
import Lada from "../viloyatlar/Lada";
import Tesla from "../viloyatlar/Tesla";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Viloyat />} />
        <Route path="/avtosalon" element={<Avtosalonlar />} />
        <Route path="/bmw" element={<Bmw />} />
        <Route path="/mers" element={<Mers />} />
        <Route path="/gm" element={<Gm />} />
        <Route path="/lada/:mashina" element={<Lada />} />
        <Route path="/tesla" element={<Tesla />} />
      </Routes>
    </>
  );
};
export default Router;
