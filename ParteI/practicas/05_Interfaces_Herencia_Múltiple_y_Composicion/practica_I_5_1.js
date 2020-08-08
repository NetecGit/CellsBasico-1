// 1. Declarar funciones constructoras base para composición

function Superheroe(alias) {
    this.alias = alias;
}

function Personaje(nombre, iniciales, autor, frase) {
    this.nombre = nombre;
    this.iniciales = iniciales;
    this.autor = autor;
    this.frase = frase;
}

function Alienigena(planeta) {
    this.planeta = planeta;
}

function Mago(hechizo) {
    this.hechizo = hechizo;
}

function Caballero(arma, caracteristica) {
    this.arma = arma;
    this.caracteristica = caracteristica;
}

// 2. Declarar funciones constructoras que usen composición

function Aquaman(alias) {
    this.Superheroe = new Superheroe(alias);

    Object.defineProperty(this, "alias", {
        get: function() {
            return this.Superheroe.alias;
        }
    });

    this.habla = function(mensaje, destino) {
        var discurso = "";
        if (destino) {
            discurso = destino.alias + ", " + mensaje;
        } else {
            discurso = mensaje;
        }
        console.log(this.alias + ' -> "' + discurso + '"');
    }

    this.piensa = function(mensaje) {
        console.log(this.alias + ' ***' + mensaje + '***')
    }
}


function Superman(alias, edad) {
    this.Superheroe = new Superheroe(alias);
    this.edad = edad;

    Object.defineProperty(this, "alias", {
        get: function() {
            return this.Superheroe.alias;
        }
    });

    this.habla = function(mensaje, destino) {
        var discurso = "";
        if (destino) {
            discurso = destino.alias + ' === ' + this.alias + ' ---> "' + mensaje + '"';
        } else {
            discurso = this.alias + ' -> "';
            if (this.edad > 5) {
                discurso += "Bla";
            } else {
                discurso += "Bla Bla Bla";
            }
            discurso += ' ' + mensaje + '"';
        }
        console.log(discurso);
    }

    this.piensa = function(mensaje) {
        console.log(this.Superheroe.alias + ' ***' + mensaje + '***');
    }
}

// 3. Trabajando con un objeto compuesto por varios objetos

function Superman(alias, edad, nombre, iniciales, autor, frase) {
    this.Superheroe = new Superheroe(alias);
    this.Personaje = new Personaje(nombre, iniciales, autor, frase);
    this.edad = edad;

    Object.defineProperty(this, "alias", {
        get: function() {
            return this.Superheroe.alias;
        }
    });

    Object.defineProperty(this, "nombre", {
        get: function() {
            return this.Personaje.nombre;
        }
    });

    Object.defineProperty(this, "score", {
        get: function() {
            return this.Personaje.score;
        },
        set: function(val) {
            this.Personaje.score = val;
        }
    });

    Object.defineProperty(this, "autor", {
        get: function() {
            return this.Personaje.autor;
        },
        set: function(val) {
            this.Personaje.autor = val;
        }
    });

    Object.defineProperty(this, "frase", {
        get: function() {
            return this.Personaje.frase;
        },
        set: function(val) {
            this.Personaje.frase = val;
        }
    });

    this.habla = function(mensaje, destino) {
        var discurso = "";
        if (destino) {
            discurso = destino.alias + ' === ' + this.alias +
                ' ---> "' + mensaje + '"';
        } else {
            discurso = this.alias +
                ' -> "';
            if (this.edad > 5) {
                discurso += "Bla";
            } else {
                discurso += "Bla Bla";
            }
            discurso += ' ' + mensaje + '"';
        }
        console.log(discurso);
    }

    this.piensa = function(mensaje) {
        console.log(this.alias +
            ' ***' + mensaje + '***');
    }
    this.dibuja = function(autor, frase) {
        this.autor = autor;
        this.frase = frase;
        console.log("Dibujando Superman " + this.nombre +
            " por autor: " + this.autor +
            ", frase: " + this.frase);
    }

    this.cambiar = function(autor, frase) {
        this.autor = autor;
        this.frase = frase;
        console.log("Dibujando Superman " + this.nombre +
            "  autor: " + this.autor +
            ", frase: " + this.frase);
    }

    this.convive = function(otro) {
        return ((this.autor == otro.autor) && (this.frase == otro.frase));
    }

    this.createAlien = function(planeta) {
        this.alien = new Alienigena(planeta);

        Object.defineProperty(this, "planeta", {
            get: function() {
                return this.alien.planeta;
            },
            set: function(val) {
                this.alien.planeta = val;
            }
        });

        this.aparece = function() {
            console.log("Yo soy " + this.nombre +
                " y vengo del planeta " + this.planeta);
        }

        this.desaparecer = function() {
            console.log(this.nombre + " desaparece.");
        }
    }

    this.createMago = function(hechizo) {
        this.Mago = new Mago(hechizo);

        Object.defineProperty(this, "hechizo", {
            get: function() {
                return this.Mago.hechizo;
            },
            set: function(val) {
                this.Mago.hechizo = val;
            }
        });

        this.desaparecerAlien = function(alien) {
            console.log(this.nombre + " usa su " +
                this.hechizo + " para hacer el  alien de " +
                alien.planeta + " desaparecer.");
        }
    }
    this.createCaballero = function(arma, caracteristica) {
        this.Caballero = new Caballero(arma, caracteristica);

        Object.defineProperty(this, "arma", {
            get: function() {
                return this.Caballero.arma;
            },
            set: function(val) {
                this.Caballero.arma = val;
            }
        });

        Object.defineProperty(this, "caracteristica", {
            get: function() {
                return this.Caballero.caracteristica;
            },
            set: function(val) {
                this.Caballero.caracteristica = val;
            }
        });

        this.escribeArma = function() {
            console.log(this.nombre + " desenfunda su espada.");
            console.log("El arma: " + this.arma +
                ". siempre: " + this.caracteristica);
        };

        this.sacaArma = function(target) {
            this.escribeArma();
            if (target) {
                console.log("La espada apunta a un alien de " + target.planeta);
            }
        }
    }
}



