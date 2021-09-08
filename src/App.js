
import './App.css';
import myWonderfulImage from './imageInSrc.jpg';
import './style.css'

function App() {
  return (
    <div>
      <div style={{ border: 'solid 1 black', maxWidth: '100vw' }}>

        <h1 class="title red">My name is khaled</h1>

        <br />
        <div className="kh">

          <img src={myWonderfulImage} style={{ width: 500, height: 300 }} />


          <br />

          <img src="/imageInPublic.jpg" style={{ width: 500, height: 300 }} />

        </div>

      </div>

      <video width={320} height={240} controls>

        <source src="myVideo.mp4" type="video/mp4" ></source>

      </video>
    </div>

  );
}

export default App;
