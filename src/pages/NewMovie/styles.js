import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 2.4rem; 
   
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

   >a{
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
      gap: 0.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      
      margin-top: 1.6rem;
   }

   >footer{
      display: flex;
      gap: 4rem;
      margin-bottom: 4rem;

      button:nth-child(1){
         background-color: ${({ theme }) => theme.COLORS.BACKGROUND_999};
         color: ${({ theme }) => theme.COLORS.PINK};
      }
   }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 4rem;

   padding-right:0.8rem;

   >h1{
      font-weight: 500;
      font-size: 3.6rem;
   }

   >div{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
   }
`;