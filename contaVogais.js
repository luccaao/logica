function contaVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contadorVogais = 0;
  
    for (let i = 0; i < str.length; i++) {
      const letraAtual = str[i].toLowerCase(); 
  
      if (vogais.includes(letraAtual)) {
        contadorVogais++;
      }
    }
  
    return contadorVogais;
  }
  
  
  const frase = "Olá, mundo!";
  const numeroDeVogais = contaVogais(frase);
  
  console.log(`A string "${frase}" tem ${numeroDeVogais} vogais.`);
  