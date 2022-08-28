import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SingUp() {
   return (
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
            <h2>Crie sua conta</h2>
            <Input type="text" placeholder="Nome" required icon={FiMail} />
            <Input type="email" placeholder="E-mail" required icon={FiLock} />
            <Input type="password" placeholder="Senha" required icon={FiLock} />
            <Input type="password" placeholder="Repita a senha" required icon={FiLock} />
            <Button title="Cadastrar" type="submit"/>
            <Link to="/">
               <FiArrowLeft />
               Voltar para o Login
            </Link>
         </Form>
         <Background />
      </Container>
   );
};