const organiserBtn = document.getElementById('organiserBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');

organiserBtn.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files);
  files.forEach(file => {
    const li = document.createElement('li');
    li.textContent = file.name;
    li.addEventListener('click', () => {
      const url = URL.createObjectURL(file);
      audioPlayer.src = url;
      audioPlayer.play();
    });
    playlist.appendChild(li);
  });
});
