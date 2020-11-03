export default class Abilities{

    constructor (name, level){

        this._name = name;
        this._level = level;

    }

    get name(){ return this._name}
    get level(){ return this._level}

    set name(value) { this._name = value}
    set level(value) { this._level = value}

}