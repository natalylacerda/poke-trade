import React, { useEffect, useState } from 'react';
import { Card, Buttons, Cancel } from './styles';
import CardButton from '../CardButton'
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function PokeCard({ name, url, onClickCancel,  onClickLeft, onClickRight, type }) {

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios.get(`${url}`).then((res) => setPokemon(res.data));
    });

    if (type === 'default'){
        return(
            <Card id={pokemon?.id} score={pokemon?.base_experience} type={type}>
                <img src = {pokemon?.sprites.front_default } alt="pokemon"/>
                {name}
                <Buttons>
                    <CardButton onClick={onClickLeft} type={'blue'}>
                        Escolher
                    </CardButton>
                    <CardButton onClick={onClickRight} type={'red'}>
                        Escolher
                    </CardButton>
                </Buttons>
            </Card>
        )
    }
    else if (type === 'chosen'){
        return(
            <Card>
                <Cancel onClick={onClickCancel} style={{color: 'grey', fontSize: '1.5rem', cursor: 'pointer'}}>
                    <FaTimes/>
                </Cancel>
                <img src = {pokemon?.sprites.front_default } alt="pokemon"/>
                {name}
            </Card>
        )
    }
}
