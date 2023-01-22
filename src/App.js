import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Info from './components/Info/Info.tsx';
import Navbar from './components/Navbar/Navbar';
import Social from './components/Social/Social';
import global from './styles/global.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className='section' id='home'>
        <Grid first={true}/>
      </section>
      <section className='section' id='bio'>
        <Info/>
      </section>
      <section className='section' id='portfolio'>
        <Grid first={false}/>
      </section>
      <section className='section' id='social'>
        <Social direction={"horizontal"} />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
