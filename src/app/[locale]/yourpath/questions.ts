export type QuestionNode = {
    id: QuestionID;
    title: string;
    content: string;
    steps?: StepNode[];
    image: string;
    tips?: string[];
    links?: LinkNode[];
};

export type StepNode = {
    title: string;
    next_question_id: QuestionID;
};

export type LinkNode = {
    title: string;
    url: string;
};

export type QuestionID =
    "START" | "EARN_MONEY" | "NO_IDEA" | "DEMAND_IN_MV" | "BOP_INTERNSHIP" | "TODO";


export function findQuestionById(id: string) {
    return questions.find((question) => question.id == id);
}

export const questions: QuestionNode[] = [
    {
        id: "START",
        title: "main.title",
        content: "main.description",
        tips: ["main.tips.explore_multiple_paths", "main.tips.paths_complement_eachother", "main.tips.take_your_time"],
        steps: [
            { title: "main.steps.earn_money", next_question_id: "EARN_MONEY" },
            { title: "main.steps.get_school_certificate", next_question_id: "TODO" },
            { title: "main.steps.learn_german", next_question_id: "TODO" },
        ],
        image: "/1.png",
    },
    {
        id: "EARN_MONEY",
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
            { title: "earn_money.links.check-u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" },
            { title: "earn_money.links.berufe_tv", url: "https://www.arbeitsagentur.de/berufe-tv-filme-videos" },
            { title: "earn_money.links.federal_employment_agency", url: "https://www.youtube.com/" },
            { title: "earn_money.links.ausbildung", url: "https://www.youtube.com/" },
            { title: "earn_money.links.meinestadt", url: "https://www.youtube.com/" },
            { title: "earn_money.links.jba", url: "https://www.youtube.com/" },
            { title: "earn_money.links.migration_councelling", url: "https://www.youtube.com/" },

        ],
        steps: [
            { title: "earn_money.steps.no_idea", next_question_id: "NO_IDEA" },
            { title: "earn_money.steps.have_idea", next_question_id: "TODO" }
        ],
        image: "/career_paths.png",
    },
    {
        id: "NO_IDEA",
        title: "no_idea.title",
        content: "no_idea.description",
        tips: [
            "no_idea.tips.job_centers_advice",
            "no_idea.tips.career_guidance_websites",
            "no_idea.tips.several_tests",
            "earn_money.tips.jobs_at_mecklenburg",
            "no_idea.tips.trial_and_error",
            "earn_money.tips.german_skills",
            "no_idea.tips.check_costs_involved",
            "no_idea.tips.be_wary_jobs",
            "no_idea.tips.use_chatgpt"
        ],
        links: [
            { title: "no_idea.links.orientation_careers", url: "https://www.arbeitsagentur.de/bildung/berufe-und-wege/berufsfelder" },
            { title: "no_idea.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" },
            { title: "earn_money.links.berufe_tv", url: "https://www.arbeitsagentur.de/berufe-tv-filme-videos" },
            { title: "no_idea.links.arbeits_agentur", url: "https://www.arbeitsagentur.de/bildung/noch-planlos" },
            { title: "no_idea.links.jugend_berufs_agentur", url: "https://www.jugendberufsagentur.de" },
            { title: "no_idea.links.jobcenter_digital", url: "https://www.jobcenter.digital" },
            { title: "no_idea.links.jmd4you", url: "https://www.jmd4you.de/" },
            { title: "no_idea.links.arbeits_agentur_students", url: "https://www.arbeitsagentur.de/bildung/noch-planlos/erfahrungsbericht-berufsberatung-wie-laeuft-das-ab" },
            { title: "no_idea.links.berufe_tv", url: "https://www.berufe.tv/" },
            { title: "no_idea.links.azubi_de", url: "https://www.azubi.de/beruf" },
            { title: "no_idea.links.berufe_net", url: "https://web.arbeitsagentur.de/berufenet/" },
            { title: "no_idea.links.planet_beruf", url: "https://www.planet-beruf.de/" },

        ],
        steps: [
            { title: "no_idea.steps.what_workers_demand", next_question_id: "DEMAND_IN_MV" },
            { title: "no_idea.steps.ask_your_school", next_question_id: "TODO" },
            { title: "no_idea.steps.find_which_occupation", next_question_id: "TODO" },
            { title: "no_idea.steps.orientation_test", next_question_id: "TODO" },
            { title: "no_idea.steps.search_for_companies", next_question_id: "TODO" },
        ],
        image: "/1.png",
    },
    {
        id: "DEMAND_IN_MV",
        title: "demand_in_mv.title",
        content: "demand_in_mv.description",
        tips: [
            "demand_in_mv.tips.entry_level_sectors",
            "demand_in_mv.tips.rural_opportunities",
            "no_idea.tips.trial_and_error",
            "earn_money.tips.german_skills",
            "no_idea.tips.job_centers_advice",
            "no_idea.tips.check_costs_involved",
            "no_idea.tips.be_wary_jobs",
            "earn_money.tips.low_age_opportunity",
            "no_idea.tips.career_guidance_websites",
            "no_idea.tips.several_tests",
            "no_idea.tips.use_chatgpt"
        ],
        links: [
            { title: "no_idea.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" },
            { title: "demand_in_mv.links.discover_tests", url: "https://www.arbeitsagentur.de/bildung/noch-planlos#Mein-Weg-zum-passenden-Beruf-Schritt-f%C3%BCr-Schritt" },
            { title: "demand_in_mv.links.job_exchange", url: "https://www.arbeitsagentur.de/jobsuche/" },
            { title: "no_idea.links.azubi_de", url: "https://www.ausbildung.de/" },
            { title: "demand_in_mv.links.meinestadt", url: "https://www.meinestadt.de/" },
            { title: "demand_in_mv.links.check_u_alt", url: "https://www.arbeitsagentur.de/bildung/ausbildung/check-u" },
            { title: "earn_money.links.berufe_tv", url: "https://www.arbeitsagentur.de/berufe-tv-filme-videos" },
            { title: "no_idea.links.jugend_berufs_agentur", url: "https://www.jugendberufsagentur.de" },
            { title: "no_idea.links.jobcenter_digital", url: "https://www.jobcenter.digital" },
            { title: "no_idea.links.jmd4you", url: "https://www.jmd4you.de/" },
            { title: "no_idea.links.arbeits_agentur_students", url: "https://www.arbeitsagentur.de/bildung/noch-planlos/erfahrungsbericht-berufsberatung-wie-laeuft-das-ab" }
        ],
        steps: [
            { title: "demand_in_mv.steps.bop_internship", next_question_id: "BOP_INTERNSHIP" },
            { title: "demand_in_mv.steps.bvj_year", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.bvj_s_language", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.pre_vocational_prog", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.entry_qualification", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.dual_pre_vocational", next_question_id: "TODO" },
            { title: "no_idea.steps.ask_your_school", next_question_id: "TODO" },
            { title: "no_idea.steps.find_which_occupation", next_question_id: "TODO" },
            { title: "no_idea.steps.orientation_test", next_question_id: "TODO" },
            { title: "no_idea.steps.search_for_companies", next_question_id: "TODO" }
        ],
        image: "/1.png",
    },
    {
        id: "BOP_INTERNSHIP",
        title: "bop_internship.title",
        content: "bop_internship.description",
        tips: [
            "bop_internship.tips.duration",
            "bop_internship.tips.free_of_charge",
            "bop_internship.tips.remuneration_travel",
            "bop_internship.tips.prerequisite",
            "bop_internship.tips.important_job_center",
            "no_idea.tips.use_chatgpt"
        ],
        links: [
            { title: "no_idea.links.arbeits_agentur_students", url: "https://www.arbeitsagentur.de/bildung/noch-planlos/erfahrungsbericht-berufsberatung-wie-laeuft-das-ab" },
            { title: "bop_internship.links.fed_agency_bop", url: "https://www.arbeitsagentur.de/bildung/praktikum/berufsorientierungspraktikum" },
            { title: "bop_internship.links.vplt_info", url: "https://www.vplt.org/wiki/berufsorientierungspraktikum-der-bundesagentur-fuer-arbeit/" },
            { title: "no_idea.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" }
        ],
        steps: [
            { title: "demand_in_mv.steps.dual_pre_vocational", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.bvj_year", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_appointment", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_interview", next_question_id: "TODO" },
            { title: "bop_internship.steps.find_company", next_question_id: "TODO" },
            { title: "bop_internship.steps.apply_bop", next_question_id: "TODO" },
            { title: "bop_internship.steps.wait_approval", next_question_id: "TODO" },
            { title: "bop_internship.steps.search_vacancies_dual", next_question_id: "TODO" },
            { title: "no_idea.steps.ask_your_school", next_question_id: "TODO" },
            { title: "no_idea.steps.search_for_companies", next_question_id: "TODO" }
        ],
        image: "/1.png",
    },
];
