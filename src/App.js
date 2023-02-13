import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Dongam from "./components/page/Dongam";
import Dongnghia from "./components/page/Dongnghia";
import Trainghia from "./components/page/Trainghia";
import Tinhtulienquan from "./components/page/Tinhtulienquan";
import Danhtulienquan from "./components/page/Danhtulienquan";
import Cungvan from "./components/page/Cungvan";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const callApiSearch = async () => {
    const url = window.location.href;
    const page = url ? url.slice(22) : "";

    let result = null;
    let response;
    console.log("input", input);
    switch (page) {
      case "dongam":
        response = await fetch(
          `https://api.datamuse.com/words?rel_rhy=${input}`
        );
        result = await response.json();
        console.log("Search call api dong am in App");
        break;
      case "dongnghia":
        response = await fetch(
          `https://api.datamuse.com/words?ml=${input}`
        );
        result = await response.json();
        console.log("Search call api dong nghia in App");

        break;
      case "trainghia":
        response = await fetch(
          `https://api.datamuse.com/words?rel_rhy=${input}`
        );
        result = await response.json();
        console.log("Search call api trai nghia in App");

        break;
      case "tinhtulienquan":
        response = await fetch(
          `https://api.datamuse.com/words?rel_jjb=${input}`
        );
        result = await response.json();
        console.log("Search call api tinh tu lien quan in App");

        break;
      case "danhtulienquan":
        response = await fetch(
          `https://api.datamuse.com/words?rel_jja=${input}`
        );
        result = await response.json();
        console.log("Search call api danh tu lien quan in App");

        break;
      case "cungvan":
        response = await fetch(
          `https://api.datamuse.com/words?rel_rhy=${input}`
        );
        result = await response.json();
        console.log("Search call api cung van in App");

        break;
      case "":
        response = await fetch(
          `https://api.datamuse.com/words?rel_rhy=${input}`
        );
        result = await response.json();
        console.log("Search call api chua co gi in App");
      default:
        return result;
    }
   
    setData(result);
    console.log("result call api khi click: ", data);

  };

  return (
    <>
      <NavBar />
      <div className="body">
        <div className="search_main">
          <input
            placeholder="nhap tu can tim"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => callApiSearch()}>Search</button>
        </div>
        <Routes>
          <Route path="/" element={<Home search={input}/>} />
          <Route path="/dongam" element={<Dongam search={input} data={data} />} />
          <Route path="/dongnghia" element={<Dongnghia search={input} data={data}/>} />
          <Route path="/trainghia" element={<Trainghia search={input} data={data}/>} />
          <Route
            path="/tinhtulienquan"
            element={<Tinhtulienquan search={input} data={data}/>}
          />
          <Route
            path="/danhtulienquan"
            element={<Danhtulienquan search={input} data={data}/>}
          />
          <Route path="/cungvan" element={<Cungvan data={data}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
