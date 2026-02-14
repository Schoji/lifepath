export type QuestionNode = {
    id: QuestionID,
    title: string;
    answers: AnswerNode[] | null;
    image?: string;
};

export type AnswerNode = {
    title: string;
    next_question_id?: QuestionID | StationID,
    result?: number;
    color?: Colors;
};

export type Station = {
    id: StationID,
    title: string;
    content: string;
    steps?: StationStepNode[];
    image: string;
    tips?: string[];
    links?: StationLinkNode[];
};

export type StationStepNode = {
    title: string;
    next_question_id?: QuestionID | StationID;
};

export type StationLinkNode = {
    title: string;
    url: string;
    description?: string;
};

export enum Colors {
    BLUE = "bg-blue-300 !text-zinc-900 border-blue-300 hover:bg-blue-400 hover:border-blue-400",
    GREEN = "bg-emerald-300 !text-zinc-900 border-emerald-300 hover:bg-emerald-400 hover:border-emerald-400",
    RED = "bg-rose-300 !text-zinc-900 border-rose-300 hover:bg-rose-400 hover:border-rose-400",
    YELLOW = "bg-amber-300 !text-zinc-900 border-amber-300 hover:bg-amber-400 hover:border-amber-400",
    PURPLE = "bg-violet-300 !text-zinc-900 border-violet-300 hover:bg-violet-400 hover:border-violet-400",
    TEAL = "bg-teal-300 !text-zinc-900 border-teal-300 hover:bg-teal-400 hover:border-teal-400",
    PINK = "bg-pink-300 !text-zinc-900 border-pink-300 hover:bg-pink-400 hover:border-pink-400",
    SKY = "bg-sky-300 !text-zinc-900 border-sky-300 hover:bg-sky-400 hover:border-sky-400",
    INDIGO = "bg-indigo-300 !text-zinc-900 border-indigo-300 hover:bg-indigo-400 hover:border-indigo-400",
    LIME = "bg-lime-300 !text-zinc-900 border-lime-300 hover:bg-lime-400 hover:border-lime-400",
    ORANGE = "bg-orange-300 !text-zinc-900 border-orange-300 hover:bg-orange-400 hover:border-orange-400",
    CYAN = "bg-cyan-300 !text-zinc-900 border-cyan-300 hover:bg-cyan-400 hover:border-cyan-400",
}

export enum QuestionID {
    TODO,
    START,
    WHAT_FITS_YOU_BEST,
    WHAT_KIND_OF_GERMAN,
    FROM_WHERE_CERTIFICATE,
    WHAT_IS_MISSING_FOR_WORK,
    WHAT_DO_YOU_WANT_TO_DO,
    WHAT_HAPPENED_AFTER_TRYING,
    WHAT_LEVEL_DO_YOU_NEED,
    WHAT_STEP_IS_MISSING,
    READY_TO_SEARCH
}

export enum StationID {
    SKILLS_AND_STRENGHTS,
    INTEGRATION_COURSES,
    JOB_RELATED_LANGUAGE_COURSES,
    LOWER_SECONDARY_SCHOOL_CERTIFICATE,
    INTERMEDIATE_SECONDARY_SCHOOL_CERTIFICATE,
    ABENDSCHULE_KOLLEG,
    RECOGNITION_OF_CERTIFICATES,
    GERMAN_SCHOOL_PATHWAY,
    UKRAINIAN_SCHOOL_QUALIFICATION,
    UNIVERSITY_PATH_GERMANY,
    BVJ_BVB_PREPARATION,
    CAREER_EXPLORATION_TRYOUTS,
    ASK_COMPANY_INTERNSHIP,
    APPRENTICESHIP_APPLICATION,
    HOW_TO_APPLY_APPRENTICESHIP,
    DUAL_APPRENTICESHIP_BASICS,
    FIND_JOB,
    YOU_DONT_HAVE_TO_DECIDE
}

export function findQuestionById(id: number) {
    return questions.find((question) => question.id == id);
}

export function findStationById(id: number) {
    return stations.find((station) => station.id == id);
}

export function getShortestPath(id: number) {
    // Recompute from current graph on each call, so newly added path ends are reflected.
    const inStack = new Set<string>();
    const memo = new Map<string, number>();

    const dfsQuestion = (question: QuestionNode): number => {
        const key = `q:${question.id}`;
        if (memo.has(key)) return memo.get(key)!;
        if (inStack.has(key)) return Infinity;

        inStack.add(key);

        // A question without answers is treated as terminal.
        if (question.answers == null || question.answers.length === 0) {
            inStack.delete(key);
            memo.set(key, 1);
            return 1;
        }

        let best = Infinity;
        for (const answer of question.answers) {
            if (answer.next_question_id == null) {
                // Path can end at this question.
                best = Math.min(best, 1);
                continue;
            }

            const nextDistance = dfsByIdAmbiguous(answer.next_question_id);
            if (nextDistance !== Infinity) {
                best = Math.min(best, 1 + nextDistance);
            }
        }

        inStack.delete(key);
        memo.set(key, best);
        return best;
    };

    const dfsStation = (station: Station): number => {
        const key = `s:${station.id}`;
        if (memo.has(key)) return memo.get(key)!;
        if (inStack.has(key)) return Infinity;

        inStack.add(key);

        // A station without steps is treated as terminal.
        if (station.steps == null || station.steps.length === 0) {
            inStack.delete(key);
            memo.set(key, 1);
            return 1;
        }

        let best = Infinity;
        for (const step of station.steps) {
            if (step.next_question_id == null) {
                // Path can end at this station.
                best = Math.min(best, 1);
                continue;
            }

            const nextDistance = dfsByIdAmbiguous(step.next_question_id);
            if (nextDistance !== Infinity) {
                best = Math.min(best, 1 + nextDistance);
            }
        }

        inStack.delete(key);
        memo.set(key, best);
        return best;
    };

    // IDs of QuestionID and StationID can overlap (both numeric enums),
    // so we resolve both and keep the shortest valid branch.
    const dfsByIdAmbiguous = (nodeId: number): number => {
        const q = findQuestionById(nodeId);
        const s = findStationById(nodeId);

        let best = Infinity;
        if (q != null) best = Math.min(best, dfsQuestion(q));
        if (s != null) best = Math.min(best, dfsStation(s));
        return best;
    };

    const shortest = dfsByIdAmbiguous(id);
    return shortest === Infinity ? -1 : shortest;
}

