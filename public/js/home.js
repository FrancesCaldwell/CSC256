// Get the blogs collection from Firestore
const blogsRef = db.collection("blogs");
// Use window.addEventListener instead of window.onload
window.addEventListener("load", function () {
  const blogSection = document.querySelector(".blogs-section");
  const newestBlog = document.querySelector(".newest-blog");
  const aiSection = document.getElementById("ai-section");
  const cyberSection = document.getElementById("cyber-section");
  const droneSection = document.getElementById("drone-section");
  const physicalSection = document.getElementById("physical-section");

  function hideTitles(selectedTag) {
    const sections = document.querySelectorAll(".blogs-section");
    const titles = document.querySelectorAll("h2");

    titles.forEach((title) => {
      if (title.textContent !== selectedTag) {
        title.style.display = "none";
      } else {
        title.style.display = "block";
      }
    });
  }

  // Define the tags to filter the blogs by
  const tags = ["AI", "Drone", "Physical", "Cyber"];
  function filterBlogs(selectedTags) {
    selectedTags.forEach((tag) => {
      hideTitles(tag);
      const section = getSection(tag);
      section.innerHTML = ""; // clear section before displaying filtered blogs
      blogsRef
        .where("tag", "==", tag)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const blog = doc.data();
            section.innerHTML += `
              <div class="blog-card">
                <img src="${blog.bannerImage}" class="blog-image" alt="">
                <h1 class="blog-title">${
                  blog.title.substring(0, 50) + "..."
                }</h1>
                <p class="blog-overview">${
                  blog.article.substring(0, 200) + "..."
                }</p>
                <a href="/${doc.id}" class="btn dark">read</a>
              </div>
            `;
          });
        })
        .catch((error) => {
          console.error("Error getting blogs: ", error);
        });
    });
  }
  // Helper function to get the section element based on the tag
  function getSection(tag) {
    switch (tag) {
      case "Physical":
        return physicalSection;
      case "Drone":
        return droneSection;
      case "Cyber":
        return cyberSection;
      case "AI":
        return aiSection;
      default:
        throw new Error(`Invalid tag: ${tag}`);
    }
  }

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

      // Get the select element for sorting
      const sortSelect = document.getElementById("sort-select");

      // Add an event listener to listen for changes
      sortSelect.addEventListener("change", () => {
        // Get the selected tag(s)
        const selectedTags = sortSelect.value.split(",");

        // Clear all the blog sections
        aiSection.innerHTML = "";
        cyberSection.innerHTML = "";
        droneSection.innerHTML = "";
        physicalSection.innerHTML = "";

        // Filter and display the blogs based on the selected tags
        filterBlogs(selectedTags);
      });

      // update the newestBlog element with the most recent blog
      const mostRecentObject = blogs[0];
      newestBlog.innerHTML += `
      <div class="blog-card">
        <img src="${mostRecentObject.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${
          mostRecentObject.title.substring(0, 50) + "..."
        }</h1>
        <p class="blog-overview">${
          mostRecentObject.article.substring(0, 200) + "..."
        }</p>
        <a href="/${mostRecentObject.id}" class="btn dark">read</a>
      </div>
    `;

      const physicalBlogs = blogs.filter((blog) => blog.tag === "Physical");
      physicalBlogs.forEach((blog) => {
        physicalSection.innerHTML += `
      <div class="blog-card">
        <img src="${blog.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${blog.title.substring(0, 50) + "..."}</h1>
        <p class="blog-overview">${blog.article.substring(0, 200) + "..."}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
      </div>
    `;
      });

      const droneBlogs = blogs.filter((blog) => blog.tag === "Drone");
      droneBlogs.forEach((blog) => {
        droneSection.innerHTML += `
        <div class="blog-card">
          <img src="${blog.bannerImage}" class="blog-image" alt="">
          <h1 class="blog-title">${blog.title.substring(0, 50) + "..."}</h1>
          <p class="blog-overview">${blog.article.substring(0, 200) + "..."}</p>
          <a href="/${blog.id}" class="btn dark">read</a>
        </div>
      `;
      });

      const cyberBlogs = blogs.filter((blog) => blog.tag === "Cyber");
      cyberBlogs.forEach((blog) => {
        cyberSection.innerHTML += `
        <div class="blog-card">
          <img src="${blog.bannerImage}" class="blog-image" alt="">
          <h1 class="blog-title">${blog.title.substring(0, 50) + "..."}</h1>
          <p class="blog-overview">${blog.article.substring(0, 200) + "..."}</p>
          <a href="/${blog.id}" class="btn dark">read</a>
        </div>
      `;
      });

      const aiBlogs = blogs.filter((blog) => blog.tag === "AI");
      aiBlogs.forEach((blog) => {
        aiSection.innerHTML += `
        <div class="blog-card">
          <img src="${blog.bannerImage}" class="blog-image" alt="">
          <h1 class="blog-title">${blog.title.substring(0, 50) + "..."}</h1>
          <p class="blog-overview">${blog.article.substring(0, 200) + "..."}</p>
          <a href="/${blog.id}" class="btn dark">read</a>
        </div>
      `;
      });
    })
    .catch((error) => {
      console.error(error);
    });
  var button = document.getElementsByClassName("next");
  button.onclick = function () {
    var container = document.getElementById("carousel");
    sideScroll(container, "right", 5, 1000, 500);
  };

  var back = document.getElementsByClassName("prev");
  back.onclick = function () {
    var container = document.getElementById("carousel");
    sideScroll(container, "left", 5, 1000, 500);
  };

  function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - blogSection.offsetLeft;
    scrollLeft = blogSection.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  blogSection.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - blogSection.offsetLeft;
    const scroll = x - startX;
    blogSection.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  blogSection.addEventListener("mousedown", startDragging, false);
  blogSection.addEventListener("mouseup", stopDragging, false);
  blogSection.addEventListener("mouseleave", stopDragging, false);
});
