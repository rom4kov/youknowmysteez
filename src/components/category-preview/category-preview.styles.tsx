import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  margin: 2rem 10rem 2rem 25rem;
`;

export const CategoryTitleLink = styled(Link)`
  color: black;
  font-size: 2rem;
  margin-left: 2rem;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(5);
  column-gap: 3rem;
  row-gap: 1rem;
`;
