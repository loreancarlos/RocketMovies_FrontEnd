import { Container, Form } from "./styles";
import { MovieNewItem } from "../../components/MovieNewItem";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea";
import { MovieTag } from "../../components/MovieTag";
import { useState } from "react";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function NewMovie() {
   const [title, setTitle] = useState("");
   const [stars, setStars] = useState("");
   const [description, setDescription] = useState("");
   const [tags, setTags] = useState([]);
   const [newTag, setNewTag] = useState("");

   const navigate = useNavigate();

   function handleAddTag() {
      if (!newTag) {
         return;
      }

      if (tags.length) {
         let find = 0;
         tags.map(tag =>
            tag.toLowerCase() == newTag.toLowerCase() ? find++ : "");
         if (find > 0) {
            return;
         }
      }

      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
   }

   function handleRemoveTag(tagToDelete) {
      setTags(prevState => prevState.filter(link => link !== tagToDelete));
   }

   function handleNewMovie() {
      if (newTag) {
         return alert("Você começou a preencher uma nova tag, mas não adicionou ela.");
      }

      if (!title || !description || !stars) {
         return alert("Existem campos que ainda não foram preenchidos.");
      }

      api.post("/movieNotes", { title, description, rating: stars, tags })
         .then(() => {
            alert("Filme cadastrado com sucesso.");
            navigate("/");
         })
         .catch(error => {
            try {
               alert(error.response.data.message);
            } catch {
               alert("Não foi possível cadastrar este filme.");
            }
         });
   }

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
                  <Input placeholder="Titulo" onChange={(event) => setTitle(event.target.value)} />
                  <Input placeholder="Sua nota (0 a 5)" onChange={(event) => setStars(event.target.value)} />
               </div>
               <Textarea placeholder="Observações" onChange={(event) => setDescription(event.target.value)} />
               <Section title="Marcadores">
                  <div>
                     {
                        tags.map((tag, index) =>
                           <MovieTag key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                        )
                     }
                     <MovieNewItem placeholder="Novo marcador" value={newTag} onChange={event => setNewTag(event.target.value)} onClick={handleAddTag} />
                  </div>
               </Section>
            </Form>
         </main>
         <footer>
            <Button title="Excluir Filme" disabled />
            <Button form="newMovie" title="Salvar Alterações" onClick={handleNewMovie} />
         </footer>
      </Container>
   );
};