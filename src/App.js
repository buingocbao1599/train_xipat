import {
  Page,
  Text,
} from "@shopify/polaris";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Business_not_haved_catalog from "./components/business_not_haved_catalog";
import Catalog_connection_require from './components/Step1_Login';
import Catalog_create_business from "./components/catalog_create_business";
import Create_a_catalog from "./components/create_a_catalog";
import Bussiness_haved_catalog from "./components/Step2_BC_have_cata";
import Bussiness_haved_catalog_two from "./components/bussiness_haved_catalog2";
import List_Catalog from "./components/List_catalog";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Page>
        <Text id='catalog_manager-heading'> Catalog Manager </Text>
      </Page>
      <Routes>
        <Route path="/" element={<Catalog_connection_require />}></Route>
        <Route path="/createBC" element={<Catalog_create_business />}></Route>
        <Route path="/createCata" element={<Create_a_catalog />}></Route>
        <Route path="/bussines_not_have_cata" element={<Business_not_haved_catalog />}></Route>
        <Route path="/bussines_have_cata" element={<Bussiness_haved_catalog />}></Route>
        <Route path="/2bussines_have_cata" element={<Bussiness_haved_catalog_two />}></Route>
        <Route path="/listcatalog" element={<List_Catalog />}></Route>
      </Routes>



    </div>
  );
}

export default App;
