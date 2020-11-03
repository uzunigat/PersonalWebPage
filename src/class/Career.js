export default class Career {

    constructor(name, date_debut, date_fin, project, description, location) {

        this._name = name;
        this._date_debut = date_debut;
        this._date_fin = date_fin;
        this._project = project;
        this._description = description;
        this._location = location

    }

    get name(){ return this._name}
    get date_debut() {return this._date_debut}
    get date_fin() {return this._date_fin}
    get project() {return this._project}
    get description() {return this._description}
    get location() {return this._location}

    set name(value){  this._name = value}
    set date_debut(value) { this._date_debut = value}
    set date_fin(value) { this._date_fin = value}
    set project(value) {this._project = value}
    set description(value) { this._description = value}
    set location(value) {this._location = location}



}