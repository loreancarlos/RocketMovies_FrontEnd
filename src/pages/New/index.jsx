import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Section } from "../../components/Section";
import { MovieTag } from "../../components/MovieTag";

export function New() {
   return (
      <Container>
         <Header />
         <Link to="/">
            <FiArrowLeft />
            Voltar
         </Link>
         <main>
            <Form id="newMovie">
               <h1>Novo Filme</h1>
               <div>
                  <Input placeholder="Titulo" />
                  <Input placeholder="Sua nota (0 a 5)" />
               </div>
               <Textarea placeholder="Observações" />
               <Section title="Marcadores">
                  <div>
                     <MovieTag value="React" />
                     <MovieTag value="https://google.com.br" />
                     <MovieTag value="https://google.com.br" />
                     <MovieItem isNew placeholder="Novo marcador" />
                  </div>
               </Section>
            </Form>
         </main>
         <footer>
            <Button title="Excluir Filme" />
            <Button form="newMovie" title="Salvar Alterações" />
         </footer>
      </Container>
   );
};