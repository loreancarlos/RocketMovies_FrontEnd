import styled from "styled-components";

export const Container = styled.span`
   font-size: 1.2rem;
   padding: 0.5rem 1.6rem;
   border-radius: 0.8rem;
   color: ${({ theme }) => theme.COLORS.GRAY_100};
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;