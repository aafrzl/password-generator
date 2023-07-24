function generatePasswords() {
  const length = document.getElementById('length').value;
  const useSymbolsNumbers = document.getElementById('useSymbolsNumbers').checked;

  const resultContainer = document.querySelector('.result-container');
  const info = document.querySelector('.info');
  info.style.display = 'block';
  resultContainer.style.display = 'flex';

  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (useSymbolsNumbers) {
    characters += '0123456789~`!@#$%^&*()_+-={}[],|:;<>.?';
  }

  const passwordsContainer = document.getElementById('passwords');
  passwordsContainer.innerHTML = '';

  for (let i = 0; i < 2; i++) {
    let password = generatePassword(length, characters);
    let passwordElement = document.createElement('div');
    passwordElement.textContent = password;
    passwordElement.id = 'password';
    passwordElement.addEventListener('click', () => copyToClipboard(password));
    passwordsContainer.appendChild(passwordElement);
  }
}

function generatePassword(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


//copy to clipboard
function copyToClipboard(text) {
  const alertCopy = document.getElementById('alert-copy');
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alertCopy.textContent = 'Copied to clipboard!';
  alertCopy.style.display = 'block';
  setTimeout(() => {
    alertCopy.style.display = 'none';
  }, 1000);
}

//validation when input can't over to 15
//change value to 15 if input over 15
//change value to 6 if input under 6
document.getElementById('length').addEventListener('change', function () {
  if (this.value > 15) {
    this.value = 15;
  } else if (this.value < 6) {
    this.value = 6;
  }
});