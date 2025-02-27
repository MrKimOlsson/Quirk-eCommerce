import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/hero.scss';

// Import images directly
import heroImage1 from '../assets/hero/1.jpg';
import heroImage2 from '../assets/hero/2.jpg';
import heroImage3 from '../assets/hero/3.jpg';
import heroImage4 from '../assets/hero/4.jpg';

// Create an array with the imported images
const images = [heroImage1, heroImage2, heroImage3, heroImage4];

interface HeroProps {
  imageIndex: number,
  text: string,
}

const Hero = ({ imageIndex, text }: HeroProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (imageIndex >= 0 && imageIndex < images.length) {
      const selectedImage = images[imageIndex];
      setImageUrl(selectedImage);
    } else {
      console.error('Image index out of bounds');
    }
  }, [imageIndex]);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        controls.start({
          margin: '0 10% 0rem 10%',
          borderRadius: '20px',
          transition: { duration: 1 },
        });
      } else {
        controls.start({
          margin: '0px',
          borderRadius: '0px',
          transition: { duration: 1 },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className={`hero ${imageUrl ? 'has-background' : ''}`}
      animate={controls}
      initial={{
        borderRadius: '0px',
        margin: '0px',
      }}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
      }}
    >
      <div className="hero-content">
        <div className='row'>
            <p className='hero-text'>{text}</p>

        </div>
        <div className='hero-logo'>
            <h1>Q<span>u</span></h1><h1 className='i'>i</h1><h1 className='under-line'>rk</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;