import { NextPage } from "next";
import styles from "./HomePage.module.scss";


const HomePage: NextPage = () => {
  return (
    <div
      className={ styles.home }
    >
      HomePage works!
    </div>
  )
}

export default HomePage;