var SupermanAlien = function(alias, edad, nombre, iniciales, autor, frase, planeta) {
    var alien = new Superman(alias, edad, nombre, iniciales, autor, frase);
    alien.createAlien(planeta);
    return alien;
}



var SupermanMago = function(alias, edad, nombre, iniciales, autor, frase, hechizo) {
    var Mago = new Superman(alias, edad, nombre, iniciales, autor, frase);
    Mago.createMago(hechizo);
    return Mago;
}



var SupermanCaballero = function(alias, edad, nombre, iniciales, autor, frase, arma, caracteristica) {
    var Caballero = new Superman(alias, edad, nombre, iniciales, autor, frase);
    Caballero.createCaballero(arma, caracteristica);
    return Caballero;
}


// Trabajando con instancias compuestas de varios objetos
var aqua = new Aquaman("Arthur");
var mago = new Aquaman("Merlin");

// console.log ("------------------>Aquaman es un heroe?", aqua instanceof Superheroe);

aqua.habla("Hola, mi nombre es " + aqua.alias);
aqua.habla("¿Comó estas?", mago);
mago.piensa("¿Qué estará pensando");


var ss = new Superman("Hombre de acero", 81, "Clark Kent", "S", "Jerry Siegel & Joe Shuter", "¡voy a cambiar el mundo!");
ss.habla("Hola, mi nombre es " + ss.nombre);
aqua.habla("Hola " + ss.alias);

var alienigena = SupermanAlien("Alienigena", 8, "Mr. Alienigena", "AQ", "Mort Wisinger & Paul Norris", "¡Realmente estás loco!", 'Krypton');
if (alienigena.convive(ss)) {
    alienigena.cambiar(ss.autor + 20, ss.frase + 20);
}
alienigena.aparece();



var mago = new SupermanMago("Gandalf", 275, "Mr. Gandalf", "G", "J.R.R. Tolkien", "¡Un mago nunca llega tarde, ni pronto, llega exactamente cuando se lo propone!", "¡Badabin Badaboom!");
mago.dibuja(mago.autor, mago.frase);
mago.desaparecerAlien(alienigena);
alienigena.aparece();


// (alias, edad, nombre, iniciales, autor, frase, arma, caracteristica) {
var cc = new SupermanCaballero("Lancelot", 820, "Sir. Lancelot", "Cl", "Chrétien de Troyes", "Mi espada pide sangre", "espada", "leal");
cc.dibuja(cc.autor, cc.frase);
cc.sacaArma(alienigena);

alienigena.piensa("Debo ser amigable o estoy muerto...");
alienigena.habla("Encantando de conocerlo, señor", cc);