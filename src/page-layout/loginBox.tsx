import logo from "../../public/img/logo_link.svg";
import kakao from "../../public/img/logo_kakao.svg";
import naver from "../../public/img/logo_naver.svg";
import google from "../../public/img/logo_google.svg";
import SignInForm from "@/page-layout/signInForm";
import styles from "@/page-layout/loginBox.module.scss";
import Image from "next/image";
import Link from "next/link";

function loginBox() {
  return (
    <div className={styles.loginBoxContainer}>
      <div className={styles.logoBox}>
        <Image src={logo} alt="logo" width={48} height={48} />
        <Link href="/" className={styles.logo}>
          Epigram
        </Link>
      </div>
      <div>
        <SignInForm />
        <div className={styles.signInMessage}>
          <p>회원이 아니신가요?</p>
          <Link href="/signOut" className={styles.signOutLink}>
            가입하기
          </Link>
        </div>
      </div>
      <div className={styles.socialLink}>
        <Image src={naver} alt="naver" width={60} height={60} />
        <Image src={google} alt="google" width={60} height={60} />
        <Image src={kakao} alt="kakao" width={60} height={60} />
      </div>
    </div>
  );
}
export default loginBox;
