import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap:4.8rem;

   width: 100%;
   height: 100vh;
   padding: 0 12rem;

   background-color:${({ theme }) => theme.COLORS.BACKGROUND_900};
   
   >div{
      display: flex;
      justify-content:space-between;
   
      >h1{
         font-weight: 400;
         font-size: 3.2rem;
      }
   }
`;

export const Content = styled.main`
   display: flex;
   flex-direction: column;
   gap: 3.7rem;
   padding-right: 0.8rem;
   margin-bottom: 6rem;
`;

export const NewMovie = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   gap:0.8rem;

   padding: 1.35rem 3.2rem;
   border-radius: 0.8rem;
   
   background-color: ${({ theme }) => theme.COLORS.PINK};
   color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Movies = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.4rem;
`;
