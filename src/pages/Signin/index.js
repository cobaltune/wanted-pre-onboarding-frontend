import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const APIURL = 'https://pre-onboarding-selection-task.shop';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${APIURL}/auth/signin`, {
        email,
        password,
      });
      console.log(response);
      // const { } = response.data;
      // localStorage.setItem('token', token);
      // Redirect to dashboard or home page
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>이메일</label>
          <input
            data-testid='email-input'
            type='email'
            pattern='[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*'
            placeholder='이메일을 입력해주세요.'
            required
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>비밀번호</label>
          <input
            data-testid='password-input'
            type='password'
            minLength={8}
            placeholder='8자리 이상 비밀번호를 입력해주세요.'
            required
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div>{error}</div>}
        <button type='submit'>로그인</button>
      </form>
      <h5>아직 회원이 아니신가요?</h5>
      <button data-testid='signup-button'>가입하기</button>
    </Wrapper>
  );
};

export default Signin;
