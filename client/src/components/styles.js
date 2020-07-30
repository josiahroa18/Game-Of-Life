import styled from 'styled-components';
import { theme } from '../theme';
import { ChevronDown } from '@styled-icons/boxicons-solid';
import { Link } from 'react-router-dom';

export const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.darkBlue};
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    z-index: 10;
    h1{
        font-size: ${theme.fontSize.header3};
        font-family: ${theme.font};
        color: ${theme.colors.white};
        user-select: none;
    }
`;

export const DropDown = styled.div`
    font-size: ${theme.fontSize.text};
    font-family: ${theme.font};
    color: ${props => props.selected ? theme.colors.lightGreen : theme.colors.white};
    cursor: pointer;
    user-select: none;
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => props.speed ? '160px' : 'auto'};
    }
    &:hover{
        color: ${theme.colors.lightGreen};
        transition: .5s color ease;
    }
`;

export const Menu = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    width: ${props => props.width};
    height: ${props => props.height};
    position: absolute;
    margin-top: 35px;
    z-index: 999;
    background-color: ${theme.colors.white};
    .rules{
        color: ${theme.colors.black};
        p{
            margin: 15px 10px;
        }
    }
    .presets{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .speed{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Button = styled.div`
    background-color: ${props => props.run ? 
        (props.start ? theme.colors.red : theme.colors.green) 
        : theme.colors.grey};
    font-family: ${theme.font};
    font-size: ${theme.fontSize.text};
    width: 150px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.colors.white};
    user-select: none;
    &:hover{
        background-color: ${props => props.run ? 
            (props.start ? theme.colors.lightRed : theme.colors.lightGreen) 
            : theme.colors.lightGrey};
        transition: .5s background-color ease;
    }
`;

export const DownArrow = styled(ChevronDown)`
    margin-left: 5px;
    width: 20px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${theme.fontSize.text};
    font-family: ${theme.font};
    color: ${theme.colors.white};
    user-select: none;
    &:hover{
        color: ${theme.colors.lightGreen};
    }
`;

export const VerticalDivider = styled.div`
    width: 1px;
    height: 40px;
    background-color: ${theme.colors.white};
`;

export const HorizontalDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lightGrey};
`;

export const SpeedOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 0;
    color: ${props => props.selected ? theme.colors.green : theme.colors.lightGrey};
    &:hover{
        color: ${theme.colors.green};
        transition: .5s color ease;
    }
`;

export const PresetOption = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.lightGrey};
    img{
        width: 150px;
        height: 150px;
        margin: 10px;
        margin-left: 30px;
    }
    &:hover{
        color: ${theme.colors.lightGreen};
    }
`;

export const Highlight = styled.span`
    color: ${theme.colors.lightGreen};
`;

// =========== Stats Styles ===========
export const StatsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

export const Stats = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: ${theme.font};
        font-size: ${theme.fontSize.text};
    }
`;

// =========== Grid Styles ===========
export const GridWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.colCount}, 20px);
`;

export const Cell = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.live ? undefined : theme.colors.black};
    // border: 1px solid ${theme.colors.black};
    cursor: pointer;
    &:hover{
        background-color: ${theme.colors.white};
    }
`;

// =========== About Styles ===========
export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AboutNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.darkBlue};
    height: 45px;
`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    header{
        margin: 30px 0;
        width: 800px;
        img{
            width: 100%;

        }
    }
    .article{
        margin-bottom: 50px;
        h1{
            font-family: ${theme.font};
        }
        p{
            font-family: ${theme.font};
            font-size: 20px;
            line-height: 28px;
        }
        li{
            font-family: ${theme.font};
        }
        .links{
            p{
                margin: 5px 0;
            }
            a{
                color: ${theme.colors.lightGreen};
                text-decoration: none;
            }
        }
        img{
            width: 100%;
        }
    }
`;

// =========== About Styles ===========
export const Footer = styled.div`
    width: 100%;
    background-color: ${theme.colors.darkBlue};
    height: 80px;
    margin: 0;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        color: ${theme.colors.white};
        font-family: ${theme.font};
        a{
            color: ${theme.colors.lightGreen};
            text-decoration: none;
        }
    }
`;