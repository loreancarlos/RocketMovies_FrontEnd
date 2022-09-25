import { Container } from "./styles";
import { FiPlus} from "react-icons/fi";

export function MovieNewItem({ value, onClick, ...rest }) {
   return (
      <Container>
         <input type="text" value={value} {...rest} />
         <button type="button" onClick={onClick} >
            <FiPlus size={24}/>
         </button>
      </Container>
   );
};