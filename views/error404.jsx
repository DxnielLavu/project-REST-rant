const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
            <img src="\images\404page.jpg" alt="storm trooper lego in the dessert" />
            <div>
              Photo by <a href="https://unsplash.com/@danielkcheung">Daniel K Cheung</a> on{" "}
              <a href="https://unsplash.com/photos/cPF2nlWcMY4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a>
              </div>
              </div>
      </main>
    </Def>
  );
}

module.exports = error404;
