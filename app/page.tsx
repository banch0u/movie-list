import Hero from './components/hero';
import Titles from './components/titles';

export default function Home() {
  return (
    <main>
      <Hero />
      <Titles type={'title'} title={'Trending'} />
      <Titles type={'trailer'} title={'Latest Trailers'} bg={false} />
      <Titles type={'title'} title={"What's Popular"} />
    </main>
  );
}
