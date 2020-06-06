import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useReducer} from "react";
import IntroAnimation from "../components/intro-animation/intro-animation";
import {useGlobal} from "../store/Global/GlobalContext";



const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export default function Index() {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Layout home>
            <IntroAnimation />
        </Layout>
    )
}
