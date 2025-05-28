import React, { useEffect, useRef, useState } from 'react';

const wordsData = [
  { text: 'Tobie.', className: 'wisteria' },
  { text: 'graczach.', className: 'belize' },
  { text: 'bukmacherach.', className: 'pomegranate' },
];

const AnimatedText = () => {
  const wordRefs = useRef([]);
  const [currentWord, setCurrentWord] = useState(0);
  const wordArray = useRef([]);

  useEffect(() => {
    // Split words into letters
    wordRefs.current.forEach((word, i) => {
      const letters = word.innerText.split('').map((char, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.innerText = char;
        word.appendChild(span);
        return span;
      });
      word.innerText = '';
      letters.forEach(letter => word.appendChild(letter));
      wordArray.current.push(letters);
    });

    wordRefs.current[currentWord].style.opacity = 1;

    const interval = setInterval(changeWord, 4000);
    return () => clearInterval(interval);
  }, []);

  const changeWord = () => {
    const cw = wordArray.current[currentWord];
    const nextIndex = currentWord === wordArray.current.length - 1 ? 0 : currentWord + 1;
    const nw = wordArray.current[nextIndex];

    cw.forEach((letter, i) => animateLetterOut(letter, i));
    nw.forEach((letter, i) => {
      letter.className = 'letter behind';
      wordRefs.current[nextIndex].style.opacity = 1;
      animateLetterIn(letter, i);
    });

    setCurrentWord(nextIndex);
  };

  const animateLetterOut = (letter, i) => {
    setTimeout(() => {
      letter.className = 'letter out';
    }, i * 80);
  };

  const animateLetterIn = (letter, i) => {
    setTimeout(() => {
      letter.className = 'letter in';
    }, 340 + i * 80);
  };

  return (
    <div style={styles.body}>
      <div style={styles.text}>
        <p>Z myślą o</p>
        <p>
          {wordsData.map((word, i) => (
            <span
              key={i}
              ref={el => wordRefs.current[i] = el}
              className={`word ${word.className}`}
              style={{ ...styles.word }}
            >
              {word.text}
            </span>
          ))}
        </p>
      </div>
      <style>{css}</style>
    </div>
  );
};

export default AnimatedText;

const styles = {
  body: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600,
    fontSize: '40px',
    height: '100vh',
    position: 'relative',
  },
  text: {
    position: 'absolute',
    width: '600px',
    left: '50%',
    marginLeft: '-225px',
    height: '40px',
    top: '50%',
    marginTop: '-20px',
  },
  word: {
    position: 'absolute',
    opacity: 0,
  },
};

const css = `
@import url('https://fonts.googleapis.com/css?family=Open+Sans:600');

.word {
  position: absolute;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  float: left;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
  color: #8e44ad;
}

.belize {
  color: #2980b9;
}

.pomegranate {
  color: #c0392b;
}
`;
