import React, { useState, useEffect } from 'react';

export const CharBackgrounds = {
  Atirador: { primary: "#FFE186", secundary: "#d9a200" },
  Carateca_Homem_Peixe: {primary:"#9CC2E5", secundary:"#2E74B5"},
  Ciborgue: { primary: "#833c0b", secundary: "#f4b083" },
  Espadachim: { primary: "#70AD47", secundary: "#D9A200" },
  Guerreiro_Oni: { primary: "#212377", secundary: "#b6d6ec" },
  Guerrilheiro: { primary: "#085452", secundary: "#8ef4bf" },
  Lutador: { primary: "#740000", secundary: "#ffc9c9" },
  Ninja: { primary: "#34164a", secundary: "#d0cbf1" },
  Okama_Kenpo: { primary: "#7030a0", secundary: "#df81cb" },
  Rokushiki: { primary: "#000000", secundary: "#cdcdcd" },
  
};

export const Loader = () =>{
  return (
    <div>
      <img src="src/media/loading.gif" alt="loading..." />
    </div>
  );
}
