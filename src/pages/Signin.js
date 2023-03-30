const Signin = () => {
  return (
    <div>
      <h1>로그인</h1>

      <form>
        <label for='email'>이메일</label>
        <input
          data-testid='email-input'
          id='email'
          type='email'
          placeholder='이메일을 입력해주세요.'
          required
        />
        <label for='password'>비밀번호</label>
        <input
          data-testid='password-input'
          id='password'
          type='password'
          minlength='8'
          placeholder='8자리 이상 비밀번호를 입력해주세요.'
          required
        />

        <input data-testid='signin-button' type='submit' value='로그인' />
      </form>
      <h5>아직 회원이 아니신가요?</h5>
      <button data-testid='signup-button'>가입하기</button>
    </div>
  );
};

export default Signin;
