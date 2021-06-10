import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    height: 30px;
    font-size: 20px;
    vertical-align:middle;
`;

const BtnCount = styled.button`
    display: inline-block;
    background-color: #ccc;
    width: 30px;
    height: 30px;
    border: none;
    vertical-align:middle;
`;

export function CountItem ({count, setCount, onChange}){

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <BtnCount disabled={count <=1}onClick={() => setCount(count - 1)}>-</BtnCount>
                <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
                <BtnCount onClick={() => setCount(count + 1) }>+</BtnCount> 
            </div>
            
        </CountWrapper>
    )
}