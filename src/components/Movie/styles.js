import styled from "styled-components";

export const Container = styled.button`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   background-color: ${({ theme }) => theme.COLORS.PINK + "0D"};
   
   width: 100%;
   max-height:22.2rem;
   border: none;
   border-radius: 1rem;
   padding: 3.2rem;

   >h1{
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
   }

   >p{
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GRAY_400};

      font-size: 1.6rem;
      line-height: 1.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 3.8rem;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
   }
   >footer{
      width: 100%;
      display: flex;
      gap: 0.8rem;
   }
`;