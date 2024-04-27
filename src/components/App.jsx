import styles from "../styles/App.module.css";
import { Form } from "./Form";

export const App = () => {
  return (
    <main className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Learn to code by watching others</h1>
        <p className={styles.description}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <Form />
    </main>
  );
};
