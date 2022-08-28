import styled from "styled-components";

export const Container = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;

   gap: 6.4rem;
   
   border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
   width: 100%;
   height:  11.6rem;

   >a{
      >h2{
      color: ${({ theme }) => theme.COLORS.PINK};
      }
   }

   >div{
      margin: 0;
   }

   input{
      padding: 1.9rem 2.4rem;
   }
`;

export const Profile = styled.div`
   display: flex;
   gap: 0.9rem;
   justify-content: center;
   align-items: center;
   
   max-width: 20rem;
   
   >div{
      display: flex;
      flex-direction: column;
      text-align: end;
      justify-content: center;
      flex: 1;

      >strong{
         font-weight: 700;
         font-size: 1.4rem;
      }

      >a{
         color: ${({ theme }) => theme.COLORS.GRAY_300};
         font-weight: 400;
         font-size: 1.4rem;
      }
   }

   >a{
      >img{
         height:6.4rem;
         width: 6.4rem;
         border-radius: 50%;
      }
   }
`;