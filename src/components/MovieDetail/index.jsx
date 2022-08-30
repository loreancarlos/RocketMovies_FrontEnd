import { Container, Title, Tags } from "./styles";
import { Tag } from "../Tag";
import { Stars } from "../Stars";
import { Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";

export function MovieDetail({ data, ...rest }) {
   return (
      <Container {...rest}>
         <Title>
            <h1>
               {data.title}
               <span><Stars data={data.stars} /></span>
            </h1>
            <div>
               <Link to="/profile">
                  <img src="https://github.com/loreancarlos.png" alt="Foto do usuário" />
               </Link>
               <p>Por {data.author}</p>
               <FiClock />
               <p>{data.created}</p>
            </div>
         </Title>
         {
            data.tags &&
            <Tags>
               {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
               }
            </Tags>
         }
         <p>{data.description}</p>
      </Container>
   );
};