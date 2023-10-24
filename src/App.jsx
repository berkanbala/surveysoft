import styles from "./App.module.scss";
import { Survey } from "./components/survey/survey";

function App() {
  return (
    <div className={styles.container}>
      <Survey />
    </div>
  );
}

export default App;
