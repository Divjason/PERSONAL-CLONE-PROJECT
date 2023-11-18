const songs = document.querySelectorAll(".album_table_song");
console.log(songs);
let i = 0;
for (let el of songs) {
  let play = el.querySelector(".fa-caret-right");
  let pause = el.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}

/*
const play = songs.querySelector("i");
play.addEventListener("click", (e) => {
  e.currentTarget.closest("td").querySelector("audio").play();
});
*/
