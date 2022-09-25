import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";
import { Container, Form, Avatar } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Profile() {
   const { user, updateProfile } = useAuth();

   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [oldPassword, setOldPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [repeatNewPassword, setRepeatNewPassword] = useState("");

   const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
   const [avatar, setAvatar] = useState(avatarUrl);
   const [avatarFile, setAvatarFile] = useState(null);

   async function handleUpdate() {
      if (newPassword != repeatNewPassword) {
         return alert("Nova senha não coincide.");
      }

      const user = { name, email, oldPassword, newPassword };
      await updateProfile({ user, avatarFile });
   }

   function handleChangeAvatar(event) {
      const file = event.target.files[0];
      setAvatarFile(file);

      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview);
   }

   return (
      <Container>
         <header>
            <Link to="/">
               <FiArrowLeft />
               Voltar
            </Link>
         </header>
         <Form>
            <Avatar>
               <img src={avatar} alt={user.name} />
               <label htmlFor="avatar">
                  <FiCamera />
                  <input id="avatar" type="file" onChange={handleChangeAvatar} />
               </label>
            </Avatar>
            <Input placeholder="Nome" value={name} type="text" icon={FiUser} onChange={event => setName(event.target.value)} />
            <Input placeholder="Email" value={email} type="text" icon={FiMail} onChange={event => setEmail(event.target.value)} />
            <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={event => setOldPassword(event.target.value)} />
            <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={event => setNewPassword(event.target.value)} />
            <Input placeholder="Repita a nova senha" type="password" icon={FiLock} onChange={event => setRepeatNewPassword(event.target.value)} />
            <Button onClick={handleUpdate} title="Salvar" />
         </Form>
      </Container>
   )
};