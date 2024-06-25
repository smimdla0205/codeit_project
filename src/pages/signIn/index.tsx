import LoginBox from "@/page-layout/loginBox";
import styles from "@/pages/signIn/signIn.module.scss";

export default function Home() {
  return (
    <main className={styles.signInContainer}>
      <LoginBox />
    </main>
  );
}
