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

  h5 {
    font-size: 12px;
  }

  a {
    color: #3466ff;
    margin-left: 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Form__row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-right: 20px;
  }

  input {
    width: 280px;
    padding: 10px;
    border: 1px solid #dadce0;
    border-radius: 5px;
    font-size: 14px;
    &:focus {
      outline: none;
      background-color: #f2f5ff;
    }
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  color: #3466ff;
  background-color: #fff;
  border: 1px solid #3466ff;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  &:active {
    color: #fff;
    background-color: #3466ff;
    border: none;
  }
`;

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API_URL = 'https://pre-onboarding-selection-task.shop';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/signup`, {
        email,
        password,
      });

      // const {} = response.data;
      // localStorage.setItem('token', token);

      // Redirect to dashboard or home page
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit}>
        <Form__row>
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
        </Form__row>
        <Form__row>
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
        </Form__row>

        {error && <div>{error}</div>}
        <StyledButton type='submit'>가입하기</StyledButton>
      </form>
      <h5>
        이미 회원이신가요?
        <a href='#' data-testid='signup-button'>
          로그인하기
        </a>
      </h5>
    </Wrapper>
  );
};

export default Signin;
