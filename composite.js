class Employe {
  constructor(nom) {
    this.nom = nom;
  }

  afficher(indent = "") {
    console.log(`${indent}${this.nom}`);
  }
}

class Personne extends Employe {}

class Departement extends Employe {

  constructor(nom) {

    super(nom);
    this.elements = [];
  }

  ajouter(element) {

    this.elements.push(element);
  }

  retirer(element) {

    this.elements = this.elements.filter(e => e !== element);
  }

  afficher(indent = "") {

    console.log(`${indent}${this.nom}`);
    for (const element of this.elements) {

      element.afficher(indent + "  ");
    }
  }
}

const dsi = new Departement("DSI");

const compta = new Departement("Compta");
compta.ajouter(new Personne("M. Bueltin"));
compta.ajouter(new Personne("Mme. Salere"));

const run = new Departement("Run");
const dept1 = new Departement("Dept1");
dept1.ajouter(new Personne("M. Aha"));
dept1.ajouter(new Personne("M. Bhé"));
run.ajouter(new Personne("Mme. Vithe"));
run.ajouter(dept1);

const build = new Departement("Build");
build.ajouter(new Personne("M. Guique"));

dsi.ajouter(new Personne("Mme. Scheffe"));
dsi.ajouter(compta);
dsi.ajouter(run);
dsi.ajouter(build);

dsi.afficher();