import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SingIn() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { signIn } = useAuth();

   function handleSignIn() {
      signIn({ email, password });
   }

   return (
      <Container>
         <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
            <h2>Faça seu login</h2>
            <Input type="email" placeholder="Email" required icon={FiMail} onChange={event => setEmail(event.target.value)} />
            <Input type="password" placeholder="Senha" required icon={FiLock} onChange={event => setPassword(event.target.value)} />
            <Button title="Entrar" onClick={handleSignIn} />
            <Link to="/register">Criar conta</Link>
         </Form>
         <Background />
      </Container>
   );
};