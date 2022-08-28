import styled from "styled-components";
import bgSingIn from '../../assets/bgSingIn.png';

export const Container = styled.div`
   display: flex;
   align-items: stretch;

   height: 100vh;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;

   padding: 0 13.6rem;

   >h1{
      font-size: 4.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
   }

   >h2{
      font-size: 2.4rem;
      margin: 4.8rem 0;
      align-self: flex-start;
   }

   >p{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      align-self: flex-start;
   }

   >a{
      display: flex;
      align-items: center;
      gap: 0.8rem;

      margin-top: 4.2rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      >svg{
            width: 1.6rem;
            height: 1.6rem;
         }
   }
`;

export const Background = styled.div`
   flex: 1;
   background: url(${bgSingIn}) no-repeat center center;
   background-size:cover;
`;

export const Link = styled.link`
`;