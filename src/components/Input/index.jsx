import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { InputBox } from "./style";

export const CustomInput = ({
  name,
  type,
  onChange,
  selectData,
  setImagemPreview,
  imagemPreview,
  valid
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
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
  switch (type) {
    case "file":
      return (
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
      );
    case "select":
      return (
        <InputBox>
          <label>{name}</label>
          <select name={name} onChange={onChange}>
          <option selected disabled>Selecione sua {name}</option>
            {selectData &&
              selectData.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </InputBox>
      );
  }
  return (
    <InputBox>
      <label>{name}</label>
      <input
        name={name}
        selectData={selectData}
        type={type}
        onChange={onChange}
        setImagemPreview={setImagemPreview}
        imagemPreview={imagemPreview}
      />
    </InputBox>
  );
};
