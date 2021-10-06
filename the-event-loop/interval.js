let count = 3;

const logCount = () => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
};

const intervalID = setInterval(logCount, 1000);
