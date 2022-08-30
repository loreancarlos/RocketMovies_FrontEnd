import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   color: ${({ theme }) => theme.COLORS.GRAY_300};

   border:none;
   margin-bottom: 0.8rem;
   border-radius: 1rem;
   padding: 1.2rem;
   height: 5.6rem;

   >div{
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: transparent;
      margin-right: 1.2rem;
   }

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
`;