import { FiPlus } from 'react-icons/fi';
import { Container, Content, NewMovie, Movies } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from '../../components/Movie';
import { Fragment } from 'react';


export function Home() {
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
               <Movie data={{
                  title: "React",
                  stars: "4",
                  description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As missões Lázaro enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy",
                  tags: [
                     { id: "1", name: "React" },
                     { id: "2", name: "Node" }
                  ]
               }} />
               <Movie data={{
                  title: "React 2",
                  stars: "2",
                  description: "Testando a descrição do filme",
                  tags: [
                     { id: "1", name: "React 2" },
                     { id: "2", name: "Node 2" }
                  ]
               }} />
            </Movies>
         </Content>
      </Container>
   );
}