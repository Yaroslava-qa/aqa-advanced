function handleNum(number, callbackParne, callbackNeParne) {
  
    if (number % 2 === 0) {
      callbackParne(number);
    } else {
      callbackNeParne(number);
    }
  }
  const handleEven = (num) => console.log(`${num} - number is even`);
  const handleOdd = (num) => console.log(`${num} - number is odd`);
  handleNum(6, handleEven, handleOdd);
  handleNum(3, handleEven, handleOdd); 
