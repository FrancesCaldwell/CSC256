let blogId = decodeURI(location.pathname.split("/").pop());

let docRef = db.collection("blogs").doc(blogId);

docRef.get().then((doc) => {
  if (doc.exists) {
    //console.log(doc.data());
    setupBlog(doc.data());
  } else {
    location.replace("/");
  }
});

const setupBlog = (data) => {
  const banner = document.querySelector(".banner");
  const blogTitle = document.querySelector(".title");
  const titleTag = document.querySelector("title");
  const publish = document.querySelector(".published");

  banner.style.backgroundImage = `url(${data.bannerImage})`;

  titleTag.innerHTML += blogTitle.innerHTML = data.title;
  publish.innerHTML += "<b>" + data.author + "</b> " + data.publishedAt;

  const article = document.querySelector(".article");
  addArticle(article, data.article);
};

const addArticle = (ele, data) => {
  data = data.split("\n").filter((item) => item.length);
  // console.log(data);

  data.forEach((item) => {
    // check for heading
    if (item[0] == "#") {
      let hCount = 0;
      let i = 0;
      while (item[i] == "#") {
        hCount++;
        i++;
      }
      let tag = `h${hCount}`;
      ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`;
    }
    //checking for image format
    else if (item[0] == "!" && item[1] == "[") {
      let seperator;

      for (let i = 0; i <= item.length; i++) {
        if (
          item[i] == "]" &&
          item[i + 1] == "(" &&
          item[item.length - 1] == ")"
        ) {
          seperator = i;
        }
      }

      let alt = item.slice(2, seperator);
      let src = item.slice(seperator + 2, item.length - 1);
      ele.innerHTML += `
            <img src="${src}" alt="${alt}" class="article-image">
            `;
    } else {
      ele.innerHTML += `<p>${item}</p>`;
    }
  });
};

window.onload = function () {
  const blogSection = document.querySelector(".blogs-section");

  db.collection("blogs")
    .get()
    .then((querySnapshot) => {
      const blogs = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // sort the blogs array in descending order based on timestamp
      blogs.sort((a, b) => b.timestamp - a.timestamp);

      // update the blogSection element with all blogs
      blogSection.innerHTML = "";
      blogs.forEach((blog) => {
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
          blogSection.innerHTML += `
          <div class="blog-card">
            <img src="${blog.bannerImage}" class="blog-image" alt="">
            <p class=""></p>
            <h1 class="blog-title">${blog.title.substring(0, 50) + "..."}</h1>
            <p class="blog-overview">${
              blog.article.substring(0, 200) + "..."
            }</p>
            <a href="/${blog.id}" class="btn dark">read</a>
          </div>
        `;
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
