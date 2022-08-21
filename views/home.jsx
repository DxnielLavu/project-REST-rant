const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="https://placekitten.com/500/500" alt="Kitten" />
          <div>
            Photo by <a href="https://placekitten.com/500/500">Place Kitten</a> on{" "}
            <a href="https://placekitten.com/500/500">PlaceKitten</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home
