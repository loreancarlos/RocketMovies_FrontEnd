import { Container } from "./styles";
import emptyStar from "../../assets/emptyStar.svg";
import fillStar from "../../assets/fillStar.svg";

export function Stars({ data, ...rest }) {
   const array = [];
   for (let i = 0; i < 5; i++) {
      i < data ? array.push(true) : array.push(false);
   }
   return (
      <Container {...rest}>
         {
            array.map((value, i) => value ? <img key={i} src={fillStar} /> : <img key={i} src={emptyStar} />)
         }
      </Container>
   );
};