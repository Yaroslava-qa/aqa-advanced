function divide(numerator, denominator) {
    if (denominator === 0) {
      ('Деномінатор не може дорівнювати 0');
    }
    if (numerator !== 'number' || denominator !== 'number') {
        ('Обидва аргументи мають бути числами');
      }
    return numerator/denominator;
  }
  try {
    console.log(divide(8, 2)); 
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Робота завершена');
  } 
  try {
    console.log(divide(20, 0)); 
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Робота завершена');
  } 
  try {
    console.log(divide(6, 'a')); 
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Робота завершена');
  }
  