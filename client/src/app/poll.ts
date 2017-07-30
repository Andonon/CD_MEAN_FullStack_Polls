export class Poll {
    public _id: string;
    public question: string = '';
    public option1: string;
    public option2: string;
    public option3: string;
    public option4: string;
    public createdAt: Date = new Date();
    public updatedAt: Date = new Date();
}
