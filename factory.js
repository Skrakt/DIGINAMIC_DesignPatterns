import { Tablette, TelephonePortable, EnceinteConnectee } from "./objetConnectee.js"

class ObjectFactory {
    static buildObject(type, limiteVolts) {
        switch (type) {
    
            case "TelephonePortable":
                return new TelephonePortable(limiteVolts, type)
    
            case "Tablette":
                return new Tablette(limiteVolts, type)
    
            case "EnceinteConnectee":
                return new EnceinteConnectee(limiteVolts, type)
    
        }
    }
}

const tablette = ObjectFactory.buildObject("Tablette", 5)
const telephone = ObjectFactory.buildObject("TelephonePortable", 10)
const enceinte = ObjectFactory.buildObject("EnceinteConnectee", 15)

tablette.displayType()
tablette.displayVolts()
telephone.displayType()
telephone.displayVolts()
enceinte.displayType()
enceinte.displayVolts()

