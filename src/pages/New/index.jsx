import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
   return (
      <Container>
         <Header />
         <main>
            <Form>
               <header>
                  <Link to="/">
                     <FiArrowLeft />
                     Voltar
                  </Link>
                  <h1>Novo Filme</h1>
               </header>
               <Input placeholder="Titulo" />
               <Textarea placeholder="Observações" />
             {/*   <Section title="Links úteis">
                  <NoteItem value="https://google.com.br" />
                  <NoteItem isNew placeholder="Novo link" />
               </Section> */}
              {/*  <Section title="Marcadores">
                  <div className="tags">
                     <NoteItem value="react" />
                     <NoteItem isNew placeholder="Nova tag" />
                  </div>
               </Section> */}
               <Button title="Salvar" />
            </Form>
         </main>
      </Container>
   );
};