const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="\images\strawberry-icecream.jpg" alt="Strawberry-Icecream" />
          <div>
            Photo by <a href="https://unsplash.com/@sadswim">Ian Dooley</a> on{" "}
            <a href="https://unsplash.com/photos/TLD6iCOlyb0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
