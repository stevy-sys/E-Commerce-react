/*import { useEffect, useState } from "react";
import axios from "axios";
//import CardProduit from "./../../components/CardProduit";

const todi = () => {
  const [produits, setProduits] = useState([]);
  const [trig, setTrig] = useState(0);

  const fetchData = () => {
    axios
      .get("./donnee.json")
      .then((res:any) => {
        console.log(res);

        setProduits(res.data);
        setTrig(trig + 1);
        console.log(produits);

      })
      .catch((err:any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("dans useEffect");
    fetchData();
  }, []);

  return (
    <div className="container">
      {console.log(` valeur de trig = ${trig}`)}
      {console.log(` valeur de produits = ${produits}`)}
      <div className="row">
        component
      </div>
    </div>
  );
};

export default todi;*/
import React from 'react'

const Todi = () => {
  return (
    <div>
      
    </div>
  )
}

export default Todi
