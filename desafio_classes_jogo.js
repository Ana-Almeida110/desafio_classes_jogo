class Heroi{
  constructor(nomeHeroi, idadeHeroi, tipoHeroi){
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;
  }

  atacar(){
    let ataque;

    if (this.tipoHeroi === "Mago"){
      ataque = "magia";
    } else if (this.tipoHeroi === "Guerreiro"){
      ataque = "espada";
    } else if (this.tipoHeroi === "Monge"){
      ataque = "artes marciais";
    } else if (this.tipoHeroi === "Ninja"){
      ataque = "shuriken";
    } else {
      ataque = "ataque indefinido"
    }
    console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
  }
}

let heroiAprendiz = new Heroi("Bumba", 13, "Ninja")
let heroiMediano = new Heroi("Conam", 15, "Guerreiro")
let heroiProfessor = new Heroi("Pardal", 35, "Monge")
let heroiMestre = new Heroi("Merlim", 60, "Mago")

heroiAprendiz.atacar();
heroiMediano.atacar();
heroiProfessor.atacar();
heroiMestre.atacar();
