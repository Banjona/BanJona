const chords = [
  'G',
  'C',
  'D',
  'Em',
  'Am',
  'Bm',
  'F',
  'D7',
  'G7',
  'Cmaj7',
];

const chordDisplay = document.getElementById('chordDisplay');
const randomChordButton = document.getElementById('randomChordButton');
const listenButton = document.getElementById('listenButton');

function chooseRandomChord() {
  const randomIndex = Math.floor(Math.random() * chords.length);
  return chords[randomIndex];
}

function updateChord() {
  const chord = chooseRandomChord();
  chordDisplay.textContent = chord;
}

randomChordButton.addEventListener('click', updateChord);

listenButton.addEventListener('click', () => {
  const chord = chooseRandomChord();
  chordDisplay.textContent = chord;
  alert(`Try this banjo chord: ${chord}`);
});
