import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1>THIS IS A HOME PAGE and the user is:{username}</h1>;
};
