import "../styles/global.scss";
import { AppProps } from "next/app";
import { GlobalProvider } from "../store/Global/GlobalContext";
import Layout from "../components/layout";
import dynamic from "next/dynamic";
import CursorCustom from "../components/custom-cursor/cursor-custom";
import { CursorMenuProvider } from "../components/custom-cursor/cursor-menu/CursorMenuContext";
import Head from "next/head";
import "nes.css/css/nes.css";
import { useEffect } from "react";
import { AppRoutes } from "../utils/app-routes";
import { useRouter } from "next/router";

const GameAudio = dynamic(() => import("../components/game-audio/game-audio"), {
  ssr: false,
});
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(AppRoutes.TITLE);
    router.prefetch(AppRoutes.MAIN_MENU);
    router.prefetch(AppRoutes.SELECT_TEAM);
    router.prefetch(AppRoutes.STADIUM_MENU);
  }, []);

  return (
    <GlobalProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GameAudio />
      <CursorMenuProvider>
        <CursorCustom />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CursorMenuProvider>
    </GlobalProvider>
  );
}
