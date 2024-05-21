// import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "./pages/Collections";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
// import Children from "./pages/Children";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Collections />} />
          <Route path="collections/:category" element={<Collections />} />
          <Route path="/men" element={<Collections category="Men Clothes" />} />
          <Route path="/women" element={<Collections category="Women Clothes" />} />
          <Route path="/children" element={<Collections category="Children Clothes" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
