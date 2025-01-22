import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  typingSpeed?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typingSpeed = 100,
  loop = false,
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete && !loop) return;
    
    const currentWord = words[wordIndex];
    
    if (text === currentWord) {
      if (loop) {
        const timeout = setTimeout(() => {
          setText('');
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
        return;
      }
    }

    const timeout = setTimeout(() => {
      setText(currentWord.slice(0, text.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, words, typingSpeed, loop, isComplete]);

  return text;
}