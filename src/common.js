export const capitalize = (str) => {
  // split the string into an array of words
  const words = str.split(' ')

  // iterate through each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    // capitalize the first letter of the word
    word = word.charAt(0).toUpperCase() + word.slice(1)

    // put the capitalized word back into the array
    words[i] = word
  }

  // join the array back into a string
  const capitalizedStr = words.join(' ')

  // return the capitalized string
  return capitalizedStr
}
