import Head from 'next/head'
import styles from './layout.module.scss'
import {useEffect, useState} from "react";
import Screen from "./screen/screen";

const name = '[Your Name]'
export const siteTitle = 'Pokémon Stadiumjs'

export default function Layout({
                                   children,
                                   home
                               }: {
    children: React.ReactNode
    home?: boolean
}) {

    const [on, setOn] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        document.getElementById('__next').classList.add('flex-container');
    }, []);

    const toggleMonitor = () => {
        setOn(!on);
        console.log(on);
            setTimeout(() => {
                setShowContent(!on);
            }, 2000);

    }
    return (
        <div>
            <div id="screen" className="flex-container">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta
                        name="description"
                        content="Pokémon Stadiumjs"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <title>{siteTitle}</title>
                </Head>
                <div style={{position: "absolute", top: 0}}>
                    <input type="checkbox" id="switch" className={styles.switch} checked={on} onChange={() => toggleMonitor()}/>
                    <label htmlFor="switch" className={`${styles.switchLabel} ${on ? styles.switchLabelOn : ''}`}>Turn {on ? 'off' : 'on'}</label>
                </div>
                <Screen on={on} showContent={showContent} children={children} />
            </div>
        </div>

    )
}
