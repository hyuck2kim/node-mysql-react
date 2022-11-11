import axios from "axios";
import { useState } from "react";

export const NewContact = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const birthdayChangeHandler = (e) => {
    setBirthday(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = (e) => {
    const body = {
      name: name,
      birthday: birthday,
      description: description,
    };
    const url = "http://localhost:3001/insert-contact";
    console.log("post url -> " + url);
    axios.post(url, body).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <br />
      <h3>연락처 추가</h3>
      <form onSubmit={submitHandler}>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={nameChangeHandler}
          />
        </p>
        <p>
          <input
            type="text"
            name="birthday"
            placeholder="birthday"
            onChange={birthdayChangeHandler}
          />
        </p>
        <p>
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={descriptionChangeHandler}
          />
        </p>
        <button type="submit">연락처 추가</button>
      </form>
    </>
  );
};
