import { Container } from "./styles";
import { Tag } from "../Tag";
import { Stars } from "../Stars";

export function Movie({ data, ...rest }) {
   return (
      <Container type="button" {...rest}>
         <h1>{data.title}</h1>
         <Stars data={data.stars} />
         <p>{data.description}</p>
         {
            data.tags &&
            <footer>
               {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
               }
            </footer>
         }
      </Container>
   );
};