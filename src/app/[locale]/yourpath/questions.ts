export type QuestionNode = {
    id: number;
    title: string;
    content: string;
    steps?: StepNode[];
    image: string;
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
        title: "main.title",
        content: "main.description",
        tips: ["main.tips.explore_multiple_paths", "main.tips.paths_complement_eachother", "main.tips.take_your_time"],
        steps: [
            { title: "main.steps.earn_money", next_question_id: 1 },
            { title: "main.steps.get_school_certificate", next_question_id: 2 },
            { title: "main.steps.learn_german", next_question_id: 3 },
        ],
        image: "/1.png",
    },
    {
        id: 1,
        title: "earn_money.title",
        content: "earn_money.description",
        tips: [
            "earn_money.tips.no_need_for_plan",
            "earn_money.tips.practical_experience",
            "earn_money.tips.german_skills",
            "earn_money.tips.low_age_opportunity",
            "earn_money.tips.jobs_at_mecklenburg",
            "earn_money.tips.without_contract",
            "earn_money.tips.private_offers",
            "earn_money.tips.if_unsure",
        ],
        links: [
            { title: "earn_money.links.check-u", url: "https://www.chip.de/" },
            { title: "earn_money.links.berufe_tv", url: "https://www.youtube.com/" },
            { title: "earn_money.links.federal_employment_agency", url: "https://www.youtube.com/" },
            { title: "earn_money.links.ausbildung", url: "https://www.youtube.com/" },
            { title: "earn_money.links.meinestadt", url: "https://www.youtube.com/" },
            { title: "earn_money.links.jba", url: "https://www.youtube.com/" },
            { title: "earn_money.links.migration_councelling", url: "https://www.youtube.com/" },

        ],
        image: "/career_paths.png",
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
];
