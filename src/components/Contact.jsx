import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  width: 100%;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #1a1a1a;
  transition: background 0.3s ease-out;
  &:hover {
    background: white;
  }
`;

const GifImage = styled.img`
  width: 40vw;
  height: 33vh;
  border-radius: 10px;
  background: white;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background: #f39c12;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #e67e22;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_jkaz3m1', // Replace with your EmailJS service ID
      'template_eoi9y3g', // Replace with your EmailJS template ID
      formData,
      'epoCtn2zEOyh2t5Jk' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Me!!!</ContactTitle>
      <ContactContent>
        <GifContainer>
          <GifImage src="/image-processing20200519-5690--unscreen.gif" alt="Contact GIF" />
        </GifContainer>
        <ContactForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></TextArea>
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
