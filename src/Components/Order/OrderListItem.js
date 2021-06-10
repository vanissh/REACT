import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.png';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`

    display: flex;
    flex-wrap: wrap;
    min-height: 26px;
    cursor: pointer;
`;

const ItemName = styled.span`

    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 2rem;
    margin-right: 1rem;
    min-width: 75px;
    text-align: rigth`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 12px;
    width: 100%;`;

const TrashBtn = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;

`;


export const OrderItem = ({ order, index, deleteItem, setOpenItem }) => {
    
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    const refDeleteBtn = useRef(null);

    return (
        <OrderItemStyled onClick={(e) => e.target !== refDeleteBtn.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashBtn ref={refDeleteBtn} onClick={() => deleteItem(index)}/>
            {topping && <Toppings>Toppings: {topping}</Toppings>}
        </OrderItemStyled>
)};