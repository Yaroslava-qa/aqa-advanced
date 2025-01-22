function handleNum(number, callbackEven, callbackOdd) {
    if (number % 2 === 0) {
      callbackEven();
    } else {
      callbackOdd();
    }
  }
  const handleEven = () => {
    console.log('number is even');
  };
  
  const handleOdd = () => {
    console.log('number is odd');
  };
  handleNum(4, handleEven, handleOdd); 
  handleNum(3, handleEven, handleOdd)