import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #241b72;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-size: 50px;
  font-weight: 900px;
  width: 50%;
  text-align: center;
  padding: 300px 200px 30px;
  color: white;
  font-family: cursive;
`;

export const StyledLink = styled(Link)`
  color: lightblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;

  &:active {
    color: white;
  }
`;
