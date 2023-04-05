import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap";
import Filters from "./Components/Filters/Filters";
import Cards from "./Components/Cards/Cards";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Navbar/Navbar";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";
import Error from "./Pages/Error";
import CardDetail from "./Components/Cards/CardDetail";

function App(){
  return(
    <Router>
      <div className="App">

      <Navbar/>
      </div>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetail/>}/>

        <Route path="/episodes" element={<Episode/>}/>
        <Route path="/episodes/:id" element={<CardDetail/>}/>

        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetail/>}/>

        <Route path="/*" element={<Error/>}/>
        


      </Routes>
    </Router>
  )
}

const Home =()=> {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status,setStatus] =  useState("");
  let [gender,setGender] = useState("");
  let [species,setSpecies] = useState("alien");
  // console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  // console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
     
      <h1 className="text-center mb-4">Characters</h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
         
            <Filters setSpecies={setSpecies} setGender = {setGender}  setStatus = {setStatus} setPageNumber = {setPageNumber}  />
          
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
