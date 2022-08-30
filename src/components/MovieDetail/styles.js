import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4rem;

   >p{
      text-align: justify;
   }
`;

export const Tags = styled.div`
   display: flex;
   gap: 0.8rem;

   >span{
      padding: 0.8rem 1.6rem;
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
   }
`;

export const Title = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.4rem;

   >h1{
      display: flex;
      align-items: center;
      gap: 2rem;
      font-weight: 500;
      font-size: 3.6rem;

      >span{
         img{
            width: 2rem;
            height: 2rem;
         }
      }
   }

   >div{
      display: flex;
      align-items: center;
      gap: 0.8rem;

      >a{
         display: flex;

         >img{
            width: 1.6rem;
            height: 1.6rem;
         }
      }

      >svg{
         color: ${({ theme }) => theme.COLORS.PINK};
      }
   }
`;