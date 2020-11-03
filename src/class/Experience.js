export default class Experience {

    constructor(name, date_debut, date_fin, diploma, description, location){

        this._name = name;
        this._date_debut = date_debut;
        this._date_fin = date_fin;
        this._diploma = diploma;
        this._description = description;
        this._location = location

    }

    get name(){ return this._name}
    get date_debut() {return this._date_debut}
    get date_fin() {return this._date_fin}
    get diploma() {return this._diploma}
    get description() {return this._description}
    get location() {return this._location}

    set name(value){  this._name = value}
    set date_debut(value) { this._date_debut = value}
    set date_fin(value) { this._date_fin = value}
    set diploma(value) {this._diploma = value}
    set description(value) { this._description = value}
    set location(value) {this._location = location}


}
