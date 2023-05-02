import React, { useState, useEffect, useMemo } from "react";
import { InputBox } from "./style";

export const CustomInput = ({ type, name, onchange, selectData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagemPreview, setImagemPreview] = useState();

  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  const inputTypes = {
    select: ({ name, selectData, onchange }) => (
      <select name={name} onChange={onchange}>
        {selectData.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    ),
    text: ({ name, type, onchange }) => (
      <input name={name} type={type} onChange={onchange} />
    ),
    file: ({ name, type, setImagemPreview, imagemPreview }) => (
      <>
        <label htmlFor="image-upload">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            <img src="https://via.placeholder.com/200x200?text=Selecione+uma+imagem" />
          )}
        </label>
        <input
          id="image-upload"
          type={type}
          accept="image/*"
          onChange={handleImagePreview}
          style={{ display: "none" }}
        />
      </>
    ),
    number:({name, type, onchange}) =>(
      <input name={name} type={type} onChange={onchange} />
    ),

    password:({name, type, onchange}) =>(
      <input name={name} type={type} onChange={onchange} />
    )

    
  };

  const InputComponent = inputTypes[type];

  if (!InputComponent) {
    throw new Error(`Tipo de entrada "${type}" não suportado`);
  }

  return (
    <InputBox>
      <label>{name}</label>
      <br />
      <InputComponent
        name={name}
        selectData={selectData}
        type={type}
        onChange={onchange}
        setImagemPreview={setImagemPreview}
        imagemPreview={imagemPreview}
      />
    </InputBox>
  );
};
