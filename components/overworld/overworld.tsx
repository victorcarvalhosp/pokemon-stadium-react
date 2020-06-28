import React from 'react';
import {CLOUDINARY_URL_HUMAN_OVERWORLD, CLOUDINARY_URL_POKEMON_OVERWORLD} from "../../utils/consts";
import styles from './overworld.module.scss'


interface IComponentProps {
    spriteUrl: string;
    direction: "up" | "down" | "right" | "left";
    animationActive?:boolean;
    type?: "pokemon"| "human" | "item" | "other";
    onClick?(): void
}

export const Overworld: React.FC<IComponentProps> = ({spriteUrl, direction,animationActive, type, onClick}) => {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }
    const path = type && type === "human" ? `${CLOUDINARY_URL_HUMAN_OVERWORLD}` : type && type === "pokemon" ? `${CLOUDINARY_URL_POKEMON_OVERWORLD}` : type && type === "item" ? '../../assets/overworlds/items/': '';
    return (
            <div className={`${styles.pixelConfig} ${styles.Character} ${direction === "up" ? styles.CharacterWalkUp : direction === "left" ? 
                styles.CharacterWalkLeft : direction === "right" ? styles.CharacterWalkRight : styles.CharacterWalkDown}`} onClick={handleClick}>
                <img alt="pokemon-shadow" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                     className={`${styles.CharacterShadow} ${styles.PixelArtImage}`}/>
                <img alt="pokemon-sprite" src={`${path}${spriteUrl}`}
                     className={`${animationActive ? styles.active : ''} ${styles.PixelArtImage} ${styles.CharacterSpriteSheet}`}/>
            </div>
    );
}
