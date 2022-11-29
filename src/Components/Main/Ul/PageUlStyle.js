import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageUlStyle = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 50px;
`;

export const PageLinkStyle = styled(Link)`
    font-family: "Roboto";
    font-weight: 500;
    font-size: 1.6rem;
    color: #828282;
`;
