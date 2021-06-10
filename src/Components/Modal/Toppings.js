import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const ToppingWrap = styled.div`
    max-width: 500px;
    margin: 1rem auto 0;
    column-count: 2;`;

const ToppingHeader = styled.h1``;

const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;`;

const ToppingCheckBox = styled.input`
    cursor: pointer;
    margin-right: 10px;`;

export function Toppings({toppings, checkToppings}) {
    return(
        <Container>
        <ToppingHeader>
            Toppings
        </ToppingHeader>
        <ToppingWrap>
            {toppings.map((item, i) => (           
                <ToppingLabel key={i}>
                    <ToppingCheckBox type="checkbox"
                        checked={item.checked}
                        onChange={() => checkToppings(i)}/>
                    {item.name}
                </ToppingLabel>
            ))} 
        </ToppingWrap>
        </Container>
    )
}