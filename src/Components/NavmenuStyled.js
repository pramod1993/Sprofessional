import styled from "styled-components";

export const categories = styled.li`
    position: relative;
    display:flex; 
    align-items: center;
    color:#fff; 
    justify-content: center;

    &:hover .submenu{
        display:block;
    }
   

    & .submenu{
        position:absolute;
        top:100%;
        left:0;
        background:#fff;
        margin: 0;
        padding: 0px;
        display: none;
        width:200px;
        color:#000;

        & li{
            font-size:14px;
            text-transform: capitalize;
        }

    }
    
`;
export const categories1 = styled.li`
    position: relative;
    padding:5px 10px;
    display:flex; 
    align-items: center;

    &:hover .rightmenu{
        display:block;
    }
& .rightmenu{
        position:absolute;
        top:0;
        left:100%;
        background:#fff;
        margin: 0;
        padding: 8px 12px;
        display: none;
        width:200px;
    }
`