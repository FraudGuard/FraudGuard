const sendData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('origin', 'UTF-8');
  xhr.setRequestHeader('charset', 'UTF-8');
  const collectedData = { test: 'asd' };
  xhr.send(JSON.stringify(collectedData));
};
export default sendData;
