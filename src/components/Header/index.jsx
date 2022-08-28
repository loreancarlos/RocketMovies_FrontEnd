import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
   return (
      <Container>
         <Link to="/">
            <h2>RocketMovies</h2>
         </Link>
         <Input type="text" placeholder="Pesquisar pelo título" />
         <Profile>
            <div>
               <strong>Lorean Carlos</strong>
               <Link to="/logout">
                  <span>sair</span>
               </Link>
            </div>
            <Link to="/profile">
               <img src="https://github.com/loreancarlos.png" alt="Foto do usuário" />
            </Link>
         </Profile>
      </Container>
   );
};