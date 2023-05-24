// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

const getValue = async () => {
  loading = true;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  const section = document.querySelector(".section");

  function getCard(heading, desc) {
    const card = document.createElement("div");

    card.setAttribute("class", "card");
    const title = document.createElement("h3");
    title.setAttribute("class", "title");
    const headText = document.createTextNode(heading);
    title.appendChild(headText);
    card.appendChild(title);

    const bodyEle = document.createElement("p");
    const bodyText = document.createTextNode(desc);
    bodyEle.setAttribute("class", "body");
    bodyEle.appendChild(bodyText);
    card.appendChild(bodyEle);
    section.appendChild(card);
  }

  data.map((item) => {
    return getCard(item.title, item.body);
  });

  getCard();
};

getValue();
