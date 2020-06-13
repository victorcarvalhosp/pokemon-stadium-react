import Layout from "../../components/layout";
import Scene02 from "../../components/intro-animation/scenes/scene02";
import Scene01 from "../../components/intro-animation/scenes/scene01";
import Scene03 from "../../components/intro-animation/scenes/scene03";
import Scene04 from "../../components/intro-animation/scenes/scene04";
import Scene05 from "../../components/intro-animation/scenes/scene05";
import Scene06 from "../../components/intro-animation/scenes/scene06";
import Scene07 from "../../components/intro-animation/scenes/scene07";
import Scene08 from "../../components/intro-animation/scenes/scene08";
import Router from "next/router";
import MenuCursor from "../../components/custom-cursor/menu-cursor/floating-around";

export default function Test() {
    const redirect = () => {
        Router.push('/title');
    }
    return (
        <>
            <button onClick={() => redirect()}>Redirect here</button>
        </>
    )
}
