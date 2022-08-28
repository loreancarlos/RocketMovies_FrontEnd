import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4rem;
   
   width: 100%;
   height: 100vh;
   padding: 0 12rem;

   .tags{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      >div{
         width: 48%;
      }
   }
`;

export const Form = styled.form`

   >header{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2.4rem;

      margin-bottom: 4rem;

      >h1{
         font-weight: 500;
         font-size: 3.6rem;
      }

      >a{
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 0.8rem;

         color: ${({ theme }) => theme.COLORS.PINK};
      }
   }

`;