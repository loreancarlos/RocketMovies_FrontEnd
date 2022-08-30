import styled from "styled-components";

export const Container = styled.section`
   display: flex;
   flex-direction:column;
   gap: 2.4rem;

   > h2{
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-size: 2rem;
      font-weight: 400;
   }

   >div{
      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_999};
      padding: 1.6rem;

      >div{
         margin-bottom: 0;
      }
   }
`;