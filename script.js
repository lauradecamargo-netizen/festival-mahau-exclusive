/* ==========================================================================
   MAHAUL EXCLUSIVE — script.js
   JavaScript mínimo: menu mobile, acordeão do FAQ, seletor de noite,
   mapa de mesas e formulário de contato (apenas visuais).
   ========================================================================== */

   document.addEventListener("DOMContentLoaded", function () {

    /* ---- Cabeçalho: muda de aparência ao rolar a página ---- */
    var cabecalho = document.querySelector(".cabecalho");
    if (cabecalho) {
      window.addEventListener("scroll", function () {
        cabecalho.classList.toggle("rolado", window.scrollY > 40);
      });
    }
  
    /* ---- Menu mobile ---- */
    var botaoMenu = document.querySelector(".botao-menu-mobile");
    var menu = document.querySelector(".menu");
    if (botaoMenu && menu) {
      botaoMenu.addEventListener("click", function () {
        botaoMenu.classList.toggle("aberto");
        menu.classList.toggle("aberto");
      });
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          botaoMenu.classList.remove("aberto");
          menu.classList.remove("aberto");
        });
      });
    }
  
    /* ---- Acordeão do FAQ ---- */
    var perguntas = document.querySelectorAll(".pergunta-faq");
    perguntas.forEach(function (pergunta) {
      pergunta.addEventListener("click", function () {
        var item = pergunta.closest(".item-faq");
        var resposta = item.querySelector(".resposta-faq");
        var estavaAberto = item.classList.contains("aberto");
  
        item.classList.toggle("aberto", !estavaAberto);
        resposta.style.maxHeight = estavaAberto ? null : resposta.scrollHeight + "px";
      });
    });
  
    /* ---- Seletor de noite (página de ingressos) ---- */
    var pilulas = document.querySelectorAll(".pilula-noite");
    pilulas.forEach(function (pilula) {
      pilula.addEventListener("click", function () {
        pilulas.forEach(function (p) { p.classList.remove("ativa"); });
        pilula.classList.add("ativa");
      });
    });
  
    /* ---- Mapa de mesas (apenas ilustrativo, não conclui compra) ---- */
    var mesas = document.querySelectorAll(".mesa:not(.ocupada)");
    mesas.forEach(function (mesa) {
      mesa.addEventListener("click", function () {
        mesa.classList.toggle("selecionada");
      });
    });
  
    /* ---- Formulário de contato (visual, não envia dados de verdade) ---- */
    var formContato = document.querySelector(".form-contato");
    if (formContato) {
      formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();
        var confirmacao = document.querySelector(".confirmacao-envio");
        if (confirmacao) {
          confirmacao.classList.add("visivel");
          confirmacao.textContent = "Mensagem simulada — este formulário é apenas ilustrativo.";
        }
        formContato.reset();
      });
    }
  
  });