import React from 'react';
import styled from 'styled-components';

const Signup = () => {
  return (
    <div>
      <h1>회원가입</h1>

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
      <h5>이미 회원이신가요?</h5>
      <button data-testid='signup-button'>로그인하기</button>
    </div>
  );
};

export default Signup;
