document.addEventListener("DOMContentLoaded", () => {
  const accessKey = "hyd0eNihDD_5xS5XiyO2fTVufz_81-rDywjdAcp9foY";
  const searchForm = document.getElementById("search-form");
  const searchBox = document.getElementById("search-box");
  const searchResult = document.getElementById("search-result");
  const searchMoreBtn = document.getElementById("search-more-btn");

  let Keyword = "";
  let page = 1;

  async function searchImages() {
    if (searchBox) {
      Keyword = searchBox.value;
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accessKey}&per_page=12`;

      const response = await fetch(url);
      const data = await response.json();

      const results = data.results;

      results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
      });
      showMoreBtn.style.display = "block ";
    }
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
  });
  showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
  });
});
