import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SingIn() {
   return (
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
            <h2>Faça seu login</h2>
            <Input type="text" placeholder="Email" icon={FiMail} />
            <Input type="password" placeholder="Senha" icon={FiLock} />
            <Button title="Entrar" />
            <Link to="/register">Criar conta</Link>
         </Form>
         <Background />
      </Container>
   );
};