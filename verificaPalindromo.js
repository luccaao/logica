function verificaPalindromo(palavra) {
    const palavraFormatada = palavra.toLowerCase().replace(/\s/g, '');
  
    const palavraInvertida = palavraFormatada.split('').reverse().join('');
  
    return palavraFormatada === palavraInvertida;
  }
  
 
  const palavraExemplo = "arara";
  if (verificaPalindromo(palavraExemplo)) {
    console.log(`"${palavraExemplo}" é um palindromo`);
  } else {
    console.log(`"${palavraExemplo}" não é um palindromo`);
  }
  