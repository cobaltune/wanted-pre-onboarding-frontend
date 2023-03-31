import React from 'react';
import styled from 'styled-components';

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

const Form = styled.div`
  display: flex;
  flex-direction: column;
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
  /* color: #dadce0;
  background-color: #f2f5ff; */
  color: #fff;
  background-color: #3466ff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;

  /* &:hover {
    color: #fff;
    background-color: #3466ff;
  } */
`;

const Signin = () => {
  return (
    <Wrapper>
      <Title>로그인</Title>

      <Form>
        <Form__row>
          <Label for='email'>이메일</Label>
          <StyledInput
            data-testid='email-input'
            id='email'
            type='email'
            placeholder='이메일을 입력해주세요.'
            required
          />
        </Form__row>
        <Form__row>
          <Label for='password'>비밀번호</Label>
          <StyledInput
            data-testid='password-input'
            id='password'
            type='password'
            minlength='8'
            placeholder='8자리 이상 비밀번호를 입력해주세요.'
            required
          />
        </Form__row>

        <StyledButton data-testid='signin-button' type='submit'>
          로그인
        </StyledButton>
      </Form>
      <h5>아직 회원이 아니신가요?</h5>
      <button data-testid='signup-button'>가입하기</button>
    </Wrapper>
  );
};

export default Signin;
