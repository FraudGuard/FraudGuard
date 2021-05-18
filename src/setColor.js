const wahrscheinlichkeiten = {
  1: 'Unwahrscheinlich',
  2: 'geringe wahrscheinlichkeit',
  3: 'wahrscheinlich',
  4: 'sehr wahrscheinlich',
};

/* eslint-disable no-param-reassign */
const setColor = (score, mount, style) => {
  if (style === 'button') {
    if (score < -50) {
      mount.style.backgroundColor = 'green';
      mount.innerHTML = `${wahrscheinlichkeiten[1]}`;
    } else if (score > -50 && score < 0) {
      mount.style.backgroundColor = 'yellow';
      mount.style.color = 'black';
      mount.innerHTML = `${wahrscheinlichkeiten[2]}`;
    } else if (score > 0 && score < 50) {
      mount.style.backgroundColor = 'orange';
      mount.innerHTML = `${wahrscheinlichkeiten[3]}`;
    } else {
      mount.style.backgroundColor = 'red';
      mount.innerHTML = `${wahrscheinlichkeiten[4]}`;
    }
  } else if (style === 'tag') {
    if (score < -50) {
      mount.classList.add('green-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[1]}`;
    } else if (score > -50 && score < 0) {
      mount.classList.add('yellow-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[2]}`;
    } else if (score > 0 && score < 50) {
      mount.classList.add('orange-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[3]}`;
    } else {
      mount.classList.add('red-tag');
      mount.innerHTML = `${wahrscheinlichkeiten[4]}`;
    }
  } else if (style === 'gallery') {
    if (score < -50) {
      mount.parentElement.classList.add('green');
      mount.innerHTML = `${wahrscheinlichkeiten[1]}`;
    } else if (score > -50 && score < 0) {
      mount.parentElement.classList.add('yellow');
      mount.innerHTML = `${wahrscheinlichkeiten[2]}`;
    } else if (score > 0 && score < 50) {
      mount.parentElement.classList.add('orange');
      mount.innerHTML = `${wahrscheinlichkeiten[3]}`;
    } else {
      mount.parentElement.classList.add('red');
      mount.innerHTML = `${wahrscheinlichkeiten[4]}`;
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('setColor parameter "style" doesnt match');
  }
};
export default setColor;
