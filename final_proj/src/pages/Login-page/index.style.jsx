import styled from 'styled-components'




export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #241b72;
    display: grid;


`

export const LoginWrapper = styled.div`


display: flex;
flex-direction: column;

align-items: center;
position: absolute;
background-image: linear-gradient(144deg,#1844d6, #2e3681 50%,#1041d4);
width: 25%;
border-radius: 15px;
box-shadow: 5px, 5px, 5px rgba (0, 0, 0, .5);
padding: 10px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

    
`

export const ButtonWrapper = styled.div`
    
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;
padding: 5px;


    
`     