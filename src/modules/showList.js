import LikeIcon from '../assets/like-icon.png';

const createList = (shows) => {
  const displayContainer = document.getElementById('show-list');
  shows.forEach((item, index) => {
    displayContainer.innerHTML += `
    <div class="card">
      <img class="img" src="${item.image.medium}" alt="${item.name} poster">
      <div class="title">
        <h3>${item.name}</h3>
        <img src="${LikeIcon}">
      </div>
      <p>Genres: ${item.genres}</p>
      <button class="comment_button" data-id=${index + 1}>Comment</button>
    </div>
    `;
  });
};

export default createList;
