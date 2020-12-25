const main = document.querySelector("main");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("butto");

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const posts = res.json();
    return posts;
  } catch (error) {
    main.textContent =
      "読み込みに失敗しました。時間が経ってから再度お試しください。";
  }
}

function createArticle(post) {
  const article = document.appendChild("Article");
  const title = document.appendChild("h1");
  const body = document.appendChild("p");

  title.textContent = post.title;
  body.textContent = post.title;

  article.appendChild(title);
  article.appendChild(body);

  return article;
}

async function createArticles() {
  const posts = await getPosts();
  posts.forEach((post) => {
    const article = createArticle(post);
    main.appendChild(article);
  });
}

window.addEventListener("load", createArticles);
