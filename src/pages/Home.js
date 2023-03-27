import '../App.css';
import Title from '../components/Title';
import Content from '../components/Content';
import Subtitle from '../components/Subtitle';
import CodeSvgGrid from '../components/CodeSvgGrid';
import ContactSvgGrid from '../components/ContactSvgGrid';

function Home() {
  return (
    <div className='bg-[#E9E9E9] w-screen h-screen'>
      <Title></Title>
      <Content text="Web Application Development, Software Engineering, Football, Gym"></Content>
      <Subtitle text="Code"></Subtitle>
      <CodeSvgGrid></CodeSvgGrid>
      <Subtitle text="Contact"></Subtitle>
      <ContactSvgGrid></ContactSvgGrid>
      <Subtitle text="Galatians 6:7"></Subtitle>
      <Content text='"Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap."'></Content>
    </div>
  )
}

export default Home;
