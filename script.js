function validateForm(e) {
  e.preventDefault();

  document.getElementById("errorviesti").innerText = "";
  document.getElementById("task").style.border = "";

  const tehtava = document.getElementById("task").value.trim();
  let valid = true;

  if (tehtava === "") {
    document.getElementById("task").style.border = "2px solid red";
    document.getElementById("errorviesti").innerText =
      "Kenttä ei saa olla tyhjä!";
    valid = false;
  } else if (tehtava.length < 3) {
    document.getElementById("task").style.border = "2px solid red";
    document.getElementById("errorviesti").innerText =
      "Tehtävän pitää olla vähintään 3 merkkiä!";
    valid = false;
  }
  if (!valid) {
    return;
  }

  let uusiTehtava = document.createElement("li");

  let tehtavaTeksti = document.createElement("span");
  tehtavaTeksti.innerText = tehtava;

  let tehtyNappi = document.createElement("button");
  tehtyNappi.innerText = "Tehty";
  tehtyNappi.type = "button";

  tehtyNappi.onclick = function () {
    tehtavaTeksti.style.textDecoration = "line-through";
  };

  let poistaNappi = document.createElement("button");
  poistaNappi.innerText = "Poista";
  poistaNappi.type = "button";

  poistaNappi.onclick = function () {
    uusiTehtava.remove();
  };

  uusiTehtava.appendChild(poistaNappi);
  uusiTehtava.appendChild(tehtavaTeksti);
  uusiTehtava.appendChild(tehtyNappi);
  document.getElementById("list").appendChild(uusiTehtava);

  document.getElementById("task").value = "";
}
