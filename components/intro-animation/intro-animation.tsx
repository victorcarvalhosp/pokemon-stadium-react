import styles from './intro-animation.module.scss'
import {useEffect, useReducer} from "react";
import useAudio from "../../hooks/useAudio";
import {useGlobal} from "../../store/Global/GlobalContext";
import Scene01 from "./scenes/scene01";
import Scene02 from "./scenes/scene02";
import Scene03 from "./scenes/scene03";
import Scene04 from "./scenes/scene04";
import Scene05 from "./scenes/scene05";
import Scene06 from "./scenes/scene06";
import Scene07 from "./scenes/scene07";
import Scene08 from "./scenes/scene08";
import Router from 'next/router'

const initialState = {scene: 0};

enum ActionType {
    Scene00 = 'Scene00',
    Scene01 = 'Scene01',
    Scene02 = 'Scene02',
    Scene03 = 'Scene03',
    Scene04 = 'Scene04',
    Scene05 = 'Scene05',
    Scene06 = 'Scene06',
    Scene07 = 'Scene07',
    Scene08 = 'Scene08',
}


export default function IntroAnimation() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case ActionType.Scene00:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene01})
                }, 4000);
                return {scene: 0};
            case ActionType.Scene01:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene02})
                }, 3000);
                return {scene: 1};
            case ActionType.Scene02:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene03})
                }, 3000);
                return {scene: 2};
            case ActionType.Scene03:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene04})
                }, 3000);
                return {scene: 3};
            case ActionType.Scene04:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene05})
                }, 3000);
                return {scene: 4};
            case ActionType.Scene05:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene06})
                }, 3000);
                return {scene: 5};
            case ActionType.Scene06:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene07})
                }, 3000);
                return {scene: 6};
            case ActionType.Scene07:
                setTimeout(() => {
                    dispatch({type: ActionType.Scene08})
                }, 4000);
                return {scene: 7};
            case ActionType.Scene08:
                setTimeout(() => {
                    Router.push('/start');
                }, 4000);
                return {scene: 8};
            default:
                throw new Error();
        }
    }


    const [, playAudio, stopAudio] = useAudio("/audio/intro.mp3");
    const globalState = useGlobal();

    useEffect(() => {
        playAudio();
        dispatch({type: ActionType.Scene00});
        return () => {
            stopAudio();
        }
    }, []);

    useEffect(() => {
        if (!globalState.state.turnedOn) {
            console.log('STOP AUDIO');
            stopAudio();
        }
    }, [globalState.state.turnedOn]);

    return <>
        {state.scene === 0 && (
            <div className={styles.center}>
                <img className={styles.logo} style={{width: '144px'}} src="/images/nintendo-64-logo.png"/>
            </div>
        )}
        {state.scene === 1 && (
            <Scene01 />
        )}
        {state.scene === 2 && (
            <Scene02 />
        )}
        {state.scene === 3 && (
            <Scene03 />
        )}
        {state.scene === 4 && (
            <Scene04 />
        )}
        {state.scene === 5 && (
            <Scene05 />
        )}
        {state.scene === 6 && (
            <Scene06 />
        )}
        {state.scene === 7 && (
            <Scene07 />
        )}
        {state.scene === 8 && (
            <Scene08 />
        )}
    </>
}
