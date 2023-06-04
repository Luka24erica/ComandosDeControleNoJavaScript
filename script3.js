let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
alert("A soma dos múltiplos de 3 ou 5 abaixo de 1000 é: " + sum);