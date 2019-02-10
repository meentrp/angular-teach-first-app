export class Card {
    firstName:string;
    lastName:string;
    vote:number;
    constructor(
        firstName:string,
        lastName:string,
        vote:number
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.vote  = vote;
        }
        get name():string{
            return this.firstName+' '+this.lastName;
        }
    }

