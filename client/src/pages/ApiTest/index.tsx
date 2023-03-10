import { useState } from "react";
import styled from "styled-components";

const ENDPOINT = "http://localhost:8000/data";
interface dataProps {
  id: number;
  name: string;
  age: number;
  job: string;
}

const ApiTest = () => {
  const [data, setData] = useState<dataProps>({
    id: 0,
    name: "",
    age: 0,
    job: "",
  });

  const getData = async (id: string) => {
    try {
      const res = await fetch(ENDPOINT + "/" + id);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ApiTestBlock>
      <div className="App">
        <ul>
          <li>id : {data.id}</li>
          <li>name : {data.name}</li>
          <li>age : {data.age}</li>
          <li>job : {data.job}</li>
        </ul>
        <button
          onClick={() => {
            getData("1");
          }}
        >
          Data 1
        </button>
        <button
          onClick={() => {
            getData("2");
          }}
        >
          Data 2
        </button>
      </div>
    </ApiTestBlock>
  );
};

const ApiTestBlock = styled.div``;

export default ApiTest;
