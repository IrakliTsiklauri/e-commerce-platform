import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <Form>
        <InputDiv>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" />
        </InputDiv>
        <InputDiv>
          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" />
        </InputDiv>
        <InputDiv>
          <label>Message</label>
          <Textarea name="message" placeholder="Your Message"></Textarea>
        </InputDiv>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  width: 400px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;

  label {
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #e7e2e2;
    font-size: 18px;
    outline-color: #18db18;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #e7e2e2;
  font-size: 18px;
  outline-color: #18db18;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 126, 27, 1);

  &:hover {
    cursor: pointer;
    background-color: #f49a56;
  }
`;
