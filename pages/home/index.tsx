import { NextPage } from "next";

import Header from '../../components/Header';

import styles from "./HomePage.module.scss";


const HomePage: NextPage = () => {
  return (
    <div
      className={ styles.home }
    >
      <Header />
    </div>
  )
}

export default HomePage;