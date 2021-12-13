import React from "react";
import { Routes, Route } from "react-router-dom";

import AllConferences from "./pages/AllConferences";
import NewConferences from "./pages/NewConferences";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllConferences />} />
        <Route path="/new-conference" element={<NewConferences />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default App;
