import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import Input from "@/common/components/input";
import styles from "@/page-layout/signInForm.module.scss";

interface LoginFormInputs {
  email: string;
  password: string;
}

function SignInForm() {
  const methods = useForm<LoginFormInputs>();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data: LoginFormInputs) => {
    if (data.email === "test@test.com" && data.password === "password") {
      setLoginError("");
      // 로그인 성공 시의 로직을 추가합니다.
    } else {
      setLoginError("아이디 또는 비밀번호를 잘못 입력했습니다.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.signInForm}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="이메일"
          validation={{
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "올바른 이메일을 입력해주세요",
            },
          }}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          validation={{
            required: "비밀번호를 입력해주세요",
          }}
        />
        {loginError && <p className={styles.errorMessage}>{loginError}</p>}
        <div>
          <button type="submit" className={styles.loginButton}>
            로그인
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default SignInForm;
