const sendData = () => {
  const id = parseInt(
    document
      .getElementById('viewad-extra-info')
      ?.lastChild?.previousSibling?.textContent.split(' ', 2)[1],
    10,
  );

  fetch(`http://localhost:4200/api/ads/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(id),
  });
};

export default sendData;
