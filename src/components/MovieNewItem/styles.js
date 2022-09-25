import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;

   background-color: transparent;
   color: ${({ theme }) => theme.COLORS.GRAY_300};

   border: ${`2px dashed`};
   margin-bottom: 0.8rem;
   border-radius: 1rem;
   padding-right: 1.2rem;

   >button{
      border: none;
      background: none;
      display: flex;
      align-items: center;

      >svg{
         font-size: 2rem;
         color: ${({ theme }) => theme.COLORS.PINK};
      }
   }
   
   >input{
      height: 5.6rem;
      width: 14rem;

      padding: 1.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: transparent;
      border: 0;

      &::placeholder{
         color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
   }
`;