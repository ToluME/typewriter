const delayEach = function(sentence, delay) {
  const characters = sentence.split('');
  let eachDelay = delay;
  for (const char of characters) {
    setTimeout(() => {
      process.stdout.write(char + '\n');
    }, eachDelay);

    eachDelay += delay + 50;
        
  }
};

const sentence = "hello there from lighthouse labs";
const setDelay = 200;

delayEach(sentence, setDelay);