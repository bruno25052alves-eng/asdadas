let respostas = {};
let pontos = 0;

function responder(q, r, btn) {
  respostas[q] = r;

  let botoes = btn.parentElement.querySelectorAll("button");
  botoes.forEach(b => b.classList.remove("selecionado"));

  btn.classList.add("selecionado");
}

function mostrarResultado() {
  pontos = 0;

  if (respostas.q1 === "linux") pontos++;
  if (respostas.q2 === "linus") pontos++;
  if (respostas.q3 === "ios") pontos++;
  if (respostas.q4 === "microsoft") pontos++;
  if (respostas.q5 === "google") pontos++;
  if (respostas.q6 === "open") pontos++;
  if (respostas.q7 === "windows") pontos++;
  if (respostas.q8 === "apple") pontos++;
  if (respostas.q9 === "custom") pontos++;
  if (respostas.q10 === "servers") pontos++;

  document.getElementById("resultadoQuiz").innerHTML =
    `Você acertou <b>${pontos}/10</b>`;
}

window.onscroll = function () {

  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";

  document.getElementById("topButton").style.display =
    scroll > 300 ? "block" : "none";
};

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
