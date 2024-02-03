export class Appareil{
    name:String;
    description:string[] |undefined;
    isOn:boolean;
    constructor(name: String , isOn:boolean) {
        this.name = name;
        this.isOn = isOn;
}
}