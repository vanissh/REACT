import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './listItem';
import { Banner } from './Banner';

const MenuStyled = styled.main`
    background-color: #f0e4e4;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;


export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Burgers</h2>
            <ListItem itemList={dbMenu.burger}
                        setOpenItem={setOpenItem}/>
        </SectionMenu>

        <SectionMenu>
            <h2>Snack / Beverages</h2>
            <ListItem itemList={dbMenu.other}
                        setOpenItem={setOpenItem}/>
        </SectionMenu>
    </MenuStyled>
);