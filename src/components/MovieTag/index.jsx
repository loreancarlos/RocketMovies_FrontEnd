import { Container } from "./styles";
import { FiX } from "react-icons/fi";

export function MovieTag({ value, onClick, ...rest }) {
   return (
      <Container>
         <div>{value}</div>
         <button type="button" onClick={onClick}>
            <FiX />
         </button>
      </Container>
   );
};