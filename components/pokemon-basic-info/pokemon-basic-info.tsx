import {format} from 'date-fns'
import {IPokemon} from "../../store/shared/models/Pokemon";
import styles from './pokemon-basic-info.module.scss'
import {Overworld} from "../overworld/overworld";

export default function PokemonBasicInfo({pokemon, backgroundColor, onClick, selected}: { pokemon: IPokemon, backgroundColor?: string, onClick?(): void, selected: boolean }) {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }
    return <div className={`flex-column`} onClick={handleClick}>
        <div className={styles.item} style={{backgroundColor: backgroundColor ? backgroundColor : 'transparent'}}>
            <div className={styles.itemSelector}>
                <Overworld key={pokemon.id} spriteUrl={pokemon.variety + ".png"} direction="down" type="pokemon"
                           animationActive={false}/>
                {selected ? (<p>Selected</p>) : (
                    <>
                        <p>{pokemon.name}</p>
                        {pokemon.level > 0 && (
                            <p className={styles.level}>L {pokemon.level}</p>
                        )}
                    </>
                )}


            </div>
        </div>

    </div>
}
