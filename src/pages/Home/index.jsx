import { FiPlus } from 'react-icons/fi';
import { Container, Content, NewMovie, Movies } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from '../../components/Movie';


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
                  title: "A Origem",
                  stars: "5",
                  description: "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.",
                  tags: [
                     { id: "1", name: "Ação" },
                     { id: "2", name: "Ficção Científica" }
                  ]
               }} />
               <Movie data={{
                  title: "Interestelar",
                  stars: "4",
                  description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
                  tags: [
                     { id: "1", name: "Ficção Científica" },
                     { id: "2", name: "Aventura" }
                  ]
               }} />
            </Movies>
         </Content>
      </Container>
   );
}