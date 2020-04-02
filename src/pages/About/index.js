import React from 'react';
import Content from '../../components/Content';
import Main from '../../Layout/Main';

const About = () => {
  const aboutMe = `Experienced Software Engineer with a demonstrated history of working in the 
                    E-commerce industry. Skilled in Web development, Software and Mobile Development, 
                    and Front End Engineering Design (FEED). 
                    Strong engineering professional with a Bachelor's degree focused in Computer Science and Informatics 
                    from University of Johannesburg. `;

  return (
    <Main>
      <Content title="About" moreText={aboutMe} />
    </Main>
  );
};

export default About;
