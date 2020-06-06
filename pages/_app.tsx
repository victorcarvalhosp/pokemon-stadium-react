import '../styles/global.scss'
import {AppProps} from 'next/app'
import {GlobalProvider} from "../store/Global/GlobalContext";

export default function App({Component, pageProps}: AppProps) {
    return <GlobalProvider>
                <Component {...pageProps} />
    </GlobalProvider>
}
