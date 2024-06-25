import styles from "@/pages/mainPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo_link.svg";
export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.logoBox}>
        <Image src={logo} alt="logo" width={48} height={48} />
        <Link href="/" className={styles.logo}>
          Epigram
        </Link>
      </div>
      <div className={styles.introductionFrame}>
        <h1>
          나만 갖고 있기엔
          <br /> 아까운 글이 있지 않나요?
        </h1>
        <p>다른 사람들과 감정을 공유해 보세요.</p>
        <Link href="/signIn">
          <button className={styles.mainButton}>시작하기</button>
        </Link>
      </div>
    </main>
  );
}
