import Head from 'next/head'
import styles from './layout.module.scss'
import {useEffect} from "react";
import Screen from "./screen/screen";
import {useGlobal} from "../store/Global/GlobalContext";
import {toggleShowContent, turnOff, turnOn} from "../store/Global/GlobalActions";

export const siteTitle = 'Pokémon Stadiumjs'

export default function Layout({
                                   children,
                                   home
                               }: {
    children: React.ReactNode
    home?: boolean
}) {
    const globalState = useGlobal();

    const toggleMonitor = () => {
        if (globalState?.state.turnedOn) {
            globalState?.dispatch(turnOff());
        } else {
            globalState?.dispatch(turnOn());
        }
        setTimeout(() => {
            globalState?.dispatch(toggleShowContent(true));
        }, 2000);
    }

    useEffect(() => {
        document.getElementById('__next').classList.add('flex-container');
    }, []);

    return (
        <div>
            <div id="screen" className="flex-container">
                <Head>
                    <meta charSet='utf-8'/>
                    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
                    <meta name='viewport'
                          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
                    <meta name='description' content='Description'/>
                    <meta name='keywords' content='Keywords'/>
                    <title>Next.js PWA Example</title>

                    <link rel="manifest" href="/manifest.json"/>
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>
                    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                    <meta name="theme-color" content="#317EFB"/>
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
                    <input type="checkbox" id="switch" className={styles.switch} checked={globalState?.state.turnedOn}
                           onChange={() => toggleMonitor()}/>
                    <label htmlFor="switch"
                           className={`${styles.switchLabel} ${globalState?.state.turnedOn ? styles.switchLabelOn : ''}`}>Turn {globalState?.state.turnedOn ? 'off' : 'on'}</label>
                </div>
                {globalState?.state.turnedOn}
                <Screen on={globalState?.state.turnedOn} showContent={globalState?.state.showContent} children={children}/>
            </div>
        </div>

    )
}
