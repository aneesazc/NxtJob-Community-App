"use client";
import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div animate={{ x: 100 }} transition={{ duration: 0.5 }}>
      Hello, world!
    </motion.div>
  );
}

export default MyComponent;
