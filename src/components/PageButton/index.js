import React from 'react';
import { ButtonContainer } from './styles';

export default function PageButton({ type, label, onClick }) {

    return(
        <ButtonContainer type={type} onClick={onClick} >
            {label}
        </ButtonContainer>
    )
}
