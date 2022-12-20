import { IAnswer } from "./ianswer";

export interface IQuestion {
    number: number;
    question: string;
    answers: Array<IAnswer>;
}
