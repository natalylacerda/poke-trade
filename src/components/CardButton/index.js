import React from 'react';
import { ButtonContainer } from './styles';

export default function CardButton({ type, onClick }) {

    return(
        <ButtonContainer type={type} onClick={onClick} >
            Escolher
        </ButtonContainer>
    )
}
