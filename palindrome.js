// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise
function isPalindrome(str) {
  const processedContent = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = reverseString(processedContent);
  return processedContent === reversed;
}
