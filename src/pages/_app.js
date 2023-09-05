import '../styles/globals.css';
import Cursor from '../components/cursor';
import { motion, AnimatePresence } from "framer-motion";


export default function App({ Component, pageProps, router }) {
    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    };


  return (
    <>
    <AnimatePresence mode='wait'>
          <motion.div key={router.pathname}>
            <Component {...pageProps}/>
            <motion.div
            className='slide-in'
            initial= {{scaleY: 0}}
            animate= {{scaleY: 0}}
            exit= {{scaleY: 1}}
            transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
          />
          <motion.div
            className='slide-out'
            initial= {{scaleY: 1}}
            animate= {{scaleY: 0}}
            exit= {{scaleY: 0}}
            transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}
          />
          </motion.div>


    </AnimatePresence>
    </>
  );
  }
  