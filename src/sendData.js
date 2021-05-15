const sendData = () => {
  const id = parseInt(
    document
      .getElementById('viewad-extra-info')
      .lastChild.previousSibling.textContent.split(' ', 2)[1],
    10,
  );

  const xhr = new XMLHttpRequest();
  xhr.open('POST', `http://localhost:4200/${id}`, true);
  xhr.send();
};
export default sendData;
