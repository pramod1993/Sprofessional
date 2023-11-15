import styled from "styled-components";

export const imgbox = styled.div`
    transition: all 0.9s ease-in-out;
    
    &:hover img{
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
    &:hover .shop{  
        transform: translateY(-50px);
        opacity:1;
    }
    & .shop{
        opacity: 0;
        transition: all 0.4s ease;
    }
`;
export const imgbox1 = styled.div`
    position: relative;
    overflow:hidden;

    &:hover .second{
        opacity:1;
        transition: all 0.9s ease-in-out;
    }
    &:hover .over{
        right:10px;
        transition: all 0.9s ease-in-out;
        
    }
    & .second{
        position:absolute;
        top:0;
        left:0;
        right:0;
        opacity: 0;
        transition: all 0.4s ease;
        
    }
    & .over{
        right:-50px;
        
    }
`;