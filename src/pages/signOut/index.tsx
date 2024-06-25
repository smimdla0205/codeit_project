import SignOutBox from "@/page-layout/signOutBox";
import styles from "@/pages/signOut/signIn.module.scss";

export default function signOut() {
  return (
    <main className={styles.signOutContainer}>
      <SignOutBox />
    </main>
  );
}
