import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.4rem;
   
   width: 100%;
   height: 100vh;
   padding: 0 12rem;
   
   >a{
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
      gap: 0.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      
      margin-top: 1.6rem;
   }

   >main{
      display: flex;
      flex-direction: column;
      gap: 4rem;

      margin-bottom: 4rem;
   }
`;



export const Info = styled.div`

`;
