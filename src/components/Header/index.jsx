import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";
import { Container, Profile, Button } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Header() {
   const { signOut, user } = useAuth();
   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
   const { name } = user;
   const nameAndSubName = name.split(" ").slice(0, 2).join(" ");

   return (
      <Container>
         <Link to="/">
            <h2>RocketMovies</h2>
         </Link>
         <Input type="text" placeholder="Pesquisar pelo título" />
         <Profile>
            <div>
               <strong>{nameAndSubName}</strong>
               <Button onClick={signOut}>
                  <span>sair</span>
               </Button>
            </div>
            <Link to="/profile">
               <img src={avatarUrl} alt={user.name} />
            </Link>
         </Profile>
      </Container>
   );
};