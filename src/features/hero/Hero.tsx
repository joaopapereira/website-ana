import React from 'react';
import './Hero.module.css';
import Typed from 'typed.js';

export function Hero() {
    const el = React.useRef(null);
    React.useEffect(() => {

        const typed = new Typed(el.current, {
          strings: ['NIH Expert', 'Grants Manager', 'Project Consultant - SBIR', 'STTR'],
          typeSpeed: 50,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Ana Mesquita</h1>
                <p>I'm <span ref={el}></span></p>
            </div>
        </section>
    )
}