import logo from './logo.svg';
import './App.css';

import earth from './images/earth.jpg';
import planet from './images/planet.jpg';
import neptune from './images/neptune.jpg';
import uranus from './images/uranus.jpg';

function App() {
  return (
    <div className="theGrid">

      <h1>Cool Planets</h1>

      {/* <div className='marsCollection'>
        <img className='marsFigure' src="https://images-assets.nasa.gov/image/PIA01546/PIA01546~orig.jpg" />
        <img className='marsFigure' src="https://images-assets.nasa.gov/image/PIA00407/PIA00407~small.jpg" />
        <img className='marsFigure' src="https://images-assets.nasa.gov/image/PIA13593/PIA13593~small.jpg" />
        <img className='marsFigure' src="https://images-assets.nasa.gov/image/PIA08528/PIA08528~orig.jpg" />
        <img className='marsFigure' src="https://images-assets.nasa.gov/image/PIA05208/PIA05208~small.jpg" />
      </div> */}
      
      <div className='grid-container'>
        <div className='figure'>
          <img alt='planet' src={earth} />
          <p>This is the Earth. We live on it, and it is absolutely beautiful. The life, the land, and the sea.</p>
        </div>
        <div className='figure'>
          <img alt='planet' src={planet} />
          <p>This is an unknown planet. It looks cold, barren, and full of gasses. Do you think humans could survive here? Stay tuned to find out.</p>
        </div>
        <div className='figure'>
          <img alt='planet' src={neptune} />
          <p>This is Neptune. Named after king Neptune of the Sea. It's stormy and rough. Though people have been known to see mermaids here!</p>
        </div>
        <div className='figure'>
          <img alt='planet' src={uranus} />
          <p>This is Uranus. There have been many inappropriate jokes made about this planet. But it's nothing to laugh at. It's probably one of the most popular planets out there!</p>
        </div>
      </div>

    </div>
  );
}

export default App;
