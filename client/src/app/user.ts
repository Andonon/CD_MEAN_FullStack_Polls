export class User {
    public _id: string;
    public name: string = '';
    public email: string;
    public polls: Array<any>;
    public createdAt: Date = new Date();
    public updatedAt: Date = new Date();
constructor(){}
}