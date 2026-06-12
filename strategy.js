const strategie6L = motDePasse => motDePasse.length >= 6;

const strategie8D = motDePasse => {

  if (motDePasse.length < 8) return false;

  const nbChiffres = (motDePasse.match(/[0-9]/g) || []).length;

  return nbChiffres >= 2;
};

const strategie12X = motDePasse => {

  if (motDePasse.length < 12) return false;

  const nbChiffres = (motDePasse.match(/[0-9]/g) || []).length;

  const nbSpeciaux = (motDePasse.match(/[^a-zA-Z0-9]/g) || []).length;

  return nbChiffres >= 2 && nbSpeciaux >= 1;
};

class VerificationMotDePasse {

  constructor(strategie) {

    this.strategie = strategie;
  }

  verifier(motDePasse) {

    return this.strategie(motDePasse);
  }
}


const verif6L = new VerificationMotDePasse(strategie6L);
console.log("6L - 'abc123' :", verif6L.verifier("abc123"));   
console.log("6L - 'abc12' :", verif6L.verifier("abc12"));     

const verif8D = new VerificationMotDePasse(strategie8D);
console.log("8D - 'abcd1234' :", verif8D.verifier("abcd1234")); 
console.log("8D - 'abcdefg1' :", verif8D.verifier("abcdefg1")); 
console.log("8D - 'abcd12' :", verif8D.verifier("abcd12"));    

const verif12X = new VerificationMotDePasse(strategie12X);
console.log("12X - 'abcdefgh12!@' :", verif12X.verifier("abcdefgh12!@")); 
console.log("12X - 'abcdefgh1234' :", verif12X.verifier("abcdefgh1234")); 
console.log("12X - 'abc12!@' :", verif12X.verifier("abc12!@"));          