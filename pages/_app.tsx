import '../styles/global.scss'
import {AppProps} from 'next/app'
import {GlobalProvider} from "../store/Global/GlobalContext";
import Layout from "../components/layout";

export default function App({Component, pageProps}: AppProps) {
    return <GlobalProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </GlobalProvider>
}
