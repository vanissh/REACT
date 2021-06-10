import React from 'react';
import styled from 'styled-components';
import { Button } from '../Style/ModalButton';
import { CountItem } from './CountItem';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    color: #00dg56;
`;

const Description = styled.div`
    display: flex;
    padding: 0 4rem 2rem;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`;

const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    padding: 2rem 0 0 0;
    justify-content: space-between;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: right;
    & span:first-child{
        flex-grow: 0.1;
    }
`;

export const ModalItem = ({ openItem, setOpenItem , orders, setOrders}) => {
    
    const counter = useCount(openItem.count); 
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = e => {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,

    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };
    
    return(
        <Overlay id="overlay" onClick={closeModal}> 
            <Modal>
                <Banner img={openItem.img}/>
                <Description>
                    <HeaderContent>
                        <h1>{openItem.name}</h1>
                        <h1>{openItem.price} ₽</h1>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                    <TotalPriceItem>
                        <span>Price:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <Button 
                    onClick={isEdit? editOrder : addToOrder}
                    disabled={order.choices && !order.choice}
                    >{isEdit? 'Edit' : 'Add'}</Button>
                </Description>
                
            </Modal>
        </Overlay>
    )
};