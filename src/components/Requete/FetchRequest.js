import React, { useEffect, useState } from "react";

export default function FetchRequest() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <br />
      <p>Fetch</p>
      <br />
      {data.map((element) => (
        <div key={element.id}>
          <p>Pseudo: {element.pseudo}</p>
        </div>
      ))}
    </div>
  );
}
