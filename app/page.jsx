import Hero from './components/hero';
import TesComponent from './components/testComponent';
import Titles from './components/titles';

export default function Home() {
  return (
    <main>
      <TesComponent />
      <Hero />
      <Titles type={'title'} title={'Trending'} />
      <Titles type={'trailer'} title={'Latest Trailers'} bg={false} />
      <Titles type={'title'} title={"What's Popular"} />
    </main>
  );
}
