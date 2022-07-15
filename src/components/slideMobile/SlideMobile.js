import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Container, Row, Content, Img } from "./SlideMobileStyle";
import { slides } from "../../dataImageSlide/slides";

export const SlideMobile = () => {
  const [position, setPosition] = useState(0);

  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (dir === "Left") {
        if (position < slides.length - 1) {
          setPosition(position + 1);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          setPosition(position - 1);
        }
      }
    },
  });

  const requireContent = slides.map((item) => (
    <Content
      key={item.id}
      initial={{ scale: 0, rotation: -180 }}
      animate={{
        rotate: 0,
        left: `${(item.id - position) * 60 - 30}vw`,
        scale: item.id === position ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Img src={item.image} alt={item.alt} />
    </Content>
  ));

  return (
    <Container {...handlers}>
      <Row>{requireContent}</Row>
    </Container>
  );
};
