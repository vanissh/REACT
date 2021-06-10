import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 1rem auto 0;
    column-count: 2;`;

const ChoiceHeader = styled.h1``;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 10px;`;

export function Choices({openItem, choice, changeChoices}) {
     return(
        <Container>
        <ChoiceHeader>
            Choices
        </ChoiceHeader>
        <ChoiceWrap>
            {openItem.choices.map((item, i) => (           
                <ChoiceLabel key={i}>
                    <ChoiceRadio 
                        type="radio"
                        name="choices"
                        checked={choice === item}
                        value={item}
                        onChange={changeChoices}/>
                    {item}
                </ChoiceLabel>
            ))} 
        </ChoiceWrap>
        </Container>
     )
}