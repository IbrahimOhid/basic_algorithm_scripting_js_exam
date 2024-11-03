function reverseString(str) {
    const text = str.split('').reverse().join('');
    return text;
  }
  
  console.log(reverseString("hello"));