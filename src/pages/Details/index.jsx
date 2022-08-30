import { Container } from "./styles";
import { Header } from "../../components/Header";
import { MovieDetail } from "../../components/MovieDetail";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export function Details() {
   return (
      <Container>
         <Header />
         <Link to="/">
            <FiArrowLeft />
            Voltar
         </Link>
         <main>
            <MovieDetail data={{
               title: "Interestellar",
               stars: "4",
               author:"Lorean Carlos",
               created:"23/05/22 às 08:00",
               description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As missões Lázaro enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy",
               tags: [
                  { id: "1", name: "React" },
                  { id: "2", name: "Node" }
               ]
            }} />
         </main>
      </Container>
   );
};