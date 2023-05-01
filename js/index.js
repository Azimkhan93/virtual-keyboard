const elem = document.body;

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
elem.append(mainContainer);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
mainContainer.append(wrapper);
wrapper.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard project</h1>');

const inputArea = document.createElement('div');
inputArea.className = 'input-area';
wrapper.append(inputArea);
inputArea.insertAdjacentHTML('afterbegin', '<textarea name="" id="" cols="105" rows="10"></textarea>');

const keyboardArea = document.createElement('div');
keyboardArea.className = 'keyboard-area';
wrapper.append(keyboardArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboardArea.append(keyboard);

function createRows(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    keyboard.append(row);
  }
}

createRows(5);
// const firstRowSubChars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];

// function firstRowKeys(num) {
//   const firstRow = document.querySelectorAll('.row')[0];
//   for (let i = 0; i < num; i++) {
//     const key = document.createElement('div');
//     key.classList.add('key');
//     firstRow.insertAdjacentHTML('afterbegin', '<p><sup></sup><sub> </sub></p>');
//   }
// }

const supChars = [
  { key: '~', value: '~' },
  { key: '!', value: '!' },
  { key: '@', value: '@' },
  { key: '#', value: '#' },
  { key: '$', value: '$' },
  { key: '%', value: '%' },
  { key: '^', value: '^' },
  { key: '&', value: '&' },
  { key: '*', value: '*' },
  { key: '(', value: '&#40;' },
  { key: ')', value: '&#41;' },
  { key: '_', value: '_' },
  { key: '+', value: '+' },
];

const subChars = [
  { key: '`', value: '`' },
  { key: '1', value: '1' },
  { key: '2', value: '2' },
  { key: '3', value: '3' },
  { key: '4', value: '4' },
  { key: '5', value: '5' },
  { key: '6', value: '6' },
  { key: '7', value: '7' },
  { key: '8', value: '8' },
  { key: '9', value: '9' },
  { key: '0', value: '0' },
  { key: '-', value: '-' },
  { key: '=', value: '=' },
];

function firstRowFill() {
  const firstRow = document.querySelectorAll('.row')[0];
  for (let i = 0; i < supChars.length; i++) {
    const supElement = document.createElement('sup');
    const subElement = document.createElement('sub');
    const firstKey = supChars[i].key;
    const secondKey = subChars[i].key;
    supElement.innerHTML = firstKey;
    subElement.innerHTML = secondKey;
    const keyBlock = document.createElement('div');
    keyBlock.className = 'key';
    firstRow.append(keyBlock);
    const paragraph = document.createElement('p');
    keyBlock.append(paragraph);
    paragraph.append(supElement, subElement);
  }
  const backspace = document.createElement('div');
  backspace.className = 'key backspace functional';
  backspace.innerText = 'Backspace';
  firstRow.append(backspace);
}

firstRowFill();

const secondRowChars = [
  { key: 'Tab', value: 'Tab' },
  { key: 'q', value: 'q' },
  { key: 'w', value: 'w' },
  { key: 'e', value: 'e' },
  { key: 'r', value: 'r' },
  { key: 't', value: 't' },
  { key: 'y', value: 'y' },
  { key: 'u', value: 'u' },
  { key: 'i', value: 'i' },
  { key: 'o', value: 'o;' },
  { key: 'p', value: 'p;' },
  { key: '&#91;', value: '&#91;' },
  { key: '&#93;', value: '&#93;' },
  { key: '&#92;', value: '&#92;' },
  { key: 'del', value: 'del' },
];

function secondRowFill() {
  const secondRow = document.querySelectorAll('.row')[1];
  for (let i = 0; i < secondRowChars.length; i++) {
    const keyBlock = document.createElement('div');
    const keyChar = secondRowChars[i].key;
    keyBlock.innerHTML = keyChar;
    if (keyChar === 'Tab') {
      keyBlock.className = 'key tab functional';
    } else if (keyChar === 'del') {
      keyBlock.className = 'key del functional';
    } else {
      keyBlock.className = 'key';
    }
    secondRow.append(keyBlock);
  }
}

secondRowFill();

const thirdRowChars = [
  { key: 'Caps Lock', value: 'Caps Lock' },
  { key: 'a', value: 'a' },
  { key: 's', value: 's' },
  { key: 'd', value: 'd' },
  { key: 'f', value: 'f' },
  { key: 'g', value: 'g' },
  { key: 'h', value: 'h' },
  { key: 'j', value: 'j' },
  { key: 'k', value: 'k' },
  { key: 'l', value: 'l;' },
  { key: '&#59;', value: '&#59;' },
  { key: '&#39;', value: '&#39;' },
  { key: 'Enter', value: 'Enter' },
];

