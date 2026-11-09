(function () {
  var container = document.querySelector(".buy-buttons");
  if (!container) return;

  fetch("./countries.json")
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (stores) {
      container.replaceChildren(
        ...stores.map(function (store) {
          var a = document.createElement("a");
          a.className = "buy-button";
          a.href = store.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = store.label + " " + store.name + " " + store.flag;
          return a;
        })
      );
    })
    .catch(function (err) {
      // Keep the static fallback buttons in the HTML if the list fails to load.
      console.warn("Could not load buy button list:", err);
    });
})();
