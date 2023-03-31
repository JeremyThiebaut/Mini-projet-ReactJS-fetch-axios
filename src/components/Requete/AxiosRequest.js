import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosRequest() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3001/data")
      .then((response) => setData(response.data))
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <br />
      <p>Axios</p>
      <br />
      {data.map((element) => (
        <div key={element.id}>
          <p>Pseudo: {element.pseudo}</p>
        </div>
      ))}
    </div>
  );
}
