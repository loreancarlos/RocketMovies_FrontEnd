import { Container } from "./styles";
import emptyStar from "../../assets/emptyStar.svg";
import fillStar from "../../assets/fillStar.svg";


export function Stars({ data, ...rest }) {
   return (
      <Container {...rest}>
         {
            data > 0 ? <img src={fillStar} /> : <img src={emptyStar} />
         }
         {
            data > 1 ? <img src={fillStar} /> : <img src={emptyStar} />
         }
         {
            data > 2 ? <img src={fillStar} /> : <img src={emptyStar} />
         }
         {
            data > 3 ? <img src={fillStar} /> : <img src={emptyStar} />
         }
         {
            data > 4 ? <img src={fillStar} /> : <img src={emptyStar} />
         }
      </Container>
   );
};