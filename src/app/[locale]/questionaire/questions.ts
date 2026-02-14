export type QuestionNode = {
    id: QuestionID,
    title: string;
    answers: AnswerNode[] | null;
    image?: string;
};

export type AnswerNode = {
    title: string;
    next_question_id?: QuestionID,
    result?: number;
    color?: Colors;
};

export type ResultNode = {
    id: number;
    title: string;
    content: string;
    image?: string;
    links?: string[];
};

export enum Colors {
    BLUE = "btn-info",
    GREEN = "btn-success",
    RED = "btn-error",
    YELLOW = "btn-warning",
    PURPLE = "btn-primary",
    TEAL = "btn-accent",
    PINK = "btn-secondary",
}

export enum QuestionID {
    TODO,
    START
}

export function findQuestionById(id: number) {
    return questions.find((question) => question.id == id);
}

export function getShortestPath(id: number) {
    const question = findQuestionById(id);
    if (question == null || question.answers == null) return -1;
    // let null_c
    for (const answers of question.answers) {
        if (answers.next_question_id == null) {
            return 1;
        }
        else {
            console.log(getShortestPath(answers.next_question_id));
        }

    }
}

export const questions: QuestionNode[] = [
    {
        "id": QuestionID.START,
        "title": "What is most important for you",
        "answers": [
            { "title": "I don't know yet", "next_question_id": QuestionID.TODO, color: Colors.BLUE },
            { "title": "I'd like to work and earn money", "next_question_id": QuestionID.TODO, color: Colors.GREEN },
            { "title": "I need a School certificate", "next_question_id": QuestionID.TODO, color: Colors.PURPLE },
            { "title": "I have to learn German", "next_question_id": QuestionID.TODO, color: Colors.YELLOW }
        ],
        image: "/1.png"
    },

];

export const results: ResultNode[] = [{
    "id": 1,
    title: "",
    content: ""
}];