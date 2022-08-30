import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root{
      font-size: 62.5%;
   }

   *{
      margin: 0;
      padding:0;
      box-sizing: border-box;
   }
   
   main,body{
      overflow: auto;
   }

   main::-webkit-scrollbar,body::-webkit-scrollbar {
      width: 0.8rem;
   }

   main::-webkit-scrollbar-track,body::-webkit-scrollbar-track {
      background: transparent;
   }

   main::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.8rem;
   }

   body{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.WHITE};
   }
   
   body,button,input,textarea,a{
      font-family: 'Roboto Slab', serif;
      outline: none;
      font-size: 1.6rem;
   }

   a{
      text-decoration: none;
   }

   button,a{
      cursor: pointer;
      transition: filter 0.2s;
   }

   button:hover, a:hover{
      filter: brightness(0.9);
   }
`;