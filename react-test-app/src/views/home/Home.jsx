import React, {useState} from "react";
import "./Home.css";

function Home(props) {
  let [legenda, setLegenda] = useState("novo teste de parametro");

  function resetLegenda(){
    console.log("click resetLegenda")
    setLegenda("Alterado")
  }

  return (
    <div>
      <h1 className="home">Home React ({props.msg})</h1>
      <h2>{legenda}</h2>
      <input type="text" value={legenda} readOnly />
      <input type="text" value={legenda} onChange={
        function(e) {
          console.log(e.target.value)
          setLegenda(e.target.value)
          //this.legenda = "Alterado"
        }
      } />
      <button onClick={resetLegenda}>Reset Legenda</button>
    </div>
  );
}

export default Home;