export const questions: QuestionNode[] = [
    {
        "id": QuestionID.START,
        "title": "questions.start.title",
        "answers": [
            { "title": "questions.start.answers.unsure", "next_question_id": QuestionID.WHAT_FITS_YOU_BEST, color: Colors.INDIGO },
            { "title": "questions.start.answers.work", "next_question_id": QuestionID.WHAT_IS_MISSING_FOR_WORK, color: Colors.GREEN },
            { "title": "questions.start.answers.school_certificate", "next_question_id": QuestionID.FROM_WHERE_CERTIFICATE, color: Colors.PURPLE },
            { "title": "questions.start.answers.german_not_good_enough", "next_question_id": QuestionID.WHAT_KIND_OF_GERMAN, color: Colors.ORANGE }
        ],
        image: "/career_paths.png"
    },
    {
        "id": QuestionID.WHAT_FITS_YOU_BEST,
        "title": "questions.what_fits_you_best.title",
        "answers": [
            { "title": "questions.what_fits_you_best.answers.overwhelmed", "next_question_id": StationID.YOU_DONT_HAVE_TO_DECIDE, color: Colors.SKY },
            { "title": "questions.what_fits_you_best.answers.strengths", "next_question_id": StationID.SKILLS_AND_STRENGHTS, color: Colors.LIME },
        ],
        image: "/no_idea.png"
    },
    {
        "id": QuestionID.WHAT_KIND_OF_GERMAN,
        "title": "questions.what_kind_of_german.title",
        "answers": [
            { "title": "questions.what_kind_of_german.answers.work", "next_question_id": StationID.JOB_RELATED_LANGUAGE_COURSES, color: Colors.BLUE },
            { "title": "questions.what_kind_of_german.answers.general", "next_question_id": StationID.INTEGRATION_COURSES, color: Colors.TEAL },
        ],
        image: "/learn_german.png"
    },
    {
        "id": QuestionID.FROM_WHERE_CERTIFICATE,
        "title": "questions.from_where_certificate.title",
        "answers": [
            { "title": "questions.from_where_certificate.answers.in_germany", "next_question_id": StationID.GERMAN_SCHOOL_PATHWAY, color: Colors.INDIGO },
            { "title": "questions.from_where_certificate.answers.online_ukraine", next_question_id: StationID.UKRAINIAN_SCHOOL_QUALIFICATION, color: Colors.PINK },
            { "title": "questions.from_where_certificate.answers.uncertain", next_question_id: StationID.UKRAINIAN_SCHOOL_QUALIFICATION, color: Colors.CYAN },
        ],
        image: "/school_certificate.png"
    },
    {
        "id": QuestionID.WHAT_IS_MISSING_FOR_WORK,
        "title": "questions.what_is_missing_for_work.title",
        "answers": [
            { "title": "questions.what_is_missing_for_work.answers.german", "next_question_id": StationID.JOB_RELATED_LANGUAGE_COURSES, color: Colors.BLUE },
            { "title": "questions.what_is_missing_for_work.answers.preparation", next_question_id: StationID.BVJ_BVB_PREPARATION, color: Colors.ORANGE },
            { "title": "questions.what_is_missing_for_work.answers.recognition", next_question_id: StationID.GERMAN_SCHOOL_PATHWAY, color: Colors.PURPLE },
            { "title": "questions.what_is_missing_for_work.answers.orientation", next_question_id: StationID.CAREER_EXPLORATION_TRYOUTS, color: Colors.LIME },
        ],
        image: "/earn_money.png"
    },
    {
        "id": QuestionID.WHAT_DO_YOU_WANT_TO_DO,
        "title": "questions.what_do_you_want_to_do.title",
        "answers": [
            { "title": "questions.what_do_you_want_to_do.answers.improve_german_first", "next_question_id": StationID.INTEGRATION_COURSES, color: Colors.BLUE },
            { "title": "questions.what_do_you_want_to_do.answers.school_options", next_question_id: QuestionID.FROM_WHERE_CERTIFICATE, color: Colors.PURPLE },
            { "title": "questions.what_do_you_want_to_do.answers.try_jobs_first", next_question_id: StationID.CAREER_EXPLORATION_TRYOUTS, color: Colors.CYAN },
            { "title": "questions.what_do_you_want_to_do.answers.go_to_work", next_question_id: QuestionID.WHAT_IS_MISSING_FOR_WORK, color: Colors.ORANGE },
        ],
        image: "/have_idea.png"
    },
    {
        "id": QuestionID.WHAT_HAPPENED_AFTER_TRYING,
        "title": "questions.what_happened_after_trying.title",
        "answers": [
            { "title": "questions.what_happened_after_trying.answers.still_uncertain", "next_question_id": QuestionID.WHAT_FITS_YOU_BEST, color: Colors.SKY },
            { "title": "questions.what_happened_after_trying.answers.need_preparation", next_question_id: StationID.BVJ_BVB_PREPARATION, color: Colors.TEAL },
            { "title": "questions.what_happened_after_trying.answers.german_still_poor", next_question_id: StationID.JOB_RELATED_LANGUAGE_COURSES, color: Colors.YELLOW },
            { "title": "questions.what_happened_after_trying.answers.apply_apprenticeship", next_question_id: StationID.HOW_TO_APPLY_APPRENTICESHIP, color: Colors.PINK },
        ],
        image: "/bop_internship.png"
    },
    {
        "id": QuestionID.WHAT_LEVEL_DO_YOU_NEED,
        "title": "questions.what_level_do_you_need.title",
        "answers": [
            { "title": "questions.what_level_do_you_need.answers.study_later", "next_question_id": StationID.UNIVERSITY_PATH_GERMANY, color: Colors.INDIGO },
            { "title": "questions.what_level_do_you_need.answers.intermediate_certificate", next_question_id: StationID.INTERMEDIATE_SECONDARY_SCHOOL_CERTIFICATE, color: Colors.GREEN },
            { "title": "questions.what_level_do_you_need.answers.lower_certificate_for_work", next_question_id: StationID.LOWER_SECONDARY_SCHOOL_CERTIFICATE, color: Colors.RED },
        ],
        image: "/intermediate_certificate.png"
    },
    {
        "id": QuestionID.WHAT_STEP_IS_MISSING,
        "title": "questions.what_step_is_missing.title",
        "answers": [
            { "title": "questions.what_step_is_missing.answers.german_level_missing", "next_question_id": StationID.JOB_RELATED_LANGUAGE_COURSES, color: Colors.BLUE },
            { "title": "questions.what_step_is_missing.answers.studienkolleg_needed", next_question_id: StationID.ABENDSCHULE_KOLLEG, color: Colors.PURPLE },
            { "title": "questions.what_step_is_missing.answers.certificate_recognition", next_question_id: StationID.RECOGNITION_OF_CERTIFICATES, color: Colors.ORANGE },
        ],
        image: "/recognition_certificates.png"
    },
    {
        "id": QuestionID.READY_TO_SEARCH,
        "title": "questions.ready_to_search.title",
        "answers": [
            { "title": "questions.ready_to_search.answers.search_and_apply", "next_question_id": StationID.FIND_JOB, color: Colors.INDIGO },
        ],
        image: "/find_job.png"
    },
];

