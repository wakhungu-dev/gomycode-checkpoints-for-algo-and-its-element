function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Define the set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
    // Variable to track if we are in a word
    let inWord = false;
  
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      length++;  // Increment length for each character
  
      // Check if the character is a vowel
      if (vowels.has(char)) {
        vowelCount++;
      }
  
      // Check if the character is a space or the period at the end of the sentence
      if (char === ' ' || char === '.') {
        if (inWord) {
          wordCount++;
          inWord = false;
        }
      } else {
        inWord = true;
      }
  
      // Stop counting if we reach the period at the end of the sentence
      if (char === '.') {
        break;
      }
    }
  
    // Output the results
    console.log("Length of the sentence:", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
  }
  
  // Example usage
  const sentence = "This is an example sentence.";
  analyzeSentence(sentence);
  