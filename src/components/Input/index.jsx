import React, { useState, useEffect, useMemo } from "react";
import { InputBox } from "./style";

export const CustomInput = ({ type, name, onclick, selectData }) => {
  const [imagemPreview, setImagemPreview] = useState(null);
  const inputType = useMemo(() => {
    switch (type) {
      case "select":
        return (
          <select name={name}>
            {selectData.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        );
      case "text":
        return <input name={name} type={type} onClick={onclick}></input>;
      case "file":
        return (
          <>
            <input
              name={name}
              type={type}
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                
                setImagemPreview(file);
              }}
            ></input>
            <img src={imagemPreview}></img>
          </>
        );
      default:
        break;
    }
  }, [selectData]);

  return (
    <InputBox>
      <label>{name}</label>
      <br />
      {inputType}
    </InputBox>
  );
};
