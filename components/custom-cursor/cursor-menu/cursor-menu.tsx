import styles from './cursor-menu.module.scss'
import {useEffect, useRef} from "react";
import {useCursorMenu} from "./CursorMenuContext";

export default function CursorMenu() {

    const cursorMenuState = useCursorMenu();

    let angle = 0;     // starting position (degrees)
    const speed = 420;    // revolution speed in degrees per second
    const rate = 10;    // refresh rate in ms

    const cursor = useRef(null);
    const magnemite1 = useRef(null);
    const magnemite2 = useRef(null);
    const magnemite3 = useRef(null);


    useEffect(() => {

        const timer = () => setInterval(magnemitesFloatingAroundAnimation, rate);
        const timerId = timer();
        return () => {
            clearTimeout(timerId);
        };

    }, [cursorMenuState.state.distance]);

    document.addEventListener('mousemove', function (e) {
        if (cursor.current) {
            cursor.current.style.left = e.clientX + "px";
            cursor.current.style.top = e.clientY + "px";
        }
    })


    function magnemitesFloatingAroundAnimation() {
        let screenSizeFactor = 1;
        if (screen.width < 640) {
            screenSizeFactor = 2;
        }
        const magnemite1TopPosition = cursor.current.offsetTop + ((cursorMenuState.state.distance * Math.sin(angle * Math.PI / 180.0)) / screenSizeFactor) - 20;
        const magnemite1LeftPosition = cursor.current.offsetLeft + ((cursorMenuState.state.distance * Math.cos(angle * Math.PI / 180.0)) / screenSizeFactor) - 20;

        magnemite1.current.style.top = (magnemite1TopPosition * screenSizeFactor) + "px";
        magnemite1.current.style.left = (magnemite1LeftPosition * screenSizeFactor) + "px";

        const magnemite2TopPosition = cursor.current.offsetTop + ((cursorMenuState.state.distance * Math.sin((angle + 120) * Math.PI / 180.0)) / screenSizeFactor) - 20;
        const magnemite2LeftPosition = cursor.current.offsetLeft + ((cursorMenuState.state.distance * Math.cos((angle + 120) * Math.PI / 180.0)) / screenSizeFactor) - 20;

        magnemite2.current.style.top = (magnemite2TopPosition * screenSizeFactor) + "px";
        magnemite2.current.style.left = (magnemite2LeftPosition * screenSizeFactor) + "px";

        const magnemite3TopPosition = cursor.current.offsetTop + ((cursorMenuState.state.distance * Math.sin((angle + 240) * Math.PI / 180.0)) / screenSizeFactor) - 20;
        const magnemite3LeftPosition = cursor.current.offsetLeft + ((cursorMenuState.state.distance * Math.cos((angle + 240) * Math.PI / 180.0)) / screenSizeFactor) - 20;

        magnemite3.current.style.top = (magnemite3TopPosition * screenSizeFactor) + "px";
        magnemite3.current.style.left = (magnemite3LeftPosition * screenSizeFactor) + "px";

        angle -= (speed * (rate / 1000)) % 360;
    }


    return <>
        <div id="cursor" className={styles.cursor} ref={cursor}>
        </div>
        <img src="/images/main-menu-mouse.png" id="magnemite1" ref={magnemite1} className={styles.floatingAround}/>
        <img src="/images/main-menu-mouse.png" id="magnemite2" ref={magnemite2} className={styles.floatingAround}/>
        <img src="/images/main-menu-mouse.png" id="magnemite3" ref={magnemite3} className={styles.floatingAround}/>

    </>
}
