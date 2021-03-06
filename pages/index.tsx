import { useReducer, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AppRoutes } from "../utils/app-routes";

const IntroAnimation = dynamic(
  () => import("../components/intro-animation/intro-animation"),
  { ssr: false }
);

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Index() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <IntroAnimation />;
}
