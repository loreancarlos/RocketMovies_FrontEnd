import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function SingUp() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [repeatPassword, setRepeatPassword] = useState("");

   const navigate = new useNavigate();

   function handleSignUp() {
      if (!name || !email || !password || !repeatPassword) {
         return alert("Preencha todos os campos.");
      }

      if (password != repeatPassword) {
         return alert("Senha não coincide.");
      }

      api.post("/users", { name, email, password })
         .then(() => {
            alert("Usuário cadastrado com sucesso.");
            navigate("/");
         })
         .catch(error => {
            try {
               alert(error.response.data.message);
            } catch {
               alert("Não foi possível cadastrar.");
            }
         });
   }

   return (
      <Container>
         <Form id="singUpForm">
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
            <h2>Crie sua conta</h2>
            <Input type="text" placeholder="Nome" required icon={FiUser} onChange={event => setName(event.target.value)} />
            <Input type="email" placeholder="E-mail" required icon={FiMail} onChange={event => setEmail(event.target.value)} />
            <Input type="password" placeholder="Senha" required icon={FiLock} onChange={event => setPassword(event.target.value)} />
            <Input type="password" placeholder="Repita a senha" required icon={FiLock} onChange={event => setRepeatPassword(event.target.value)} />
            <Button title="Cadastrar" onClick={handleSignUp} />
            <Link to="/">
               <FiArrowLeft />
               Voltar para o Login
            </Link>
         </Form>
         <Background />
      </Container>
   );
};