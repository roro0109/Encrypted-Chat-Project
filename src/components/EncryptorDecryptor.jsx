const crypto = require('crypto');

export function encrypt(message, password) {
  const cipher = crypto.createCipher('aes-256-cbc', password);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(encryptedMessage, password) {
  const decipher = crypto.createDecipher('aes-256-cbc', password);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
/*export function encrypt(message, shift) {
    shift = shift % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (!(letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z')) {
        encryptedMessage += letter;
        continue;
      }
      const index = alphabet.indexOf(letter.toLowerCase());
      let newIndex = index + shift;
      if (newIndex > 25) newIndex -= 26;
      if (newIndex < 0) newIndex += 26;
      if (letter === letter.toUpperCase()) {
        encryptedMessage += alphabet[newIndex].toUpperCase();
      } else {
        encryptedMessage += alphabet[newIndex];
      }
    }
    return encryptedMessage;
  }
  
export function decrypt(encryptedMessage, shift) {
    shift = shift % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let decryptedMessage = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i];
      if (!(letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z')) {
        decryptedMessage += letter;
        continue;
      }
      const index = alphabet.indexOf(letter.toLowerCase());
      let newIndex = index - shift;
      if (newIndex > 25) newIndex -= 26;
      if (newIndex < 0) newIndex += 26;
      if (letter === letter.toUpperCase()) {
        decryptedMessage += alphabet[newIndex].toUpperCase();
      } else {
        decryptedMessage += alphabet[newIndex];
      }
    }
    return decryptedMessage;
  }*/