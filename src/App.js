import {
  Page,
  Text,
} from "@shopify/polaris";
import './App.css';
import Catalog_connection_require from './components/catalog_connection_require';
import Catalog_create_business from "./components/catalog_create_business";
import Create_a_catalog from "./components/create_a_catalog";

function App() {
  return (
    <Page>
      <Text id='catalog_manager-heading'> Catalog Manager </Text>
      <Catalog_connection_require />
      <Catalog_create_business />
      <Create_a_catalog />
    </Page>
  );
}

export default App;
