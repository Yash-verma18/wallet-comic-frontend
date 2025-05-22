import { motion } from 'framer-motion';

export default function WowComic() {
  return (
    <motion.img
      src='/wow.svg'
      alt='Wow Comic'
      initial={{ scale: 0.1, rotate: 15, opacity: 0 }}
      animate={{ scale: 0.5, rotate: -30, opacity: 1 }}
      transition={{ duration: 2, ease: 'backOut' }}
      style={{
        width: '300px',
        height: 'auto',
        position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
