export class ObjectConnecte {
    constructor(limiteVolts, type) {
        this.limiteVolts = limiteVolts
        this.type = type
    }

    displayType() {
        console.log(this.type)
    }

    displayVolts() {
        console.log(this.limiteVolts)
    }
}

export class TelephonePortable extends ObjectConnecte {}

export class Tablette extends ObjectConnecte {}

export class EnceinteConnectee extends ObjectConnecte {}