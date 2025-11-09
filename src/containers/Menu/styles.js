import styled from "styled-components";
import { Link } from "react-router-dom";

import bannerMenu from '../../assets/banner-menu.svg';
import BackgroundCarrossel from '../../assets/bg-form.png';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F0F0F0;
    overflow: hidden;

    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ),
     url('${BackgroundCarrossel}');
     background-size: contain;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    position: relative;

    background: url('${bannerMenu}') no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #1f1f1f;

    a {
        font-size: 20px;
        color: #fff;
        top: 10px;
        right: 20px;
        position: fixed;
        cursor: pointer;
        background-color: rgba(90, 90, 90, 0.2);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        z-index: 10;
        
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            color: #9758a5;
        }
    }

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;
        span {
            display: block; 
            color: #fff;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? '#9758a6' : '#393939ff'};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
    `;
