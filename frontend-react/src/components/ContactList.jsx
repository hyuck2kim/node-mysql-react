import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import React from "react";

export const ContactList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [arrData, setArrData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const url = "http://localhost:3001/getAllContact";
      console.log("get url -> " + url);
      const result = await axios.get(url);
      setArrData(result.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <ul>
          {arrData.map((d, i) => {
            return (
              <p key={`p+${i}`}>
                <li>
                  이름 : {d.name}, 생년월일: {d.birthday}, 기타: {d.description}
                </li>
              </p>
            );
          })}
        </ul>
      </>
    );
  }
};
