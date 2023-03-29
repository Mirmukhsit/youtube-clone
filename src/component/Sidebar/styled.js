import styled from "styled-components";

const Container = styled.div`
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 300px;
    overflow: auto;
    height: 100%;
    position: fixed;
    z-index: 1;

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
cursor: pointer;
    :hover{
        background: rgba(255, 255, 255, 0.2);
    }
`;

const HR = styled.div`
    margin-top: 22px;
    height: 2px;
    background-color: gray;
`
const H3 = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
`;

const Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.6);

`

export {Container,Wrapper,H3,HR,Title}