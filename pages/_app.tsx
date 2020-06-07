import '../styles/global.scss'
import {AppProps} from 'next/app'
import {GlobalProvider} from "../store/Global/GlobalContext";
import Layout from "../components/layout";
import dynamic from "next/dynamic";

const GameAudio = dynamic(
    () => import('../components/game-audio/game-audio'),
    {ssr: false}
)
export default function App({Component, pageProps}: AppProps) {
    return <GlobalProvider>
        <GameAudio/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </GlobalProvider>
}
