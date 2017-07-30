export class Poll {
    public _id: string;
    public question: string = '';
    public responses: Array<any>;
    public createdAt: Date = new Date();
    public updatedAt: Date = new Date();
}
