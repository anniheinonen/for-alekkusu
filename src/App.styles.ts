import styled from "styled-components";

export const Container = styled.div`
    min-height:100vh;
    background-image: url('/assets/tiles.jpeg');
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
`;

export const Area = styled.div`
    margin:auto;
    max-width:980px;

    @media (max-width:1024px) {
        padding:0px 45px;
    }
`;

export const Menu = styled.div`
    display:flex;  
`;

export const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top:80px;

    @media (max-width:1024px) {
        margin-top:120px;
    }

    @media (max-width:768px) {
        margin-top:80px;
    }
`;

export const Title = styled.h1`
    margin:0;
    padding:0;
    font-size:70px;
    font-weight:700;
`;

export const Desc = styled.p`
    margin-top:15px;
    margin-bottom:40px;
    font-weight: 400;
    
`;

export const Button = styled.div`
    button {
        display:flex;
        align-items:center;
        justify-content: center;
        background-color: #FAFAFA;
        padding: 20px 30px 20px 30px;
        font-weight:bold;
        box-shadow: 3px 3px 15px #FFF;
        border:0;
        border-radius: 8%;
        cursor:pointer;
        outline:0;
        font-size: 2em;
        
        img {
            margin-left:10px;
            width:30px;
            height:30px;
        }
    }
`;

export const First = styled.div`
    position:relative;
    margin-top: 5%;
    img {
        display: flex;
        margin-left:5px;
        border-radius: 8%;
    }

    button {
        position: absolute;
        left: 50%;
        bottom: 90%
    }

`;

export const Poem = styled.div`
    width: 500px;
    text-align: center;
    position: relative;

    #monkey {
        font-size: 2em;
    }

    #poem {
        background-color: rgba(220,220,220, 0.7);
        border-radius: 8%;
        padding: 7%;
        font-size: 1.1em;
        position: absolute;
    }

    #sign {
        position:absolute;
        top: 360%;
        left: 60%;
        font-family: 'Sacramento', cursive;
        font-size: 3em;
    }

    img {
        position: absolute;
        top: 280%;
        left: 88%;
        width: 100px;
    }
    
`;