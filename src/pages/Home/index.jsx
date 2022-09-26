import { Container, Content, NewMovie, Movies } from "./styles";
import { useEffect, useState } from "react";
import { FiPlus } from 'react-icons/fi';
import { Header } from "../../components/Header";
import { Movie } from '../../components/Movie';
import { api } from "../../services/api";


export function Home() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      async function fetchMovies() {
         const response = await api.get("/movieNotes")
            .catch(error => {
               try {
                  alert(error.response.data.message);
               } catch {
                  alert("Não foi possível recuperar a lista de filmes cadastrados.");
               }
            });
         setMovies(response.data);
         console.log(response.data);
      }
      fetchMovies();
   }, []);

   return (
      <Container>
         <Header />
         <div>
            <h1>Meus Filmes</h1>
            <NewMovie to="/new">
               <FiPlus />
               Adiciona Filme
            </NewMovie>
         </div>
         <Content>
            <Movies>
               {
                  movies && movies.map(movie =>
                     < Movie key={String(movie.id)} data={{
                        title: movie.title,
                        stars: movie.rating,
                        description: movie.description,
                        tags: movie.tags
                     }} />
                  )
               }
            </Movies>
         </Content>
      </Container>
   );
}