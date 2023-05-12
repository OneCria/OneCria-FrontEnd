import "./style.css";
import React, { StyleSheet, useState, useMemo, useEffect } from "react";
import { StackedCarousel } from "react-stacked-carousel";
import "react-stacked-carousel/dist/index.css";
import { MOCK_DATA } from "./mock_data";
import { Loader } from "../../utils/utils";
import { Container, Card } from "./style";
export const CharCard = () => {
  const [activeCard, setCardIndex] = useState(0);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const onCardChange = (event) => {
    setCardIndex(event.currentIndex + 1);
  };

  const data = useMemo(() => {
    return MOCK_DATA[0].Classes;
  }, []);

  return (
    <Container>
      {Loading ? (
        <Loader />
      ) : (
        <StackedCarousel
          autoRotate={false}
          onCardChange={onCardChange}
          containerClassName={"container"}
          cardClassName="card"
          leftButton={<button>{"<"}</button>}
          rightButton={<button>{">"}</button>}
        >
          {data.map((item, i) => (
            <Card active={activeCard} key={`child` + i} className={item.name}>
              <div> {/* Left Panel */}
                <h1>{item.name}</h1>
                {item.description}
                <button>Selecionar classe</button>
              </div>
              <div>
                <img src={`src/media/char icons/${item.name}.png`} alt="" /></div> 
            </Card>
          ))}
        </StackedCarousel>
      )}
    </Container>
  );
};
