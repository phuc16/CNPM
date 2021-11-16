import styled from 'styled-components';

export const Cell = styled.div`
    background-color: #FEF5DA;
    padding: 20px;
    height: 65px;
    text-align: center;
    
`

export const Title = styled.div`
    background-color: orange;
    font-weight: bold;
    padding: 10px;
    height: 50px;
    text-align: center;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const Container = styled.div`
    display: grid;
    grid-gap: 10px 0px;
    grid-template-columns: auto;
    background-color: #C4EBD8;
    width: 850px;
    height: 530px;
    margin: auto;
    margin-top: 20px;
    padding: 8px 10px;
`