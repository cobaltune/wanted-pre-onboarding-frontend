import React, { useState } from 'react';
import styled from 'styled-components';

import jwtDecode, { JwtPayload } from 'jwt-decode';

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

const Form__row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.h4`
  font-size: 14px;
  margin-right: 20px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #dadce0;
  border-radius: 5px;
  font-size: 14px;

  &:focus {
    outline: none;
    background-color: #f2f5ff;
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

  &:hover {
    color: #fff;
    background-color: #3466ff;
    border: none;
  }
`;

const Signin = () => {
  const jwt_decode = require('jwt-decode');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://pre-onboarding-selection-task.shop/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('jwtToken', token);
      const decoded = jwt_decode(token);
      console.log(decoded);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <Form__row>
          <Label>
            이메일
            <StyledInput
              data-testid='email-input'
              type='email'
              placeholder='이메일을 입력해주세요.'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
        </Form__row>
        <Form__row>
          <Label>
            비밀번호
            <StyledInput
              data-testid='password-input'
              type='password'
              minlength='8'
              placeholder='8자리 이상 비밀번호를 입력해주세요.'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
        </Form__row>
        {error && <p>{error}</p>}
        <StyledButton
          data-testid='signin-button'
          type='submit'
          disabled={setError}
        >
          로그인
        </StyledButton>
      </form>

      <h5>아직 회원이 아니신가요?</h5>
      <button data-testid='signup-button'>가입하기</button>
    </Wrapper>
  );
};

export default Signin;
