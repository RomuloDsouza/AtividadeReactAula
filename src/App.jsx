import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { Sidebar } from "./components/Sidebar";
import "./Global.styles.css";
import styles from "../src/components/App.module.css";
import { Comments } from "./components/Comments";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />

          <main>
            <Posts />

            <Posts />

            <Comments />
            <Comments />
            <Comments />
           


          </main>
        </div>
        
      </div>
    </>
  );
}

export default App;
