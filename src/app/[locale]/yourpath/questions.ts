export type QuestionNode = {
    id: number;
    title: string;
    content: string;
    steps?: StepNode[];
    image?: string;
    tips?: string[];
    links?: LinkNode[];
};

export type StepNode = {
    title: string;
    next_question_id: number;
};

export type LinkNode = {
    title: string;
    url: string;
};


export function findQuestionById(id: number) {
    return questions.find((question) => question.id == id);
}

export const questions: QuestionNode[] = [
    {
        id: 0,
        title: "Welcome to Pathways",
        content: "This guide will help you navigate your options in Germany. Whether you want to earn money, continue your education, or learn German, we have resources and step-by-step guidance for you. Choose the path that best fits your current situation and goals.",
        steps: [
            { title: "Earn Money – Work & Career", next_question_id: 1 },
            { title: "Get / Upgrade a School Certificate", next_question_id: 2 },
            { title: "Learn German", next_question_id: 3 },
        ],
        tips: ["You can explore multiple paths - they are not mutually exclusive", "Many paths complement each other (e.g., learning German while working), Take your time to read through each option before deciding"],
        links: [{ title: "Chip", url: "https://www.chip.de/" }],
        image: "/1.png",
    },
    {
        id: 1,
        title: "Co lubisz robić w wolnym czasie?",
        steps: [
            { title: "Czytać książki", next_question_id: 5 },
            { title: "Gry komputerowe", next_question_id: 6 }
        ],
        image: "/1.png",
        content: ""
    },
    {
        id: 2,
        title: "Jaki jest Twój ulubiony kolor?",
        steps: [
            { title: "Niebieski", next_question_id: 5 },
            { title: "Zielony", next_question_id: 7 }
        ],
        image: "/1.png",
        content: ""
    },
    {
        id: 3,
        title: "Wolisz lato czy zimę?",
        steps: [
            { title: "Lato", next_question_id: 8 },
            { title: "Zima", next_question_id: 9 }
        ],
        image: "/1.png",
        content: ""
    },
    {
        id: 4,
        title: "Jaka jest Twoja ulubiona potrawa?",
        steps: [
            { title: "Pizza", next_question_id: 9 },
            { title: "Kuchnia domowa", next_question_id: 10 }
        ],
        content: ""
    },
    {
        id: 5,
        title: "Wolisz książki papierowe czy ebooki?",
        steps: [
            { title: "Papierowe", next_question_id: 11 }
        ],
        content: ""
    },
    {
        id: 6,
        title: "Gry: singleplayer czy multiplayer?",
        steps: [
            { title: "Singleplayer", next_question_id: 11 },
            { title: "Multiplayer", next_question_id: 12 }
        ],
        content: ""
    },
    {
        id: 7,
        title: "Czy uprawiasz sport?",
        steps: [
            { title: "Tak, regularnie", next_question_id: 12 },
            { title: "Okazjonalnie", next_question_id: 13 }
        ],
        content: ""
    },
    {
        id: 8,
        title: "W góry czy nad morze?",
        steps: [
            { title: "Góry", next_question_id: 13 },
            { title: "Morze", next_question_id: 14 }
        ],
        content: ""
    },
    {
        id: 9,
        title: "Kawa czy herbata?",
        steps: [
            { title: "Kawa", next_question_id: 14 }
        ],
        content: ""
    },
    {
        id: 10,
        title: "Słodycze czy słone przekąski?",
        content: ""
    },
    {
        id: 11,
        title: "Wolisz wieczór filmowy czy wyjście na miasto?",
        content: ""
    },
    {
        id: 12,
        title: "Czy lubisz podróżować?",
        content: ""
    },
    {
        id: 13,
        title: "Wolisz planować czy improwizować?",
        content: ""
    },
    {
        id: 14,
        title: "Czy masz jakieś zwierzęta?",
        content: ""
    }
];
