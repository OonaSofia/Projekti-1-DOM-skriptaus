function validateForm(e) {
    document.getElementById("errorviesti").innerText = "";
    document.getElementById("task").style.border = "";

  const tehtava = document.getElementById("task").value.trim();
  let valid = true;

  if (tehtava === "") {
    document.getElementById("task").style.border = "2px solid red";
    document.getElementById("errorviesti").innerText = "Kenttä ei saa olla tyhjä!";
    valid = false;
  } else if (tehtava.length < 3) {
    document.getElementById("task").style.border = "2px solid red";
    document.getElementById("errorviesti").innerText = "Tehtävän pitää olla vähintään 3 merkkiä!";
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
  const uusiTehtava = document.createElement("li");
  uusiTehtava.innerText = tehtava;

  document.getElementById("list").appendChild(uusiTehtava);

  document.getElementById("task").value = "";
}
;