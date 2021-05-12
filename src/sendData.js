const sendData = () => {
  // sends Id to backend server to it can make a GET request
  const id = parseInt(
    document
      .getElementById('viewad-extra-info')
      .lastChild.previousSibling.textContent.split(' ', 2)[1],
    10,
  );

  const payload = { id };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('charset', 'UTF-8');
  // origin cannot be set because of section 4.6.2 of the W3C XMLHttpRequest
  // xhr.setRequestHeader('origin', '*');

  xhr.send(JSON.stringify(payload));
};
export default sendData;
