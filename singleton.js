class Logger {

    static instance;

    constructor() {
        if (Logger.instance) {
            return Logger.instance
        }
        this.niveau = "DEBUG";
        Logger.instance = this;
    }

    debug(message) {

        if (this.niveau === "DEBUG") {

            console.log("" + " DEBUG - " + message)
        }
    }

    info(message) {

        if (this.niveau === "INFO" || this.niveau === "ERROR") {

            console.log("" + " INFO - " + message)
        }
    }

    error(message) {
        
        console.log("" + " ERROR - " + message)
    }

    setNiveau(niveau) {
        this.niveau = niveau;
    }
}

const logger1 = new Logger()
const logger2 = new Logger()
logger1.setNiveau("DEBUG")
logger1.debug("test1")
logger1.info("test2")
console.log(logger1 === logger2)
