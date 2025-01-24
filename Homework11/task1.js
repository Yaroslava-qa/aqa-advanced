function delayedPrint(text, milliseconds) {
    setTimeout(() => {
      console.log(text)
    }, milliseconds)
  }
  delayedPrint("Ahoj", 50)