export const stations: Station[] = [
    {
        id: StationID.SKILLS_AND_STRENGHTS,
        title: "stations.skills_and_strengths.title",
        content: "stations.skills_and_strengths.content",
        tips: [
            "stations.skills_and_strengths.tips.activities",
            "stations.skills_and_strengths.tips.ask_people",
            "stations.skills_and_strengths.tips.tests",
            "stations.skills_and_strengths.tips.internship",
            "stations.skills_and_strengths.tips.videos",
            "stations.skills_and_strengths.tips.notes",
        ],
        steps: [
            { title: "stations.skills_and_strengths.steps.check_u" },
            { title: "stations.skills_and_strengths.steps.career_guidance" },
            { title: "stations.skills_and_strengths.steps.trial_internship" },
            { title: "stations.skills_and_strengths.steps.job_list" },
            { title: "stations.skills_and_strengths.steps.continue", next_question_id: StationID.YOU_DONT_HAVE_TO_DECIDE }
        ],
        links: [
            {
                title: "stations.skills_and_strengths.links.check_u.title",
                url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt/check-u",
                description: "stations.skills_and_strengths.links.check_u.description"
            },
            {
                title: "stations.skills_and_strengths.links.planet_beruf.title",
                url: "https://planet-beruf.de/",
                description: "stations.skills_and_strengths.links.planet_beruf.description"
            },
            {
                title: "stations.skills_and_strengths.links.berufenet.title",
                url: "https://berufenet.arbeitsagentur.de/",
                description: "stations.skills_and_strengths.links.berufenet.description"
            },
            {
                title: "stations.skills_and_strengths.links.youtube.title",
                url: "https://www.youtube.com/results?search_query=berufe+in+deutschland",
                description: "stations.skills_and_strengths.links.youtube.description"
            }
        ],
        image: "/career_paths.png",
    },
    {
        id: StationID.YOU_DONT_HAVE_TO_DECIDE,
        title: "stations.you_dont_have_to_decide.title",
        content: "stations.you_dont_have_to_decide.content",
        tips: [
            "stations.you_dont_have_to_decide.tips.explore_first",
            "stations.you_dont_have_to_decide.tips.small_steps",
            "stations.you_dont_have_to_decide.tips.try_options",
            "stations.you_dont_have_to_decide.tips.no_perfect_choice",
            "stations.you_dont_have_to_decide.tips.combine_paths",
            "stations.you_dont_have_to_decide.tips.decide_later"
        ],
        steps: [
            { title: "stations.you_dont_have_to_decide.steps.pick_one_action" },
            { title: "stations.you_dont_have_to_decide.steps.try_one_week" },
            { title: "stations.you_dont_have_to_decide.steps.talk_to_advisor" },
            { title: "stations.you_dont_have_to_decide.steps.review_and_choose" },
            { title: "stations.you_dont_have_to_decide.steps.continue", next_question_id: QuestionID.WHAT_DO_YOU_WANT_TO_DO }
        ],
        links: [
            {
                title: "stations.you_dont_have_to_decide.links.check_u.title",
                url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt/check-u",
                description: "stations.you_dont_have_to_decide.links.check_u.description"
            },
            {
                title: "stations.you_dont_have_to_decide.links.planet_beruf.title",
                url: "https://planet-beruf.de/",
                description: "stations.you_dont_have_to_decide.links.planet_beruf.description"
            }
        ],
        image: "/no_idea.png",
    },
    {
        id: StationID.INTEGRATION_COURSES,
        title: "stations.integration_courses.title",
        content: "stations.integration_courses.content",
        tips: [
            "stations.integration_courses.tips.structure",
            "stations.integration_courses.tips.placement_test",
            "stations.integration_courses.tips.course_types",
            "stations.integration_courses.tips.format",
            "stations.integration_courses.tips.costs",
            "stations.integration_courses.tips.fee_exemption"
        ],
        steps: [
            { title: "stations.integration_courses.steps.continue_work_goals", next_question_id: QuestionID.WHAT_IS_MISSING_FOR_WORK },
            { title: "stations.integration_courses.steps.check_fit" },
            { title: "stations.integration_courses.steps.placement_test" },
            { title: "stations.integration_courses.steps.apply_admission" },
            { title: "stations.integration_courses.steps.find_provider" },
            { title: "stations.integration_courses.steps.enroll" }
        ],
        links: [
            {
                title: "stations.integration_courses.links.bamf_overview.title",
                url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html",
                description: "stations.integration_courses.links.bamf_overview.description"
            },
            {
                title: "stations.integration_courses.links.bamf_registration.title",
                url: "https://bamf-navi.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/AzubiBSK/azubi-bsk-node.html",
                description: "stations.integration_courses.links.bamf_registration.description"
            },
            {
                title: "stations.integration_courses.links.bamf_application_pdf.title",
                url: "https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Integrationskurse/Kursteilnehmer/AntraegeAlle/630-007_antrag-zulassung-integrationskurs-ausl_pdf.html",
                description: "stations.integration_courses.links.bamf_application_pdf.description"
            }
        ],
        image: "/integration_courses.png",
    },
    {
        id: StationID.LOWER_SECONDARY_SCHOOL_CERTIFICATE,
        title: "stations.lower_secondary_school_certificate.title",
        content: "stations.lower_secondary_school_certificate.content",
        tips: [
            "stations.lower_secondary_school_certificate.tips.not_immediate",
            "stations.lower_secondary_school_certificate.tips.many_paths",
            "stations.lower_secondary_school_certificate.tips.catch_up",
            "stations.lower_secondary_school_certificate.tips.recognition"
        ],
        steps: [
            { title: "stations.lower_secondary_school_certificate.steps.photo_certificate" },
            { title: "stations.lower_secondary_school_certificate.steps.make_appointment" },
            { title: "stations.lower_secondary_school_certificate.steps.check_equivalence" },
            { title: "stations.lower_secondary_school_certificate.steps.no_certificate" },
            { title: "stations.lower_secondary_school_certificate.steps.decide_path" },
            { title: "stations.lower_secondary_school_certificate.steps.use_tools" },
            { title: "stations.lower_secondary_school_certificate.steps.ask_support" },
            { title: "stations.lower_secondary_school_certificate.steps.if_needed_recognition", next_question_id: StationID.RECOGNITION_OF_CERTIFICATES }
        ],
        links: [
            {
                title: "stations.lower_secondary_school_certificate.links.vhs_mv.title",
                url: "https://www.vhs-verband-mv.de/leistungen/zweiter-bildungsweg",
                description: "stations.lower_secondary_school_certificate.links.vhs_mv.description"
            },
            {
                title: "stations.lower_secondary_school_certificate.links.recognition_mv.title",
                url: "https://www.bildung-mv.de/erwachsenenbildung/anerkennung-von-abschluessen/auslaendische-schulabschluesse/index.html",
                description: "stations.lower_secondary_school_certificate.links.recognition_mv.description"
            }
        ],
        image: "/lower_secondary_certificate.png",
    },
    {
        id: StationID.INTERMEDIATE_SECONDARY_SCHOOL_CERTIFICATE,
        title: "stations.intermediate_secondary_school_certificate.title",
        content: "stations.intermediate_secondary_school_certificate.content",
        tips: [
            "stations.intermediate_secondary_school_certificate.tips.performance",
            "stations.intermediate_secondary_school_certificate.tips.attendance",
            "stations.intermediate_secondary_school_certificate.tips.key_subjects",
            "stations.intermediate_secondary_school_certificate.tips.recognition",
            "stations.intermediate_secondary_school_certificate.tips.parallel"
        ],
        steps: [
            { title: "stations.intermediate_secondary_school_certificate.steps.recognize" },
            { title: "stations.intermediate_secondary_school_certificate.steps.ask_support" },
            { title: "stations.intermediate_secondary_school_certificate.steps.contact_vhs" },
            { title: "stations.intermediate_secondary_school_certificate.steps.evening_distance" },
            { title: "stations.intermediate_secondary_school_certificate.steps.schedule" },
            { title: "stations.intermediate_secondary_school_certificate.steps.online_tools" },
            { title: "stations.intermediate_secondary_school_certificate.steps.financial_support" },
            { title: "stations.intermediate_secondary_school_certificate.steps.if_needed_recognition", next_question_id: StationID.RECOGNITION_OF_CERTIFICATES }
        ],
        links: [
            {
                title: "stations.intermediate_secondary_school_certificate.links.mv_education.title",
                url: "https://www.regierung-mv.de/Landesregierung/bm/Erwachsenenbildung/Nachholen-von-Schulabschl%C3%BCssen",
                description: "stations.intermediate_secondary_school_certificate.links.mv_education.description"
            },
            {
                title: "stations.intermediate_secondary_school_certificate.links.vhs.title",
                url: "https://www.volkshochschule.de",
                description: "stations.intermediate_secondary_school_certificate.links.vhs.description"
            }
        ],
        image: "/intermediate_certificate.png",
    },
    {
        id: StationID.ABENDSCHULE_KOLLEG,
        title: "stations.abendschule_kolleg.title",
        content: "stations.abendschule_kolleg.content",
        tips: [
            "stations.abendschule_kolleg.tips.online_possible",
            "stations.abendschule_kolleg.tips.not_studienkolleg",
            "stations.abendschule_kolleg.tips.mv_schools",
            "stations.abendschule_kolleg.tips.requirements"
        ],
        steps: [
            { title: "stations.abendschule_kolleg.steps.choose_provider" },
            { title: "stations.abendschule_kolleg.steps.research_options" },
            { title: "stations.abendschule_kolleg.steps.find_mv_links" },
            { title: "stations.abendschule_kolleg.steps.prepare_documents" },
            { title: "stations.abendschule_kolleg.steps.if_needed_recognition", next_question_id: StationID.RECOGNITION_OF_CERTIFICATES }
        ],
        links: [
            {
                title: "stations.abendschule_kolleg.links.ba_second_path.title",
                url: "https://www.arbeitsagentur.de/bildung/berufe-und-wege/abitur-nachholen",
                description: "stations.abendschule_kolleg.links.ba_second_path.description"
            },
            {
                title: "stations.abendschule_kolleg.links.fernstudi.title",
                url: "https://www.fernstudi.net/abendschulen",
                description: "stations.abendschule_kolleg.links.fernstudi.description"
            },
            {
                title: "stations.abendschule_kolleg.links.wikipedia.title",
                url: "https://de.wikipedia.org/wiki/Kategorie:Kolleg_in_Deutschland",
                description: "stations.abendschule_kolleg.links.wikipedia.description"
            },
            {
                title: "stations.abendschule_kolleg.links.berlin_kolleg.title",
                url: "https://berlin-kolleg.de/abitur-fuer-berufstaetige/",
                description: "stations.abendschule_kolleg.links.berlin_kolleg.description"
            },
            {
                title: "stations.abendschule_kolleg.links.greifswald.title",
                url: "https://www.abendgym-greifswald.de/",
                description: "stations.abendschule_kolleg.links.greifswald.description"
            },
            {
                title: "stations.abendschule_kolleg.links.neubrandenburg.title",
                url: "https://abendgymnasium-nb.de/",
                description: "stations.abendschule_kolleg.links.neubrandenburg.description"
            },
            {
                title: "stations.abendschule_kolleg.links.rostock.title",
                url: "https://abendgymnasiumrostock.de/",
                description: "stations.abendschule_kolleg.links.rostock.description"
            },
            {
                title: "stations.abendschule_kolleg.links.schwerin.title",
                url: "https://www.abendgymnasium-schwerin.de/",
                description: "stations.abendschule_kolleg.links.schwerin.description"
            }
        ],
        image: "/evening_school_vhs.png",
    },
    {
        id: StationID.RECOGNITION_OF_CERTIFICATES,
        title: "stations.recognition_of_certificates.title",
        content: "stations.recognition_of_certificates.content",
        tips: [
            "stations.recognition_of_certificates.tips.collect_docs",
            "stations.recognition_of_certificates.tips.certified_translations",
            "stations.recognition_of_certificates.tips.check_authority",
            "stations.recognition_of_certificates.tips.not_automatic",
            "stations.recognition_of_certificates.tips.keep_copies"
        ],
        steps: [
            { title: "stations.recognition_of_certificates.steps.check_route" },
            { title: "stations.recognition_of_certificates.steps.find_office" },
            { title: "stations.recognition_of_certificates.steps.prepare_documents" },
            { title: "stations.recognition_of_certificates.steps.submit" },
            { title: "stations.recognition_of_certificates.steps.follow_up" },
            { title: "stations.recognition_of_certificates.steps.apply_uni_job", next_question_id: StationID.FIND_JOB }
        ],
        links: [
            {
                title: "stations.recognition_of_certificates.links.kennung_de.title",
                url: "https://www.anerkennung-in-deutschland.de",
                description: "stations.recognition_of_certificates.links.kennung_de.description"
            },
            {
                title: "stations.recognition_of_certificates.links.anabin.title",
                url: "https://anabin.kmk.org/anabin.html",
                description: "stations.recognition_of_certificates.links.anabin.description"
            },
            {
                title: "stations.recognition_of_certificates.links.zab.title",
                url: "https://zab.kmk.org/de/zeugnisbewertung",
                description: "stations.recognition_of_certificates.links.zab.description"
            }
        ],
        image: "/recognition_certificates.png",
    },
    {
        id: StationID.JOB_RELATED_LANGUAGE_COURSES,
        title: "stations.job_related_language_courses.title",
        content: "stations.job_related_language_courses.content",
        tips: [
            "stations.job_related_language_courses.tips.b1",
            "stations.job_related_language_courses.tips.levels",
            "stations.job_related_language_courses.tips.format",
            "stations.job_related_language_courses.tips.part_time",
            "stations.job_related_language_courses.tips.costs",
            "stations.job_related_language_courses.tips.permit"
        ],
        steps: [
            { title: "stations.job_related_language_courses.steps.get_permit" },
            { title: "stations.job_related_language_courses.steps.documents" },
            { title: "stations.job_related_language_courses.steps.placement_test" },
            { title: "stations.job_related_language_courses.steps.attend" },
            { title: "stations.job_related_language_courses.steps.exam" },
            { title: "stations.job_related_language_courses.steps.continue_work_goals", next_question_id: QuestionID.WHAT_IS_MISSING_FOR_WORK }
        ],
        links: [
            {
                title: "stations.job_related_language_courses.links.bamf.title",
                url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf-node.html",
                description: "stations.job_related_language_courses.links.bamf.description"
            },
            {
                title: "stations.job_related_language_courses.links.azubi_bsk.title",
                url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/AzubiBSK/azubi-bsk-node.html",
                description: "stations.job_related_language_courses.links.azubi_bsk.description"
            },
            {
                title: "stations.job_related_language_courses.links.bsk_info.title",
                url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/BSK/jo-bsk-node.html",
                description: "stations.job_related_language_courses.links.bsk_info.description"
            }
        ],
        image: "/job_related_courses.png",
    },
    {
        id: StationID.GERMAN_SCHOOL_PATHWAY,
        title: "stations.german_school_pathway.title",
        content: "stations.german_school_pathway.content",
        tips: [
            "stations.german_school_pathway.tips.certificate_helps",
            "stations.german_school_pathway.tips.catch_up",
            "stations.german_school_pathway.tips.realschule",
            "stations.german_school_pathway.tips.age",
            "stations.german_school_pathway.tips.internships",
            "stations.german_school_pathway.tips.recognition"
        ],
        steps: [
            { title: "stations.german_school_pathway.steps.check_fit" },
            { title: "stations.german_school_pathway.steps.register_school" },
            { title: "stations.german_school_pathway.steps.recognition_help" },
            { title: "stations.german_school_pathway.steps.combine_school_internships" },
            { title: "stations.german_school_pathway.steps.study_later" },
            { title: "stations.german_school_pathway.steps.continue", next_question_id: QuestionID.WHAT_LEVEL_DO_YOU_NEED }
        ],
        links: [
            {
                title: "stations.german_school_pathway.links.kmk.title",
                url: "https://www.kmk.org/themen/anerkennung-auslaendischer-abschluesse.html",
                description: "stations.german_school_pathway.links.kmk.description"
            },
            {
                title: "stations.german_school_pathway.links.anabin.title",
                url: "https://anabin.kmk.org/anabin.html",
                description: "stations.german_school_pathway.links.anabin.description"
            },
            {
                title: "stations.german_school_pathway.links.biz.title",
                url: "https://www.arbeitsagentur.de/bildung/berufsinformationszentrum-biz",
                description: "stations.german_school_pathway.links.biz.description"
            },
            {
                title: "stations.german_school_pathway.links.ba_education.title",
                url: "https://www.arbeitsagentur.de/bildung",
                description: "stations.german_school_pathway.links.ba_education.description"
            },
            {
                title: "stations.german_school_pathway.links.kmk_schools.title",
                url: "https://www.kmk.org/themen/allgemeinbildende-schulen.html",
                description: "stations.german_school_pathway.links.kmk_schools.description"
            }
        ],
        image: "/school_certificate.png",
    },
    {
        id: StationID.UKRAINIAN_SCHOOL_QUALIFICATION,
        title: "stations.ukrainian_school_qualification.title",
        content: "stations.ukrainian_school_qualification.content",
        tips: [
            "stations.ukrainian_school_qualification.tips.decide_path",
            "stations.ukrainian_school_qualification.tips.official_school",
            "stations.ukrainian_school_qualification.tips.recognition_first",
            "stations.ukrainian_school_qualification.tips.abroad_possible",
            "stations.ukrainian_school_qualification.tips.recognition_needed",
            "stations.ukrainian_school_qualification.tips.german_option",
            "stations.ukrainian_school_qualification.tips.warning",
            "stations.ukrainian_school_qualification.tips.abitur_note"
        ],
        steps: [
            { title: "stations.ukrainian_school_qualification.steps.supplementary_classes" },
            { title: "stations.ukrainian_school_qualification.steps.distance_learning" },
            { title: "stations.ukrainian_school_qualification.steps.external_exam" },
            { title: "stations.ukrainian_school_qualification.steps.check_school_obligation" },
            { title: "stations.ukrainian_school_qualification.steps.keep_documents" },
            { title: "stations.ukrainian_school_qualification.steps.after_9_years" },
            { title: "stations.ukrainian_school_qualification.steps.after_11_years" }
        ],
        links: [
            {
                title: "stations.ukrainian_school_qualification.links.edebo_registry.title",
                url: "https://registry.edbo.gov.ua/ruo/",
                description: "stations.ukrainian_school_qualification.links.edebo_registry.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.school_org.title",
                url: "https://school.org.ua/",
                description: "stations.ukrainian_school_qualification.links.school_org.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.mon.title",
                url: "https://mon.gov.ua/",
                description: "stations.ukrainian_school_qualification.links.mon.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.mon_secondary.title",
                url: "https://mon.gov.ua/ua/tag/zagalna-serednya-osvita",
                description: "stations.ukrainian_school_qualification.links.mon_secondary.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.testportal.title",
                url: "https://testportal.gov.ua/",
                description: "stations.ukrainian_school_qualification.links.testportal.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.kennung_de.title",
                url: "https://www.anerkennung-in-deutschland.de",
                description: "stations.ukrainian_school_qualification.links.kennung_de.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.kennung_schule.title",
                url: "https://www.anerkennung-in-deutschland.de/html/de/schulabschluesse.php",
                description: "stations.ukrainian_school_qualification.links.kennung_schule.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.zab.title",
                url: "https://zab.kmk.org/de/zeugnisbewertung",
                description: "stations.ukrainian_school_qualification.links.zab.description"
            },
            {
                title: "stations.ukrainian_school_qualification.links.anabin.title",
                url: "https://anabin.kmk.org/anabin.html",
                description: "stations.ukrainian_school_qualification.links.anabin.description"
            }
        ],
        image: "/ukrainian_school_certification.png",
    },
    {
        id: StationID.UNIVERSITY_PATH_GERMANY,
        title: "stations.university_path_germany.title",
        content: "stations.university_path_germany.content",
        tips: [
            "stations.university_path_germany.tips.deadlines",
            "stations.university_path_germany.tips.studienkolleg",
            "stations.university_path_germany.tips.recognition_needed",
            "stations.university_path_germany.tips.language",
            "stations.university_path_germany.tips.no_time_lost"
        ],
        steps: [
            { title: "stations.university_path_germany.steps.check_qualification" },
            { title: "stations.university_path_germany.steps.recognize" },
            { title: "stations.university_path_germany.steps.learn_studienkolleg" },
            { title: "stations.university_path_germany.steps.improve_language" },
            { title: "stations.university_path_germany.steps.apply" }
        ],
        links: [
            {
                title: "stations.university_path_germany.links.anabin.title",
                url: "https://anabin.kmk.org/anabin.html",
                description: "stations.university_path_germany.links.anabin.description"
            },
            {
                title: "stations.university_path_germany.links.uni_assist.title",
                url: "https://www.uni-assist.de/",
                description: "stations.university_path_germany.links.uni_assist.description"
            },
            {
                title: "stations.university_path_germany.links.studienkollegs.title",
                url: "https://www.studienkollegs.de/",
                description: "stations.university_path_germany.links.studienkollegs.description"
            },
            {
                title: "stations.university_path_germany.links.daad.title",
                url: "https://www.daad.de/de/studieren-und-forschen-in-deutschland/studium-planen/",
                description: "stations.university_path_germany.links.daad.description"
            },
            {
                title: "stations.university_path_germany.links.hochschulkompass.title",
                url: "https://www.hochschulkompass.de/",
                description: "stations.university_path_germany.links.hochschulkompass.description"
            }
        ],
        image: "/abitur.png",
    },
    {
        id: StationID.BVJ_BVB_PREPARATION,
        title: "stations.bvj_bvb_preparation.title",
        content: "stations.bvj_bvb_preparation.content",
        tips: [
            "stations.bvj_bvb_preparation.tips.honest_level",
            "stations.bvj_bvb_preparation.tips.ask_referral",
            "stations.bvj_bvb_preparation.tips.cv_not_perfect",
            "stations.bvj_bvb_preparation.tips.internship",
            "stations.bvj_bvb_preparation.tips.attendance",
            "stations.bvj_bvb_preparation.tips.digital_helpers"
        ],
        steps: [
            { title: "stations.bvj_bvb_preparation.steps.career_guidance" },
            { title: "stations.bvj_bvb_preparation.steps.ask_school" },
            { title: "stations.bvj_bvb_preparation.steps.prepare_cv" },
            { title: "stations.bvj_bvb_preparation.steps.search_internships" },
            { title: "stations.bvj_bvb_preparation.steps.try_outs_after_preparation", next_question_id: StationID.CAREER_EXPLORATION_TRYOUTS }
        ],
        links: [
            {
                title: "stations.bvj_bvb_preparation.links.ba_vocational.title",
                url: "https://www.arbeitsagentur.de/bildung/berufsvorbereitung",
                description: "stations.bvj_bvb_preparation.links.ba_vocational.description"
            },
            {
                title: "stations.bvj_bvb_preparation.links.planet_beruf.title",
                url: "https://planet-beruf.de/",
                description: "stations.bvj_bvb_preparation.links.planet_beruf.description"
            },
            {
                title: "stations.bvj_bvb_preparation.links.ba_office.title",
                url: "https://www.arbeitsagentur.de/vor-ort",
                description: "stations.bvj_bvb_preparation.links.ba_office.description"
            },
            {
                title: "stations.bvj_bvb_preparation.links.berufenet.title",
                url: "https://berufenet.arbeitsagentur.de/",
                description: "stations.bvj_bvb_preparation.links.berufenet.description"
            },
            {
                title: "stations.bvj_bvb_preparation.links.school_mv.title",
                url: "https://www.schule-mv.de/",
                description: "stations.bvj_bvb_preparation.links.school_mv.description"
            }
        ],
        image: "/bvb_program.png",
    },
    {
        id: StationID.CAREER_EXPLORATION_TRYOUTS,
        title: "stations.career_exploration_tryouts.title",
        content: "stations.career_exploration_tryouts.content",
        tips: [
            "stations.career_exploration_tryouts.tips.honest_level",
            "stations.career_exploration_tryouts.tips.ask_referral",
            "stations.career_exploration_tryouts.tips.cv_not_perfect",
            "stations.career_exploration_tryouts.tips.serious_internship",
            "stations.career_exploration_tryouts.tips.attendance",
            "stations.career_exploration_tryouts.tips.notes"
        ],
        steps: [
            { title: "stations.career_exploration_tryouts.steps.career_guidance" },
            { title: "stations.career_exploration_tryouts.steps.ask_school" },
            { title: "stations.career_exploration_tryouts.steps.prepare_cv" },
            { title: "stations.career_exploration_tryouts.steps.search_internship" },
            { title: "stations.career_exploration_tryouts.steps.ask_company_internship", next_question_id: StationID.ASK_COMPANY_INTERNSHIP }
        ],
        links: [
            {
                title: "stations.career_exploration_tryouts.links.ba_vocational.title",
                url: "https://www.arbeitsagentur.de/bildung/berufsvorbereitung",
                description: "stations.career_exploration_tryouts.links.ba_vocational.description"
            },
            {
                title: "stations.career_exploration_tryouts.links.planet_beruf.title",
                url: "https://planet-beruf.de/",
                description: "stations.career_exploration_tryouts.links.planet_beruf.description"
            },
            {
                title: "stations.career_exploration_tryouts.links.ba_office.title",
                url: "https://www.arbeitsagentur.de/vor-ort",
                description: "stations.career_exploration_tryouts.links.ba_office.description"
            },
            {
                title: "stations.career_exploration_tryouts.links.berufenet.title",
                url: "https://berufenet.arbeitsagentur.de/",
                description: "stations.career_exploration_tryouts.links.berufenet.description"
            },
            {
                title: "stations.career_exploration_tryouts.links.school_mv.title",
                url: "https://www.schule-mv.de/",
                description: "stations.career_exploration_tryouts.links.school_mv.description"
            }
        ],
        image: "/bop_internship.png",
    },
    {
        id: StationID.ASK_COMPANY_INTERNSHIP,
        title: "stations.ask_company_internship.title",
        content: "stations.ask_company_internship.content",
        tips: [
            "stations.ask_company_internship.tips.go_in_person",
            "stations.ask_company_internship.tips.take_cv",
            "stations.ask_company_internship.tips.ask_internship",
            "stations.ask_company_internship.tips.keep_trying",
            "stations.ask_company_internship.tips.best_time",
            "stations.ask_company_internship.tips.simple_clothes",
            "stations.ask_company_internship.tips.learning_german"
        ],
        steps: [
            { title: "stations.ask_company_internship.steps.practice_entry" },
            { title: "stations.ask_company_internship.steps.create_cv" },
            { title: "stations.ask_company_internship.steps.simple_sentence" },
            { title: "stations.ask_company_internship.steps.phone_tips" },
            { title: "stations.ask_company_internship.steps.email_request" },
            { title: "stations.ask_company_internship.steps.documents" },
            { title: "stations.ask_company_internship.steps.short_script" }
        ],
        links: [
            {
                title: "stations.ask_company_internship.links.planet_find.title",
                url: "https://planet-beruf.de/schuelerinnen/mein-praktikum/praktikum-finden",
                description: "stations.ask_company_internship.links.planet_find.description"
            },
            {
                title: "stations.ask_company_internship.links.europass.title",
                url: "https://europa.eu/europass/en/create-europass-cv",
                description: "stations.ask_company_internship.links.europass.description"
            },
            {
                title: "stations.ask_company_internship.links.vhs.title",
                url: "https://www.vhs-lernportal.de/learn-german",
                description: "stations.ask_company_internship.links.vhs.description"
            },
            {
                title: "stations.ask_company_internship.links.planet_prepare.title",
                url: "https://planet-beruf.de/schuelerinnen/mein-praktikum/praktikum-vorbereiten",
                description: "stations.ask_company_internship.links.planet_prepare.description"
            },
            {
                title: "stations.ask_company_internship.links.azubi_mail.title",
                url: "https://www.azubi.de/beruf/tipps/praktikum-anfrage-email",
                description: "stations.ask_company_internship.links.azubi_mail.description"
            },
            {
                title: "stations.ask_company_internship.links.ba_guidance.title",
                url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
                description: "stations.ask_company_internship.links.ba_guidance.description"
            }
        ],
        image: "/eq_internship.png",
    },
    {
        id: StationID.APPRENTICESHIP_APPLICATION,
        title: "stations.apprenticeship_application.title",
        content: "stations.apprenticeship_application.content",
        tips: [
            "stations.apprenticeship_application.tips.cv_simple",
            "stations.apprenticeship_application.tips.multi_applications",
            "stations.apprenticeship_application.tips.internship_boost",
            "stations.apprenticeship_application.tips.probearbeit",
            "stations.apprenticeship_application.tips.contract_help",
            "stations.apprenticeship_application.tips.deadlines",
            "stations.apprenticeship_application.tips.rejections",
            "stations.apprenticeship_application.tips.simple_message"
        ],
        steps: [
            { title: "stations.apprenticeship_application.steps.create_cv" },
            { title: "stations.apprenticeship_application.steps.search_offers" },
            { title: "stations.apprenticeship_application.steps.documents_needed" },
            { title: "stations.apprenticeship_application.steps.prepare_interview" },
            { title: "stations.apprenticeship_application.steps.check_contract" },
            { title: "stations.apprenticeship_application.steps.deadlines" },
            { title: "stations.apprenticeship_application.steps.after_rejection" },
            { title: "stations.apprenticeship_application.steps.message_example" },
            { title: "stations.apprenticeship_application.steps.continue_find_job", next_question_id: StationID.FIND_JOB }
        ],
        links: [
            {
                title: "stations.apprenticeship_application.links.europass.title",
                url: "https://europa.eu/europass/en/create-europass-cv",
                description: "stations.apprenticeship_application.links.europass.description"
            },
            {
                title: "stations.apprenticeship_application.links.jobboerse.title",
                url: "https://www.arbeitsagentur.de/jobsuche/",
                description: "stations.apprenticeship_application.links.jobboerse.description"
            },
            {
                title: "stations.apprenticeship_application.links.planet_docs.title",
                url: "https://planet-beruf.de/schuelerinnen/meine-bewerbung/bewerbungsschreiben",
                description: "stations.apprenticeship_application.links.planet_docs.description"
            },
            {
                title: "stations.apprenticeship_application.links.planet_interview.title",
                url: "https://planet-beruf.de/schuelerinnen/meine-bewerbung/vorstellungsgespraech",
                description: "stations.apprenticeship_application.links.planet_interview.description"
            },
            {
                title: "stations.apprenticeship_application.links.ba_guidance.title",
                url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
                description: "stations.apprenticeship_application.links.ba_guidance.description"
            },
            {
                title: "stations.apprenticeship_application.links.ihk.title",
                url: "https://www.ihk.de/",
                description: "stations.apprenticeship_application.links.ihk.description"
            },
            {
                title: "stations.apprenticeship_application.links.planet_rejection.title",
                url: "https://planet-beruf.de/schuelerinnen/meine-bewerbung/absage",
                description: "stations.apprenticeship_application.links.planet_rejection.description"
            },
            {
                title: "stations.apprenticeship_application.links.azubi_examples.title",
                url: "https://www.azubi.de/beruf/tipps/bewerbungsschreiben-ausbildung",
                description: "stations.apprenticeship_application.links.azubi_examples.description"
            }
        ],
        image: "/apps_private_offers.png",
    },
    {
        id: StationID.HOW_TO_APPLY_APPRENTICESHIP,
        title: "stations.how_to_apply_apprenticeship.title",
        content: "stations.how_to_apply_apprenticeship.content",
        tips: [
            "stations.how_to_apply_apprenticeship.tips.simple_docs",
            "stations.how_to_apply_apprenticeship.tips.short_message",
            "stations.how_to_apply_apprenticeship.tips.multiple_applications",
            "stations.how_to_apply_apprenticeship.tips.tailor_each",
            "stations.how_to_apply_apprenticeship.tips.follow_up",
            "stations.how_to_apply_apprenticeship.tips.rejections_normal",
            "stations.how_to_apply_apprenticeship.tips.ask_feedback"
        ],
        steps: [
            { title: "stations.how_to_apply_apprenticeship.steps.prepare_cv" },
            { title: "stations.how_to_apply_apprenticeship.steps.collect_documents" },
            { title: "stations.how_to_apply_apprenticeship.steps.search_offers" },
            { title: "stations.how_to_apply_apprenticeship.steps.write_message" },
            { title: "stations.how_to_apply_apprenticeship.steps.send_and_track" },
            { title: "stations.how_to_apply_apprenticeship.steps.prepare_interview" },
            { title: "stations.how_to_apply_apprenticeship.steps.continue_find_job", next_question_id: StationID.FIND_JOB },
            { title: "stations.how_to_apply_apprenticeship.steps.begin_dual_system_apprenticeship", next_question_id: StationID.DUAL_APPRENTICESHIP_BASICS }
        ],
        links: [
            {
                title: "stations.how_to_apply_apprenticeship.links.jobboerse.title",
                url: "https://www.arbeitsagentur.de/jobsuche/",
                description: "stations.how_to_apply_apprenticeship.links.jobboerse.description"
            },
            {
                title: "stations.how_to_apply_apprenticeship.links.planet_docs.title",
                url: "https://planet-beruf.de/schuelerinnen/meine-bewerbung/bewerbungsschreiben",
                description: "stations.how_to_apply_apprenticeship.links.planet_docs.description"
            },
            {
                title: "stations.how_to_apply_apprenticeship.links.europass.title",
                url: "https://europa.eu/europass/en/create-europass-cv",
                description: "stations.how_to_apply_apprenticeship.links.europass.description"
            },
            {
                title: "stations.how_to_apply_apprenticeship.links.azubi_examples.title",
                url: "https://www.azubi.de/beruf/tipps/bewerbungsschreiben-ausbildung",
                description: "stations.how_to_apply_apprenticeship.links.azubi_examples.description"
            },
            {
                title: "stations.how_to_apply_apprenticeship.links.ba_guidance.title",
                url: "https://www.arbeitsagentur.de/bildung/berufsberatung",
                description: "stations.how_to_apply_apprenticeship.links.ba_guidance.description"
            }
        ],
        image: "/dual_apprenticeship.png",
    },
    {
        id: StationID.FIND_JOB,
        title: "stations.find_job.title",
        content: "stations.find_job.content",
        tips: [
            "stations.find_job.tips.cv_simple",
            "stations.find_job.tips.mention_internships",
            "stations.find_job.tips.simple_german",
            "stations.find_job.tips.friendly_message",
            "stations.find_job.tips.interview_questions",
            "stations.find_job.tips.review_before_send",
            "stations.find_job.tips.rejections_normal",
            "stations.find_job.tips.no_long_letters",
            "stations.find_job.tips.message_template"
        ],
        steps: [
            { title: "stations.find_job.steps.create_basic_cv" },
            { title: "stations.find_job.steps.search_and_write" },
            { title: "stations.find_job.steps.send_application" },
            { title: "stations.find_job.steps.follow_up" },
            { title: "stations.find_job.steps.after_rejection" },
            { title: "stations.find_job.steps.message_example" },
            { title: "stations.find_job.steps.if_not_successful_adjust_path", next_question_id: QuestionID.WHAT_IS_MISSING_FOR_WORK }
        ],
        links: [
            {
                title: "stations.find_job.links.planet_beruf.title",
                url: "https://planet-beruf.de/",
                description: "stations.find_job.links.planet_beruf.description"
            },
            {
                title: "stations.find_job.links.arbeitsagentur_jobsuche.title",
                url: "https://www.arbeitsagentur.de/jobsuche/",
                description: "stations.find_job.links.arbeitsagentur_jobsuche.description"
            },
            {
                title: "stations.find_job.links.azubi_portal.title",
                url: "https://www.azubi.de/",
                description: "stations.find_job.links.azubi_portal.description"
            },
            {
                title: "stations.find_job.links.canva_templates.title",
                url: "https://www.canva.com/resumes/templates/",
                description: "stations.find_job.links.canva_templates.description"
            },
            {
                title: "stations.find_job.links.europass.title",
                url: "https://europa.eu/europass/en/create-europass-cv",
                description: "stations.find_job.links.europass.description"
            },
            {
                title: "stations.find_job.links.planet_rejection.title",
                url: "https://planet-beruf.de/schuelerinnen/meine-bewerbung/absage",
                description: "stations.find_job.links.planet_rejection.description"
            },
            {
                title: "stations.find_job.links.azubi_message_examples.title",
                url: "https://www.azubi.de/beruf/tipps/bewerbungsschreiben-ausbildung",
                description: "stations.find_job.links.azubi_message_examples.description"
            }
        ],
        image: "/find_job.png",
    },
    {
        id: StationID.DUAL_APPRENTICESHIP_BASICS,
        title: "stations.dual_apprenticeship_basics.title",
        content: "stations.dual_apprenticeship_basics.content",
        tips: [
            "stations.dual_apprenticeship_basics.tips.probation",
            "stations.dual_apprenticeship_basics.tips.sick_leave",
            "stations.dual_apprenticeship_basics.tips.school_subjects",
            "stations.dual_apprenticeship_basics.tips.documents",
            "stations.dual_apprenticeship_basics.tips.ask_early",
            "stations.dual_apprenticeship_basics.tips.right_to_training",
            "stations.dual_apprenticeship_basics.tips.language_support",
            "stations.dual_apprenticeship_basics.tips.after_training"
        ],
        steps: [
            { title: "stations.dual_apprenticeship_basics.steps.weekly_schedule" },
            { title: "stations.dual_apprenticeship_basics.steps.company_duties" },
            { title: "stations.dual_apprenticeship_basics.steps.help_school_subjects" },
            { title: "stations.dual_apprenticeship_basics.steps.salary_insurance" },
            { title: "stations.dual_apprenticeship_basics.steps.final_exam" },
            { title: "stations.dual_apprenticeship_basics.steps.problems_apprenticeship" },
            { title: "stations.dual_apprenticeship_basics.steps.language_support_training" },
            { title: "stations.dual_apprenticeship_basics.steps.career_after" },
            { title: "stations.dual_apprenticeship_basics.steps.continue", next_question_id: StationID.FIND_JOB }
        ],
        links: [
            {
                title: "stations.dual_apprenticeship_basics.links.planet_daily.title",
                url: "https://planet-beruf.de/schuelerinnen/ausbildung/ausbildungsalltag",
                description: "stations.dual_apprenticeship_basics.links.planet_daily.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.ihk_contract.title",
                url: "https://www.ihk.de/ausbildung/ausbildungsvertrag",
                description: "stations.dual_apprenticeship_basics.links.ihk_contract.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.azubi_school.title",
                url: "https://www.azubi.de/beruf/tipps/berufsschule",
                description: "stations.dual_apprenticeship_basics.links.azubi_school.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.ba_salary.title",
                url: "https://www.arbeitsagentur.de/bildung/ausbildung/ausbildungsverguetung",
                description: "stations.dual_apprenticeship_basics.links.ba_salary.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.ihk_exams.title",
                url: "https://www.ihk.de/ausbildung/pruefungen",
                description: "stations.dual_apprenticeship_basics.links.ihk_exams.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.asa.title",
                url: "https://www.arbeitsagentur.de/bildung/ausbildung/assistierte-ausbildung",
                description: "stations.dual_apprenticeship_basics.links.asa.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.bamf_deufov.title",
                url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/DeutschBeruf/deutsch-beruf.html",
                description: "stations.dual_apprenticeship_basics.links.bamf_deufov.description"
            },
            {
                title: "stations.dual_apprenticeship_basics.links.make_it_germany.title",
                url: "https://www.make-it-in-germany.com/en/study-training/training/vocational-training-system",
                description: "stations.dual_apprenticeship_basics.links.make_it_germany.description"
            }
        ],
        image: "/dual_apprenticeship.png",
    }
];
