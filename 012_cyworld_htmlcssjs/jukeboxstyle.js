const song = document.querySelectorAll(".album_table_song")[0];
const play = song.querySelector("i");
play.addEventListener("click", (e) => {
  e.currentTarget.closest("td").querySelector("audio").play();
});
