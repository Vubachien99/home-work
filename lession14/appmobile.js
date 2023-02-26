/*- API get movie
https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1
*/
const main = document.getElementById("main");
const API_Get_Movie =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
Get_movie();
async function Get_movie() {
  // goij api lay infor
  const res = await fetch(API_Get_Movie);
  const data = await res.json();
  //   tao mang 1 chieu thong tin phim
  const { results } = data;
  //
  for (let i = 0; i < results.length; i++) {
    const movie = results[i];
    console.log(`${i}-`, movie);
    const { poster_path, original_title, overview } = movie;
    console.log(movie.poster_path);

    //   tao 1 movie
    const movie_Element = document.createElement("div");
    movie_Element.classList.add("movie");
    const movie_ElementContent = `
  <img class="movie_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}" alt="">
  <div class="title">${original_title}</div>
  <div class="movie_info">
      <h3>overview</h3>
      <p>${overview}</p>
 </div>`;
    movie_Element.innerHTML = movie_ElementContent;
    main.appendChild(movie_Element);
  }
}
