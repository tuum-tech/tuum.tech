import React, { useEffect } from 'react';

import JobCareer from './components/JobCareer';
import {
  Footer,
  Navbar,
  Section,
  ContentContainer,
} from '../../components/layout';
import SectionBgImg from '../../assets/img/backgrounds/sectionbg.png';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main
        style={{
          background: '#FAFAFA',
        }}
      >
        <Section
          containerStyle={{
            background: `url(${SectionBgImg})`,
          }}
          padding='138px 2rem 0'
          bgColor='rgb(76, 111, 255, .8)'
          maxWidth='960px'
        >
          <ContentContainer style={{ paddingBottom: '40px' }}>
            <JobCareer
              title='Product Engineer'
              location={{
                area: 'Northern Virginia and DC Area (Preferred)',
                isRemote: true,
              }}
              intro='FRONTEND DEVELOPMENT / FULL-TIME'
              showWhatIsProfile={true}
              dayToday={[
                'Bring to life well-tested, polished user experiences and features using modern, component based frameworks like React, TypeScript, and GraphQL.',
                'Be ready to meet quick deadlines with rapid development of simple and easy to use experiences.',
                'Become a leader in the prioritization, planning, and execution of product features from the design and specifications to live deployments.',
                'Act as a driving force for innovation and motivator for the engineering team.',
                'Bring positive energy and new ideas to the team.',
              ]}
              skills={[
                'Past experience building products and leading the planning and execution of a complex, modern web application based on React/Typescript.',
                'Past experience being a leader of a web engineering team.',
                'Past experience displaying a strong understanding of design and ability to navigate design tools like Figma as well as rapid prototyping approaches that balance pixel-perfect UI with production-ready code.',
                'Familiarity with product and engineering management approaches including experience with sprint planning, and front-end architecture design.',
                'Ambition to lead the development of a brand new web3 social platform.',
                'Ability to write high quality, well tested code with a knack for follow through on design and performance improvements through consistent iteration.',
                'Familiar with current trends and best practices in front-end architecture, including performance, security and component design patterns.',
              ]}
              extras={[
                'Can begin immediately',
                'Experience in web3',
                'Experience working across product, design and engineering',
              ]}
            />

            <JobCareer
              title='Product Engineer'
              location={{
                area: 'Northern Virginia and DC Area (Preferred)',
                isRemote: true,
              }}
              intro='BACKEND DEVELOPMENT / FULL-TIME'
              showWhatIsProfile={true}
              dayToday={[
                'Build our scalable, identity and web3 social infrastructure using modern backend engineering and deployment tools.',
                'Be ready to meet quick deadlines with rapid development of simple and easy to use experiences.',
                'Architect, plan, and develop critical infrastructure features for our social platform.',
                'Become a leader for architecture and requirements of critical backend infrastructure, helping product and engineering take ideas from concept or pain point through planning, implementation, and launch.',
                'Act as a driving force for innovation and motivator for the engineering team through positive energy and new ideas.',
              ]}
              skills={[
                '3+ years building and managing the lifecycle for critical backend infrastructure.',
                'Experience with Node.js, Typescript, Amazon Web Services, and Github Actions.',
                'Strong written and verbal communication skills with the ability to communicate complex issues to bring clarity and resolution to ambiguous challenges.',
                'Ability to collaborate with internal and external stakeholders in a positive and motivating manner and help champion technical solutions to problems.',
                'Ambition to lead the development of a brand new web3 social platform.',
              ]}
              extras={['Can begin immediately', 'Experience in web3']}
            />

            <JobCareer
              title='Partnerships & Business Development'
              location={{
                area: 'Eastern NC (Preferred)',
                isRemote: true,
              }}
              intro='OPERATIONS / PART-TIME'
              showWhatIsProfile={true}
              dayToday={[
                'Establish and develop durable, long term relationships with creators, DAOs, NFT communities, and partners.',
                'Join Twitter Spaces, Clubhouse events, AMAs, and other community events to become familiar with each web3 community.',
                'Own the onboarding process with creators, communities and brands, acting as the primary point of contact.',
                'Bring home opportunities from the first pitch through negotiation and onboarding.',
                'Lead monthly strategy meetings reviewing progress and sharing new opportunities.',
                'Identify, develop, and lead new initiatives focused on platform growth.',
                'Attract amazing talent.',
              ]}
              skills={[
                'Strong communication and organizational skills.',
                'Passion for the creator economy and judgement necessary to lead in this space.',
                'Someone who understands culture.',
                'Ability to quickly establish trust and build deep relationships.',
                'Comfort in speaking publicly and ability to clearly communicate complex ideas.',
                'Ability to write high quality, well tested code with a knack for follow through on design and performance improvements through consistent iteration.',
                'Utilize data to provide insights.',
              ]}
              extras={[
                'Can begin immediately',
                'Experience in web3',
                'Bring a good vibe',
                'Active NFT holder or creator',
              ]}
            />
          </ContentContainer>
        </Section>
        <Footer />
      </main>
    </>
  );
};

export default CareersPage;
