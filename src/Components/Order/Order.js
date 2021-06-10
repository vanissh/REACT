import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ModalButton';
import { OrderItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column; 
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    font-size: 40px;
    margin-bottom: 2rem;
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 2rem;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

const Total  = styled.div`
    display: flex;
    margin: 0 3.5rem  3rem;
    & span:first-child {
        flex-grow: 1;
    };
    
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {

    const deleteItem = index => {
        const newOrder = [...orders];

        newOrder.splice(index, 1);

        setOrders(newOrder);
    }

    const total = orders.reduce((result, order)=> totalPriceItems(order) + result, 0);

    const totalCount = orders.reduce((result, order)=> order.count + result, 0);

    return(
        <OrderStyled>
            <OrderTitle>
                Order
            </OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map((order, index) => <OrderItem
                            key={index }
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                            setOpenItem={setOpenItem}
                            />)}
                </OrderList> : 
                <EmptyList>Order list is empty</EmptyList>}
            </OrderContent>
            <Total>
                <span>Total</span>
                <span>{totalCount}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <Button>Checkout</Button>
        </OrderStyled>
    )
}