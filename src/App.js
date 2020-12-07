
import './App.scss';
import { useState, useEffect } from 'react';
import Header from "./components/shared/main/header/Header";
import Main from "./components/shared/main/main/Main";
import Footer from "./components/shared/main/footer/Footer";

import Particles from "react-tsparticles";

function App() {

  //State
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setIsMobile(true)
    }
    if (window.innerWidth > 768) {
      document.querySelector('.icon-wrapper').classList.remove('active')
    } else {
      setIsMobile(false)
    }
  }

  //Component did mount
  useEffect(() => {
    window.addEventListener('resize', handleResize);

     //Component Will Unmount
     return () => {
      window.removeEventListener('resize', handleResize)
    };
  },[])

  return (
    <div className="App">
      {!isMobile ? (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#333333', // particles-color
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true,
                },
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 3,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 2.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              links: {
                enable: true,
                distance: 160,
                color: '#333333', // links-color
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5, // particles-speed
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: '#ffffff', // background-color
              image: '',
              position: '50% 50%',
              repeat: 'no-repeat',
              size: 'cover',
            },
          }}
        />
      ) : null}
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
