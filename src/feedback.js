import getId from './getId';

const closeFeedback = () => {
  document.getElementById('overlay').remove();
};

const sendFeedback = () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    comment: `${document.getElementById('feedback').value} ${
      document.getElementById('nameInput').value
    }`,
  });

  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  fetch(
    `https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}/comment`,
    requestOptions,
  );
  // fetch(`https://fraudguard-utmebwtwmq-ew.a.run.app/api/analyze/${getId()}/comment`, requestOptions);

  closeFeedback();
};

const openFeedback = () => {
  if (!document.getElementById('overlay')) {
    const overlay = document.createElement('div');
    overlay.classList.add('login-overlay');
    overlay.style.animationDuration = '0.5s';
    overlay.id = 'overlay';

    const overlayContent = document.createElement('div');
    overlayContent.classList.add('login-overlay--content');

    const headline = document.createElement('span');
    headline.classList.add('headline-big');
    headline.innerHTML = 'Hallo!';

    const text = document.createElement('p');
    text.innerHTML =
      'Danke, dass du FraudGuard verbessern möchtest. Bitte teile uns mit, was wir besser machen können :)';

    const closeBTN = document.createElement('a');
    closeBTN.addEventListener('click', closeFeedback);
    closeBTN.classList.add('j-overlay-close');
    closeBTN.classList.add('overlay-close');
    closeBTN.id = 'closeBTN';
    closeBTN.title = 'Close (Esc)';
    closeBTN.type = 'button';

    const nameInput = document.createElement('input');
    nameInput.autocomplete = 'off';
    nameInput.classList.add('splitfield-input');
    nameInput.classList.add('is-not-clearable');
    nameInput.classList.add('feedback-input');
    nameInput.id = 'nameInput';
    nameInput.name = 'nameStr';
    nameInput.placeholder = 'Dein Name';
    nameInput.tabindex = '3';
    nameInput.title = '';
    nameInput.type = 'text';
    nameInput.value = '';
    nameInput.style.border = 'black solid 1px';
    nameInput.style.borderRadius = '8px';
    nameInput.style.padding = '6px 12px';

    const feedbackInput = document.createElement('textarea');
    feedbackInput.classList.add('splitfield-input');
    feedbackInput.classList.add('is-not-clearable');
    feedbackInput.classList.add('feedback-input');
    feedbackInput.id = 'feedback';
    feedbackInput.autocomplete = 'off';
    feedbackInput.name = 'feedbackStr';
    feedbackInput.placeholder = 'Dein Feedback';
    feedbackInput.tabindex = '3';
    feedbackInput.title = '';
    feedbackInput.value = '';

    const sendFeedbackBTN = document.createElement('button');
    sendFeedbackBTN.addEventListener('click', sendFeedback);
    sendFeedbackBTN.id = 'btnFeedback';
    sendFeedbackBTN.innerHTML = 'Feedback senden!';
    sendFeedbackBTN.title = 'senden';

    overlayContent.appendChild(headline);
    overlayContent.appendChild(text);
    overlayContent.appendChild(closeBTN);
    overlayContent.appendChild(nameInput);
    overlayContent.appendChild(document.createElement('br'));
    overlayContent.appendChild(document.createElement('br'));
    overlayContent.appendChild(feedbackInput);
    overlayContent.appendChild(document.createElement('br'));
    overlayContent.appendChild(sendFeedbackBTN);
    overlay.appendChild(overlayContent);

    document.getElementById('input').appendChild(overlay);
  }
};

export { openFeedback, sendFeedback };
