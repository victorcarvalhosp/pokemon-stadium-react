import {useEffect, useState} from "react";

export default function useAudio(url: string) {
    console.log(url);
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggleAudio = () => {
        setPlaying(!playing);
    }

    const playAudio = async () => {
        console.log('PLAY AUDIO');
        setPlaying(true);
    }

    const stopAudio = async () => {
        setPlaying(false);
    }

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [toggleAudio, playAudio, stopAudio];
};