function thirdRowFill() {
  const thirdRow = document.querySelectorAll('.row')[2];
  for (let i = 0; i < thirdRowChars.length; i++) {
    const keyBlock = document.createElement('div');
    const keyChar = thirdRowChars[i].key;
    keyBlock.innerHTML = keyChar;
    if (keyChar === 'Caps Lock') {
      keyBlock.className = 'key caps-lock functional';
    } else if (keyChar === 'Enter') {
      keyBlock.className = 'key enter functional';
    } else {
      keyBlock.className = 'key';
    }
    thirdRow.append(keyBlock);
  }
}

thirdRowFill();

const fourthRowChars = [
  { key: 'Shift', value: 'L Shift' },
  { key: 'z', value: 'z' },
  { key: 'x', value: 'x' },
  { key: 'c', value: 'c' },
  { key: 'v', value: 'v' },
  { key: 'b', value: 'b' },
  { key: 'n', value: 'n' },
  { key: 'm', value: 'm' },
  { key: ',', value: ',' },
  { key: '.', value: '.' },
  { key: '&#47;', value: '&#47;' },
  { key: 'key up', value: 'key up' },
  { key: 'Shift', value: 'R Shift' },
];

function fourthRowFill() {
  const fourthRow = document.querySelectorAll('.row')[3];
  for (let i = 0; i < fourthRowChars.length; i++) {
    const keyBlock = document.createElement('div');
    const keyChar = fourthRowChars[i].key;
    if (keyChar === 'key up') {
      keyBlock.innerHTML = '<svg fill="#fff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"/></svg>';
    } else {
      keyBlock.innerHTML = keyChar;
    }
    if (fourthRowChars[i].value === 'L Shift') {
      keyBlock.className = 'key lshift functional';
    } else if (fourthRowChars[i].value === 'R Shift') {
      keyBlock.className = 'key rshift functional';
    } else if (fourthRowChars[i].value === 'key up') {
      keyBlock.className = 'key up functional';
    } else {
      keyBlock.className = 'key';
    }
    fourthRow.append(keyBlock);
  }
}

fourthRowFill();

const fifthRowChars = [
  { key: 'Ctrl', value: 'L Ctrl' },
  { key: 'Windows', value: 'Windows' },
  { key: 'Alt', value: 'L Alt' },
  { key: 'Space', value: 'Space' },
  { key: 'Alt', value: 'R Alt' },
  { key: 'Ctrl', value: 'R Ctrl' },
  { key: 'key left', value: 'key left' },
  { key: 'key down', value: 'key down' },
  { key: 'key right', value: 'key right' },
];

function fifthRowFill() {
  const fifthRow = document.querySelectorAll('.row')[4];
  for (let i = 0; i < fifthRowChars.length; i++) {
    const keyBlock = document.createElement('div');
    const keyChar = fifthRowChars[i].key;
    if (keyChar === 'Windows') {
      keyBlock.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24"><path d="M2 12.5v6.7l8.1 1.2v-7.9M10.1 3.7L2 4.9v6.7h8.1M21.9 11.5V2L11.1 3.6v8M11.1 20.5L21.9 22v-9.5H11.1"/></svg>';
    } else if (keyChar === 'key left') {
      keyBlock.innerHTML = '<svg fill="#fff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"/></svg>';
    } else if (keyChar === 'key down') {
      keyBlock.innerHTML = '<svg fill="#fff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>';
    } else if (keyChar === 'key right') {
      keyBlock.innerHTML = '<svg fill="#fff" width="20px" height="20px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 11.7109 46.6328 C 12.6484 46.6328 13.3984 46.2344 14.3828 45.7422 L 44.5000 31.1406 C 46.4922 30.1562 47.125 29.2422 47.125 28.0000 C 47.125 26.7578 46.4922 25.8672 44.5000 24.8828 L 14.3828 10.2578 C 13.375 9.7656 12.625 9.3672 11.6875 9.3672 C 9.9531 9.3672 8.875 10.6797 8.875 12.7187 L 8.8984 43.2812 C 8.8984 45.3203 9.9766 46.6328 11.7109 46.6328 Z"/></svg>';
    } else {
      keyBlock.innerHTML = keyChar;
    }
    if (fifthRowChars[i].value === 'L Ctrl') {
      keyBlock.className = 'key lctrl functional';
    } else if (fifthRowChars[i].value === 'Windows') {
      keyBlock.className = 'key windows functional';
    } else if (fifthRowChars[i].value === 'L Alt') {
      keyBlock.className = 'key lalt functional';
    } else if (fifthRowChars[i].value === 'Space') {
      keyBlock.className = 'key space functional';
    } else if (fifthRowChars[i].value === 'R Alt') {
      keyBlock.className = 'key ralt functional';
    } else if (fifthRowChars[i].value === 'R Ctrl') {
      keyBlock.className = 'key rctrl functional';
    } else if (fifthRowChars[i].value === 'key left') {
      keyBlock.className = 'key left functional';
    } else if (fifthRowChars[i].value === 'key down') {
      keyBlock.className = 'key down functional';
    } else if (fifthRowChars[i].value === 'key right') {
      keyBlock.className = 'key right functional';
    } else {
      keyBlock.className = 'key';
    }

    fifthRow.append(keyBlock);
  }
}

fifthRowFill();
