export class Poll {
    public _id: string;
    public _user;
    public question: string = '';
    public option1: string;
    public option2: string;
    public option3: string;
    public option4: string;
    public option1votes: number;
    public option2votes: number;
    public option3votes: number;
    public option4votes: number;
    public createdAt: Date = new Date();
    public updatedAt: Date = new Date();
}
