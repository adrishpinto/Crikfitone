import React, { useEffect } from "react";

export default function TextAnimation() {
  useEffect(() => {
    var words = document.getElementsByClassName("word");
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw =
        currentWord === wordArray.length - 1
          ? wordArray[0]
          : wordArray[currentWord + 1];

      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = "letter behind";
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(() => {
        cw[i].className = "letter out";
      }, i * 80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(() => {
        nw[i].className = "letter in";
      }, 340 + i * 80);
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = "";
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement("span");
        letter.className = "letter";
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArray.push(letters);
    }

    // Start animation
    changeWord();
    const intervalId = setInterval(changeWord, 4000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text top-0">
      <p className="text-[100px] uppercase font-semibold">
        <span className="word wisteria">Crikfitone</span>
        <span className="word belize">Sports</span>
        <span className="word pomegranate">Yoga</span>
      </p>
    </div>
  );
}
