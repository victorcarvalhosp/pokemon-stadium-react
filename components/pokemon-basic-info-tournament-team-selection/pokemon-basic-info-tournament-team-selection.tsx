import {format} from 'date-fns'
import {IPokemon} from "../../store/shared/models/Pokemon";
import styles from './pokemon-basic-info-tournament-team-selection.module.scss'
import {Overworld} from "../overworld/overworld";

export default function PokemonBasicInfoTournamentTeamSelection({pokemon, backgroundColor, selected, onClick}: { pokemon: IPokemon, backgroundColor?: string, selected: boolean, onClick?():void }) {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }
    return <div className={`flex-column`} onClick={handleClick}>
        <div className={styles.item} style={{backgroundColor: backgroundColor ? backgroundColor : 'transparent'}}>
            <div className={selected ? styles.selected : ''}>
                {pokemon.id ? (
                    <>
                        <Overworld key={pokemon.id} spriteUrl={pokemon.variety + ".png"} direction="down" type="pokemon"
                                   animationActive={false}/>
                        <p>{pokemon.name}</p>
                        {pokemon.level > 0 && (
                            <p className={styles.level}>L {pokemon.level}</p>
                        )}
                    </>
                ) : (selected && (
                        <div className={styles.emptySlot}>
                            <p>Select Pokémon</p>
                        </div>
                    )
                )}

            </div>
        </div>

    </div>
}
