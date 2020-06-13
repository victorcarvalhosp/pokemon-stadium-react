import styles from './cursor-menu.module.scss'
import {useEffect} from "react";

export default function CursorMenu() {
    let angle = 0;     // starting position (degrees)

    const distance = 30; // distance of b from a
    const speed = 420;    // revolution speed in degrees per second
    const rate = 10;    // refresh rate in ms


    useEffect(() => {
        setInterval(magnemitesFloatingAroundAnimation, rate);
    }, [])

    document.addEventListener('mousemove', function (e) {
        document.getElementById("magnemite1").style.display = 'block';
        document.getElementById("magnemite2").style.display = 'block';
        document.getElementById("magnemite3").style.display = 'block';
        const cursor = document.getElementById("cursor");

        cursor.style.display = "block";
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    })



    function magnemitesFloatingAroundAnimation() {
        const cursor = document.getElementById("cursor");

        const t = cursor.offsetTop + (distance * Math.sin(angle * Math.PI / 180.0));
        const l = cursor.offsetLeft + (distance * Math.cos(angle * Math.PI / 180.0));

        const image2 = document.getElementById('magnemite1');
        image2.style.top = t + "px";
        image2.style.left = l + "px";

        const t2 = cursor.offsetTop + (distance * Math.sin((angle + 120) * Math.PI / 180.0));
        const l2 = cursor.offsetLeft + (distance * Math.cos((angle + 120) * Math.PI / 180.0));

        const image3 = document.getElementById('magnemite2');
        image3.style.top = t2 + "px";
        image3.style.left = l2 + "px";

        const t3 = cursor.offsetTop + (distance * Math.sin((angle + 240) * Math.PI / 180.0));
        const l3 = cursor.offsetLeft + (distance * Math.cos((angle + 240) * Math.PI / 180.0));

        const image4 = document.getElementById('magnemite3');
        image4.style.top = t3 + "px";
        image4.style.left = l3 + "px";

        angle -= (speed * (rate / 1000)) % 360;

    }


    return <>
        <div id="cursor" className={styles.cursor}>
        </div>
        <img src="/images/main-menu-mouse.png" id="magnemite1" className={styles.floatingAround}/>
        <img src="/images/main-menu-mouse.png" id="magnemite2" className={styles.floatingAround}/>
        <img src="/images/main-menu-mouse.png" id="magnemite3" className={styles.floatingAround}/>

    </>
}
