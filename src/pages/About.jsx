import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutSection>
      <AboutUs>
        <h3>About Us</h3>
        <p>
          Welcome to "Famili Style" – your ultimate destination for
          fashion-forward clothing for men, women, and children. At "Famili
          Style", we believe that style is an expression of individuality and
          should be accessible to everyone, regardless of age or gender.
        </p>
      </AboutUs>
      <Story>
        <h3>Our Story</h3>
        <p>
          Founded in 2024, "Famili Style" began with a simple mission: to
          provide high-quality, trendy, and affordable clothing for the entire
          family. Our journey started with a small collection of carefully
          curated pieces, and today, we are proud to offer a wide range of
          styles that cater to diverse tastes and preferences.
        </p>
      </Story>
      <OurValues>
        <h3>Our Values</h3>
        <ul>
          <li>
            Quality: We are committed to offering products that are crafted with
            care, using high-quality materials that ensure comfort and
            durability.
          </li>
          <li>
            Affordability: Fashion should not come at a high price. We strive to
            provide stylish clothing at prices that are accessible to everyone.
          </li>
          <li>
            Diversity: Our collections are designed to celebrate individuality
            and diversity. Whether you’re looking for casual wear, formal
            attire, or something in between, you’ll find it here.
          </li>
          <li>
            Sustainability: We are dedicated to making a positive impact on the
            environment. Our sustainable practices include eco-friendly
            materials and responsible production processes.
          </li>
        </ul>
      </OurValues>

      <OurCollection>
        <h3>Our Collection</h3>
        <h4>Our extensive collection includes:</h4>
        <ul>
          <li>
            Men’s Clothing: From classic suits to casual wear, discover the
            latest trends in men’s fashion.
          </li>
          <li>
            Women’s Clothing: Explore a wide range of styles, from elegant
            dresses to everyday essentials.
          </li>
          <li>
            Kids’ Clothing: Find adorable and comfortable outfits for children
            of all ages.
          </li>
        </ul>
      </OurCollection>
      <ShopWithUs>
        <h3>Why Shop With Us?</h3>
        <p>
          At "Family Style", customer satisfaction is our top priority. We offer
          a seamless shopping experience with easy navigation, secure payment
          options, and reliable customer support. Our dedicated team is here to
          assist you with any questions or concerns, ensuring that you have a
          pleasant shopping experience every time you visit our site.
        </p>
      </ShopWithUs>
      <ThanksLetter>
        <p>
          Thank you for choosing "Family Story". We look forward to helping you
          express your unique style with our diverse and stylish collections.
        </p>
      </ThanksLetter>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 40px;
`;

const AboutUs = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid grey;

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 22px;
    font-weight: 400;
  }
`;

const Story = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid grey;

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 22px;
    font-weight: 400;
  }
`;

const OurValues = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid grey;

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  li {
    font-size: 22px;
    font-weight: 400;
  }
`;

const OurCollection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid grey;

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  li {
    font-size: 22px;
    font-weight: 400;
  }
`;

const ShopWithUs = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid grey;

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 22px;
    font-weight: 400;
  }
`;

const ThanksLetter = styled.div`
  width: 60%;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  padding: 20px;
`;
