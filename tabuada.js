function tabuadaMult(numero) {
    console.log(`tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
 
  const numeroParaTabuada = 5;
  tabuadaMult(numeroParaTabuada);
  