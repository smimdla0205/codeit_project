import React, {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import Input from "@/common/components/input";
import styles from "@/page-layout/signOutForm.module.scss";

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

function SignUpForm() {
  const methods = useForm<SignUpFormInputs>();
  const [signUpError, setSignUpError] = useState("");

  const onSubmit = (data: SignUpFormInputs) => {
    if (data.password !== data.confirmPassword) {
      setSignUpError("비밀번호가 일치하지 않습니다.");
    } else {
      setSignUpError("");
      // 회원가입 성공 시의 로직을 추가합니다.
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.signOutFrom}>
        <Input
          id="email"
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일"
          validation={{
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "올바른 이메일을 입력해주세요",
            },
          }}
        />
        <div className={styles.signOutPassword}>
          <Input
            id="password"
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호"
            validation={{
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                message: "비밀번호는 숫자, 영어, 특수문자를 포함하여 12자 이상 입력해주세요.",
              },
            }}
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            validation={{
              required: "비밀번호 확인을 입력해주세요",
              validate: (value) => value === methods.getValues("password") || "비밀번호가 일치하지 않습니다.",
            }}
          />
          {signUpError && <p>{signUpError}</p>}
        </div>

        <Input
          id="nickname"
          name="닉네임"
          type="text"
          label="닉네임"
          placeholder="닉네임"
          validation={{
            required: "닉네임을 입력해주세요",
          }}
        />
        <div>
          <button type="submit" className={styles.signButton}>
            가입하기
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default SignUpForm;
