import styled from 'styled-components';

export const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: white;
`

export const ClosedBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 200px 100px;
`

export const Cell = styled.div`
    padding: auto;
`

export const QuantityCell = styled(Cell)`
    padding-left: 25px;
`

export const TitleCell = styled(Cell)`
    font-weight: bold;
`
