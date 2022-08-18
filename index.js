const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(topic => {
    const names = topic.split(' ');
    const capitalWords =
      names.map(letters => letters.charAt(0).toUpperCase() + letters.slice(1));
    const newTopic = capitalWords.join(' ');
    return newTopic;
  });
}

