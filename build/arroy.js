"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prompt = require("prompt-sync");
var prompt = Prompt;
var calimc = function (peso, altura) {
    return peso / Math.pow(altura, 2);
};
var altura = Number(prompt("Qual sua altura "));
var peso = Number(prompt("Qual seu peso "));
var imc = calimc(peso, altura);
console.log("Seu IMC \u00E9: ".concat(imc));
