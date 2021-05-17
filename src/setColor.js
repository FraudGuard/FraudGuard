/* eslint-disable no-param-reassign */
const setColor = (score, mount, style) => {
  if (style === 'button') {
    if (score < 19) {
      mount.style.backgroundColor = 'green';
    } else if (score < 30 && score > 19) {
      mount.style.backgroundColor = 'yellow';
    } else if (score < 59 && score > 30) {
      mount.style.backgroundColor = 'orange';
    } else {
      mount.style.backgroundColor = 'red';
    }
  } else if (style === 'tag') {
    if (score < 19) {
      mount.classList.add('green-tag');
    } else if (score < 30 && score > 19) {
      mount.classList.add('yellow-tag');
    } else if (score < 59 && score > 30) {
      mount.classList.add('orange-tag');
    } else {
      mount.classList.add('red-tag');
    }
  } else if (style === 'gallery') {
    if (score < 19) {
      mount.parentElement.classList.add('green');
    } else if (score < 30 && score > 19) {
      mount.parentElement.classList.add('yellow');
    } else if (score < 59 && score > 30) {
      mount.parentElement.classList.add('orange');
    } else {
      mount.parentElement.classList.add('red');
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('setColor parameter "style" doesnt match');
  }
};
export default setColor;
