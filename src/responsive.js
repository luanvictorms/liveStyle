import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props};
        }
    `;
};

export const mobileMedio = (props) => {
    return css`
        @media only screen and (max-width: 450px) {
            ${props};
        }
    `;
};

export const mobileGrande = (props) => {
    return css`
        @media only screen and (max-width: 1080px) {
            ${props};
        }
    `;
};


//EXAMPLE 
/* 

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 600px) {
            ${props};
        }
    `;
};

*/