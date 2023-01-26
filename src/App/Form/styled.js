import styled from "styled-components";

export const Wrapper = styled.form`
    display: block;
    margin-top: 0em;
`;

export const Header = styled.h1`
    color: #300d06;
    text-align: center;
    font-size: 40px ;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 300px;
    display: inline-block;
    margin-right: 10px;
`;

export const Field = styled.input`
    border: 1px solid black;
    width: 100%;
    padding: 10px;
    max-width: 400px;
    border-radius: 10px;
`;

export const Button = styled.button`
    width: 100%;
    color: black;
    background-color: rgb(170, 189, 166);
    max-width: 400px;
    border-radius: 10px;
    padding: 5px;
    font-size: 22px;
`;