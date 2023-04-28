import React, { useState, useEffect, useMemo } from "react";
import { StyledBooks } from "./style";
export const Books = () => {
  const avaliablePDFS = useMemo(
    () =>
      ["Player", "Akumas", "Ficha"].map((PDF) => {
        return (
          <StyledBooks>
            <h2>{PDF} PDF </h2>
            <img src={"src/media/books/" + PDF + ".png"} alt="" />
            <a href={`src/media/books/${PDF}.pdf`} download>
              Baixar
            </a>
          </StyledBooks>
        );
      }),
    []
  );
  return avaliablePDFS;
};
