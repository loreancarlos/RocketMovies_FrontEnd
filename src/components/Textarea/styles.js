import styled from "styled-components"

export const Container = styled.textarea`
   width: 100%;
   height: 27.4rem;

   background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
   color:${({ theme }) => theme.COLORS.WHITE};

   border: none;
   resize: none;

   margin-bottom: 0.8rem;
   border-radius: 1rem;
   padding: 1.2rem;

   &::placeholder{
   color: ${({ theme }) => theme.COLORS.GRAY_300};
   }
`;