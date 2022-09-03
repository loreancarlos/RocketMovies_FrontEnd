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
               title: "A Origem",
               stars: "5",
               author:"Lorean Carlos",
               created:"23/05/22 às 08:00",
               description: "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.",
               tags: [
                  { id: "1", name: "Ação" },
                  { id: "2", name: "Ficção Científica" }
               ]
            }} />
         </main>
      </Container>
   );
};