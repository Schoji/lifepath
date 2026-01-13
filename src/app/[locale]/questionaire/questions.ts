export type QuestionNode = {
    id: number;
    title: string;
    answers: AnswerNode[] | null;
    image?: string;
};

export type AnswerNode = {
    title: string;
    next_question_id?: number;
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
        "id": 0,
        "title": "ile masz lat",
        "answers": [
            { "title": "1", "next_question_id": 1, color: Colors.BLUE },
            { "title": "20", "next_question_id": 2, color: Colors.GREEN },
            { "title": "4", "next_question_id": 3, color: Colors.PURPLE },
            { "title": "6", "next_question_id": 4, color: Colors.YELLOW }
        ],
        image: "/1.png"
    },
    {
        "id": 1,
        "title": "Co lubisz robić w wolnym czasie?",
        "answers": [
            { "title": "Czytać książki", "next_question_id": 5 },
            { "title": "Gry komputerowe", "next_question_id": 6 },
            { "title": "Spacerować" }
        ],
        image: "/1.png"
    },
    {
        "id": 2,
        "title": "Jaki jest Twój ulubiony kolor?",
        "answers": [
            { "title": "Niebieski", "next_question_id": 5 },
            { "title": "Zielony", "next_question_id": 7 },
            { "title": "Czarny" }
        ],
        image: "/1.png"
    },
    {
        "id": 3,
        "title": "Wolisz lato czy zimę?",
        "answers": [
            { "title": "Lato", "next_question_id": 8 },
            { "title": "Zima", "next_question_id": 9 },
            { "title": "Oba" }
        ],
        image: "/1.png"
    },
    {
        "id": 4,
        "title": "Jaka jest Twoja ulubiona potrawa?",
        "answers": [
            { "title": "Pizza", "next_question_id": 9 },
            { "title": "Kuchnia domowa", "next_question_id": 10 },
            {
                "title": "Coś słodkiego", result: 1
            }
        ],
    },
    {
        "id": 5,
        "title": "Wolisz książki papierowe czy ebooki?",
        "answers": [
            { "title": "Papierowe", "next_question_id": 11 },
            {
                "title": "Ebooki", result: 1
            },
            {
                "title": "Obojętnie", result: 1
            }
        ],
    },
    {
        "id": 6,
        "title": "Gry: singleplayer czy multiplayer?",
        "answers": [
            { "title": "Singleplayer", "next_question_id": 11 },
            { "title": "Multiplayer", "next_question_id": 12 },
            {
                "title": "Oba rodzaje", result: 1
            }
        ],
    },
    {
        "id": 7,
        "title": "Czy uprawiasz sport?",
        "answers": [
            { "title": "Tak, regularnie", "next_question_id": 12 },
            { "title": "Okazjonalnie", "next_question_id": 13 },
            {
                "title": "Nie", result: 1
            }
        ],
    },
    {
        "id": 8,
        "title": "W góry czy nad morze?",
        "answers": [
            { "title": "Góry", "next_question_id": 13 },
            { "title": "Morze", "next_question_id": 14 },
            {
                "title": "Nie mam zdania", result: 1
            }
        ],
    },
    {
        "id": 9,
        "title": "Kawa czy herbata?",
        "answers": [
            { "title": "Kawa", "next_question_id": 14 },
            {
                "title": "Herbata", result: 1
            },
            {
                "title": "Żadna", result: 1
            }
        ],
    },
    {
        "id": 10,
        "title": "Słodycze czy słone przekąski?",
        "answers": [
            { "title": "Słodycze" },
            { "title": "Słone" },
            { "title": "Obydwoje" }
        ],
    },
    {
        "id": 11,
        "title": "Wolisz wieczór filmowy czy wyjście na miasto?",
        "answers": [
            { "title": "Film w domu" },
            { "title": "Wyjście" },
            { "title": "Zależy od nastroju" }
        ],
    },
    {
        "id": 12,
        "title": "Czy lubisz podróżować?",
        "answers": [
            { "title": "Tak, bardzo" },
            { "title": "Czasami" },
            { "title": "Nie przepadam" }
        ],
    },
    {
        "id": 13,
        "title": "Wolisz planować czy improwizować?",
        "answers": [
            { "title": "Planować" },
            { "title": "Improwizować" },
            { "title": "Mieszanka" }
        ],
    },
    {
        "id": 14,
        "title": "Czy masz jakieś zwierzęta?",
        "answers": [
            { "title": "Tak, mam" },
            { "title": "Kiedyś miałem" },
            { "title": "Nigdy nie miałem" }
        ],
    }
];

export const results: ResultNode[] = [{
    "id": 1,
    title: "",
    content: ""
}];