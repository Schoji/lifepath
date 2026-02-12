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
    "START"
    | "EARN_MONEY"
    | "NO_IDEA"
    | "DEMAND_IN_MV"
    | "BOP_INTERNSHIP"
    | "BVJ_PROGRAM"
    | "BVJ_S_PROGRAM"
    | "BVB_PROGRAM"
    | "EQ_INTERNSHIP"
    | "DUAL_APPRENTICESHIP"
    | "SCHOOL_CERTIFICATE"
    | "LOWER_SECONDARY_CERTIFICATE"
    | "INTERMEDIATE_CERTIFICATE"
    | "REMOTE_SCHOOL"
    | "ABITUR"
    | "EVENING_SCHOOL_VHS"
    | "EXTERNAL_CANDIDATE_EXAM"
    | "COLLEGE_PREP_ADULTS"
    | "HAVE_IDEA"
    | "UKRAINIAN_SCHOOL_QUALIFICATION"
    | "SUPPLEMENTARY_CLASSES"
    | "DISTANCE_LEARNING"
    | "EXTERNAL_SCHOOLING"
    | "PRIVATE_SCHOOLS"
    | "RECOGNITION_CERTIFICATES"
    | "LEARN_GERMAN"
    | "INTEGRATION_COURSES"
    | "JOB_RELATED_COURSES"
    | "VHS_LEARNING_PLATFORM"
    | "APPS_PRIVATE_OFFERS"
    | "FIND_JOB"
    | "TODO";


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
            { title: "main.steps.get_school_certificate", next_question_id: "SCHOOL_CERTIFICATE" },
            { title: "main.steps.learn_german", next_question_id: "LEARN_GERMAN" },
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
            { title: "earn_money.steps.have_idea", next_question_id: "HAVE_IDEA" }
        ],
        image: "/earn_money.png",
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
        image: "/no_idea.png",
    },
    { // do naprawy, nie zgadza się z draw.io
        id: "DEMAND_IN_MV",
        title: "demand_in_mv.title",
        content: "demand_in_mv.description",
        tips: [
            "demand_in_mv.tips.mv_sectors",
            "demand_in_mv.tips.rural_opportunities",
            "demand_in_mv.tips.trial_error",
            "demand_in_mv.tips.language_improvement",
            "demand_in_mv.tips.free_advice",
            "demand_in_mv.tips.check_costs",
            "demand_in_mv.tips.wary_jobs",
            "demand_in_mv.tips.legal_ways_minors",
            "demand_in_mv.tips.guidance_websites",
            "demand_in_mv.tips.take_tests",
            "demand_in_mv.tips.use_ai"
        ],
        links: [
            { title: "demand_in_mv.links.check_u_guidance", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" },
            { title: "demand_in_mv.links.step_by_step_tests", url: "https://www.arbeitsagentur.de/bildung/noch-planlos/dein-weg-zum-passenden-beruf-schritt-fuer-schritt" },
            { title: "demand_in_mv.links.jobboerse", url: "https://jobboerse.arbeitsagentur.de" },
            { title: "demand_in_mv.links.ausbildung_de", url: "https://www.ausbildung.de/" },
            { title: "demand_in_mv.links.meinestadt", url: "https://www.meinestadt.de/" },
            { title: "demand_in_mv.links.check_u_entry", url: "https://www.arbeitsagentur.de/bildung/ausbildung/check-u" },
            { title: "demand_in_mv.links.berufe_tv", url: "https://www.arbeitsagentur.de/berufe-tv-filme-videos" },
            { title: "demand_in_mv.links.jobcenter_digital", url: "https://www.jobcenter.digital" },
            { title: "demand_in_mv.links.jmd4you", url: "https://www.jmd4you.de/" },
            { title: "demand_in_mv.links.career_advice_report", url: "https://www.arbeitsagentur.de/bildung/noch-planlos/erfahrungsbericht-berufsberatung-wie-laeuft-das-ab" }
        ],
        steps: [
            { title: "demand_in_mv.steps.career_exploration_internship", next_question_id: "BOP_INTERNSHIP" },
            { title: "demand_in_mv.steps.bvj_program", next_question_id: "BVJ_PROGRAM" },
            { title: "demand_in_mv.steps.bvj_s_language", next_question_id: "BVJ_S_PROGRAM" },
            { title: "demand_in_mv.steps.bvb_prep", next_question_id: "BVB_PROGRAM" },
            { title: "demand_in_mv.steps.eq_internship", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.dual_training", next_question_id: "DUAL_APPRENTICESHIP" },
            { title: "demand_in_mv.steps.ask_internship", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.find_shortage_jobs", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.orientation_test", next_question_id: "TODO" },
            { title: "demand_in_mv.steps.search_companies", next_question_id: "TODO" }
        ],
        image: "/demand_in_mv.png",
    },
    {
        id: "BOP_INTERNSHIP",
        title: "bop_internship.title",
        content: "bop_internship.description",
        tips: [
            "bop_internship.tips.duration",
            "bop_internship.tips.free_participation",
            "bop_internship.tips.remuneration_costs",
            "bop_internship.tips.prerequisites",
            "bop_internship.tips.jobcenter_approval"
        ],
        links: [
            { title: "bop_internship.links.career_counseling", url: "https://www.arbeitsagentur.de/bildung/schule/schuelerpraktikum-so-findest-du-deinen-praktikumsplatz" },
            { title: "bop_internship.links.info_sheet", url: "https://www.arbeitsagentur.de/datei/merkblatt-berufsorientierungspraktikum_ba035418.pdf" },
            { title: "bop_internship.links.vplt_info", url: "https://www.vplt.org/wiki/berufsorientierungspraktikum-verbundausbildung-arbeit" },
            { title: "bop_internship.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" }
        ],
        steps: [
            { title: "bop_internship.steps.apprenticeship_dual", next_question_id: "DUAL_APPRENTICESHIP" },
            { title: "bop_internship.steps.bvj_program", next_question_id: "BVJ_PROGRAM" },
            { title: "bop_internship.steps.consultation", next_question_id: "TODO" },
            { title: "bop_internship.steps.find_company", next_question_id: "TODO" },
            { title: "bop_internship.steps.apply_internship", next_question_id: "TODO" },
            { title: "bop_internship.steps.wait_approval", next_question_id: "TODO" },
            { title: "bop_internship.steps.search_vacancies", next_question_id: "TODO" },
            { title: "bop_internship.steps.ask_services", next_question_id: "TODO" },
            { title: "bop_internship.steps.search_self", next_question_id: "TODO" },
            { title: "bop_internship.steps.use_ai", next_question_id: "TODO" }
        ],
        image: "/bop_internship.png",
    },
    {
        id: "BVJ_PROGRAM",
        title: "bvj_program.title",
        content: "bvj_program.description",
        tips: [
            "bvj_program.tips.language_focus",
            "bvj_program.tips.daz_central",
            "bvj_program.tips.compulsory_schooling",
            "bvj_program.tips.internships_help",
            "bvj_program.tips.start_early",
            "bvj_program.tips.parents_involved"
        ],
        links: [
            { title: "bvj_program.links.arbeitsagentur_info", url: "https://www.arbeitsagentur.de/bildung" },
            { title: "bvj_program.links.kmk_info", url: "https://www.kmk.org" },
            { title: "bvj_program.links.ausbildungspark", url: "https://www.ausbildungspark.com/ausbildungs-abc/berufsvorbereitungsjahr-ausbildung-bvj/" },
            { title: "bvj_program.links.vocational_schools_equiv", url: "https://www.dbr-doberan.de/bildung/berufliche-schulen-neukloster/berufsvorbereitungsjahr-bvj-an-beruflichen-schulen-abgangszeugnis-mit-gleichstellungsvermerk-zum-hauptschulabschluss.html" },
            { title: "bvj_program.links.ausbildung_de_guide", url: "https://www.ausbildung.de/ratgeber/bvj/" },
            { title: "bvj_program.links.videos_bvj", url: "https://duckduckgo.com/?q=Berufsvorbereitungsjahr+%2BVJ+videos&iax=videos&ia=videos" }
        ],
        steps: [
            { title: "bvj_program.steps.apprenticeship_dual", next_question_id: "DUAL_APPRENTICESHIP" },
            { title: "bvj_program.steps.pre_apprenticeship_internship", next_question_id: "EQ_INTERNSHIP" },
            { title: "bvj_program.steps.school_certificate", next_question_id: "SCHOOL_CERTIFICATE" },
            { title: "bvj_program.steps.learn_german", next_question_id: "LEARN_GERMAN" },
            { title: "bvj_program.steps.job_related_lang", next_question_id: "JOB_RELATED_COURSES" },
            { title: "bvj_program.steps.ask_counselor_cert", next_question_id: "TODO" },
            { title: "bvj_program.steps.prolong_internship", next_question_id: "TODO" },
            { title: "bvj_program.steps.work_minijob", next_question_id: "TODO" },
            { title: "bvj_program.steps.prepare_docs", next_question_id: "TODO" },
            { title: "bvj_program.steps.ask_entry_dates", next_question_id: "TODO" },
            { title: "bvj_program.steps.plan_internships", next_question_id: "TODO" },
            { title: "bvj_program.steps.ask_company", next_question_id: "TODO" },
            { title: "bvj_program.steps.use_ai", next_question_id: "TODO" }
        ],
        image: "/bvj_program.png",
    },
    {
        id: "BVJ_S_PROGRAM",
        title: "bvj_s_program.title",
        content: "bvj_s_program.description",
        tips: [
            "bvj_s_program.tips.language_focus_help",
            "bvj_s_program.tips.combination",
            "bvj_s_program.tips.daz_focus",
            "bvj_s_program.tips.intensive_lessons",
            "bvj_s_program.tips.attendance",
            "bvj_s_program.tips.internships",
            "bvj_s_program.tips.start_early",
            "bvj_s_program.tips.parents"
        ],
        links: [
            { title: "bvj_s_program.links.mv_schools", url: "https://www.bildung-mv.de/schule/berufliche_schulen/" },
            { title: "bvj_s_program.links.mv_education", url: "https://www.bildung-mv.de/" },
            { title: "bvj_s_program.links.agency_vocational", url: "https://www.arbeitsagentur.de/bildung/berufliche-schule" },
            { title: "bvj_s_program.links.agency_general", url: "https://www.arbeitsagentur.de" },
            { title: "bvj_s_program.links.vhs_portal", url: "https://www.vhs-lernportal.de/" },
            { title: "bvj_s_program.links.dw_learn", url: "https://learngerman.dw.com/" },
            { title: "bvj_s_program.links.goethe", url: "https://www.goethe.de/prj/dfd/de/home.cfm" }
        ],
        steps: [
            { title: "bvj_s_program.steps.apprenticeship_dual", next_question_id: "DUAL_APPRENTICESHIP" },
            { title: "bvj_s_program.steps.contact_schools", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.use_counselling", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.agency_counselling", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.check_region", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.prepare_docs", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.ask_entry", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.plan_internships", next_question_id: "TODO" }
        ],
        image: "/BVJ_S_PROGRAM.png",
    },
    {
        id: "BVB_PROGRAM",
        title: "bvb_program.title",
        content: "bvb_program.description",
        tips: [
            "bvb_program.tips.target_group",
            "bvb_program.tips.no_certificate_needed",
            "bvb_program.tips.combination",
            "bvb_program.tips.internships",
            "bvb_program.tips.get_certificate",
            "bvb_program.tips.flexibility"
        ],
        links: [
            { title: "bvb_program.links.official_info", url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsvorbereitende-bildungsmassnahme" },
            { title: "bvb_program.links.counselling", url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/berufsberatung" },
            { title: "bvb_program.links.education_offers", url: "https://www.arbeitsagentur.de/bildung" }
        ],
        steps: [
            { title: "bvb_program.steps.apprenticeship_dual", next_question_id: "DUAL_APPRENTICESHIP" },
            { title: "bvb_program.steps.make_appointment", next_question_id: "TODO" },
            { title: "bvb_program.steps.attend_counselling", next_question_id: "TODO" },
            { title: "bvb_program.steps.check_suitability", next_question_id: "TODO" },
            { title: "bvb_program.steps.get_assigned", next_question_id: "TODO" },
            { title: "bvb_program.steps.apply_program", next_question_id: "TODO" },
            { title: "bvb_program.steps.use_guidance", next_question_id: "TODO" }
        ],
        image: "/bvb_program.png",
    },
    {
        id: "EQ_INTERNSHIP",
        title: "eq_internship.title",
        content: "eq_internship.description",
        tips: [
            "eq_internship.tips.duration",
            "eq_internship.tips.transition",
            "eq_internship.tips.schedule",
            "eq_internship.tips.eligibility",
            "eq_internship.tips.school_obligation",
            "eq_internship.tips.allowance",
            "eq_internship.tips.costs",
            "eq_internship.tips.restriction"
        ],
        links: [
            { title: "eq_internship.links.agency_eq", url: "https://www.arbeitsagentur.de/bildung/ausbildung/einstiegsqualifizierung" },
            { title: "eq_internship.links.ihk_eq", url: "https://www.ihk.de/hkw/produktmarken/aus-und-weiterbildung/ausbildung/eq-871220" },
            { title: "eq_internship.links.videos_eq", url: "https://duckduckgo.com/?q=Agentur+f%C3%BCr+Arbeit+EQ+videos+Einstiegsqualifizierung&atb=v348-1&iax=videos&ia=videos" }
        ],
        steps: [
            { title: "eq_internship.steps.apprenticeship", next_question_id: "DUAL_APPRENTICESHIP" },
            { title: "eq_internship.steps.counselling", next_question_id: "TODO" },
            { title: "eq_internship.steps.apply", next_question_id: "TODO" },
            { title: "eq_internship.steps.sponsoring", next_question_id: "TODO" },
            { title: "eq_internship.steps.find_company", next_question_id: "TODO" },
            { title: "eq_internship.steps.ai_help", next_question_id: "TODO" }
        ],
        image: "/eq_internship.png",
    },
    {
        id: "DUAL_APPRENTICESHIP",
        title: "dual_apprenticeship.title",
        content: "dual_apprenticeship.description",
        tips: [
            "dual_apprenticeship.tips.german_level",
            "dual_apprenticeship.tips.motivation_over_grades",
            "dual_apprenticeship.tips.internships_impact",
            "dual_apprenticeship.tips.application_help",
            "no_idea.tips.use_chatgpt",
            "dual_apprenticeship.tips.labor_shortage",
            "dual_apprenticeship.tips.take_your_time",
            "dual_apprenticeship.tips.parallel_channels",
            "dual_apprenticeship.tips.networking",
            "dual_apprenticeship.tips.training_fairs",
            "no_idea.tips.job_centers_advice"
        ],
        links: [
            { title: "no_idea.links.azubi_de", url: "https://www.ausbildung.de" },
            { title: "no_idea.links.arbeits_agentur", url: "https://www.arbeitsagentur.de" },
            { title: "no_idea.links.planet_beruf", url: "https://www.planet-beruf.de" },
            { title: "no_idea.links.berufe_net", url: "https://web.arbeitsagentur.de/berufenet/" },
            { title: "no_idea.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" },
            { title: "dual_apprenticeship.links.ihk_platform", url: "https://meine-ausbildung-in-deutschland.de" },
            { title: "dual_apprenticeship.links.mv_market", url: "https://www.regierung-mv.de/Landesregierung/bm/Schule/Berufliche-Schule/Ausbildungsmarkt" },
            { title: "dual_apprenticeship.links.mv_positions", url: "https://www.ausbildung.de/bundeslaender/mecklenburg_vorpommern" },
            { title: "dual_apprenticeship.links.mv_azubi_de", url: "https://www.azubi.de/ausbildungsplatz/bundesland/mecklenburg-vorpommern" },
            { title: "dual_apprenticeship.links.resume_templates_1", url: "https://www.ausbildung.de/ratgeber/bewerbung/lebenslauf/" },
            { title: "dual_apprenticeship.links.resume_templates_2", url: "https://www.lebenslauf.de/vorlagen/" },
            { title: "dual_apprenticeship.links.cover_letter_templates", url: "https://www.bewerbung2go.de/vorlage/ausbildung" }
        ],
        steps: [
            { title: "dual_apprenticeship.steps.full_time_job", next_question_id: "FIND_JOB" },
            { title: "dual_apprenticeship.steps.interest_check", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.search_online", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.apply_multiple", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.create_resume", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.write_application", next_question_id: "TODO" },
            { title: "bop_internship.steps.find_company", next_question_id: "TODO" },
            { title: "eq_internship.steps.apply", next_question_id: "TODO" }
        ],
        image: "/dual_apprenticeship.png",
    },
    {
        id: "SCHOOL_CERTIFICATE",
        title: "school_certificate.title",
        content: "school_certificate.description",
        tips: [
            "school_certificate.tips.after_compulsory",
            "school_certificate.tips.get_advice",
            "school_certificate.tips.language_improvement",
            "school_certificate.tips.free_programs",
            "school_certificate.tips.consider_pathways",
            "school_certificate.tips.private_costs"
        ],
        links: [
            { title: "school_certificate.links.agency_advice", url: "https://www.arbeitsagentur.de/bildung/schule/schulabschluss-nachholen" },
            { title: "school_certificate.links.vhs_general", url: "https://www.volkshochschule.de/" },
            { title: "school_certificate.links.vhs_finder", url: "https://www.volkshochschule.de/kursfinder.php" },
            { title: "school_certificate.links.school_authority", url: "https://www.bildung-mv.de/" },
            { title: "school_certificate.links.regional_schools", url: "https://www.bildung-mv.de/schule/schularten/" },
            { title: "school_certificate.links.jmd_service", url: "https://www.jugendmigrationsdienste.de/" },
            { title: "school_certificate.links.jmd4you", url: "https://www.jmd4you.de/" },
            { title: "school_certificate.links.mbeon", url: "https://www.mbeon.de/" }
        ],
        steps: [
            { title: "school_certificate.steps.catch_up_vocational", next_question_id: "LOWER_SECONDARY_CERTIFICATE" },
            { title: "school_certificate.steps.catch_up_intermediate", next_question_id: "INTERMEDIATE_CERTIFICATE" },
            { title: "school_certificate.steps.abitur_entrance", next_question_id: "ABITUR" },
            { title: "school_certificate.steps.ukrainian_qual", next_question_id: "UKRAINIAN_SCHOOL_QUALIFICATION" },
            { title: "school_certificate.steps.bvj_prep", next_question_id: "BVJ_PROGRAM" },
            { title: "school_certificate.steps.evening_school", next_question_id: "EVENING_SCHOOL_VHS" },
            { title: "school_certificate.steps.distance_learning", next_question_id: "DISTANCE_LEARNING" },
            { title: "school_certificate.steps.external_exam", next_question_id: "EXTERNAL_CANDIDATE_EXAM" },
            { title: "school_certificate.steps.check_form", next_question_id: "TODO" },
            { title: "school_certificate.steps.use_ai", next_question_id: "TODO" }
        ],
        image: "/school_certificate.png",
    },
    {
        id: "LOWER_SECONDARY_CERTIFICATE",
        title: "lower_secondary_certificate.title",
        content: "lower_secondary_certificate.description",
        tips: [
            "lower_secondary_certificate.tips.not_immediate",
            "lower_secondary_certificate.tips.get_later",
            "lower_secondary_certificate.tips.ukraine_recognition",
            "no_idea.tips.job_centers_advice",
            "no_idea.tips.use_chatgpt"
        ],
        links: [
            { title: "lower_secondary_certificate.links.vhs_mv", url: "https://www.vhs-verband-mv.de/leistungen/zweiter-bildungsweg" },
            { title: "lower_secondary_certificate.links.recognition_mv", url: "https://www.bildung-mv.de/erwachsenenbildung/anerkennung-von-abschluessen/auslaendische-schulabschluesse/index.html" },
            { title: "no_idea.links.jugend_berufs_agentur", url: "https://www.jugendberufsagentur.de" },
            { title: "no_idea.links.jobcenter_digital", url: "https://www.jobcenter.digital" }
        ],
        steps: [
            { title: "lower_secondary_certificate.steps.photo_certificate", next_question_id: "TODO" },
            { title: "lower_secondary_certificate.steps.make_appointment", next_question_id: "TODO" },
            { title: "lower_secondary_certificate.steps.check_equivalence", next_question_id: "TODO" },
            { title: "lower_secondary_certificate.steps.no_certificate_query", next_question_id: "BVJ_PROGRAM" },
            { title: "lower_secondary_certificate.steps.decide_pathway", next_question_id: "TODO" },
            { title: "school_certificate.steps.evening_school", next_question_id: "EVENING_SCHOOL_VHS" },
            { title: "school_certificate.steps.distance_learning", next_question_id: "REMOTE_SCHOOL" },
            { title: "school_certificate.steps.external_exam", next_question_id: "EXTERNAL_CANDIDATE_EXAM" },

            { title: "lower_secondary_certificate.steps.use_ai_tools", next_question_id: "TODO" },
            { title: "lower_secondary_certificate.steps.financial_support", next_question_id: "TODO" }
        ],
        image: "/lower_secondary_certificate.png",
    },
    {
        id: "INTERMEDIATE_CERTIFICATE",
        title: "intermediate_certificate.title",
        content: "intermediate_certificate.description",
        tips: [
            "intermediate_certificate.tips.performance_decides",
            "intermediate_certificate.tips.attendance_matters",
            "intermediate_certificate.tips.key_subjects",
            "intermediate_certificate.tips.ukraine_recognition",
            "intermediate_certificate.tips.parallel_learning",
            "no_idea.tips.use_chatgpt"
        ],
        links: [
            { title: "intermediate_certificate.links.mv_education_info", url: "https://www.regierung-mv.de/Landesregierung/bm/Erwachsenenbildung/Nachholen-von-Schulabschluessen" },
            { title: "school_certificate.links.vhs_main", url: "https://www.volkshochschule.de" }
        ],
        steps: [
            { title: "intermediate_certificate.steps.recognize_certificate", next_question_id: "TODO" },
            { title: "school_certificate.steps.make_appointment", next_question_id: "TODO" },
            { title: "intermediate_certificate.steps.contact_vhs", next_question_id: "EVENING_SCHOOL_VHS" },
            { title: "intermediate_certificate.steps.evening_distance_option", next_question_id: "REMOTE_SCHOOL" },
            { title: "school_certificate.steps.external_exam", next_question_id: "EXTERNAL_CANDIDATE_EXAM" },

            { title: "intermediate_certificate.steps.learning_schedule", next_question_id: "TODO" },
            { title: "lower_secondary_certificate.steps.use_ai_tools", next_question_id: "TODO" },
            { title: "lower_secondary_certificate.steps.financial_support", next_question_id: "TODO" }
        ],
        image: "/intermediate_certificate.png",
    },
    {
        id: "REMOTE_SCHOOL",
        title: "remote_school.title",
        content: "remote_school.description",
        tips: [
            "remote_school.tips.compare_schools",
            "remote_school.tips.former_students",
            "remote_school.tips.fixed_study_times",
            "remote_school.tips.contact_tutors",
            "remote_school.tips.quiet_place",
            "remote_school.tips.early_prep",
            "no_idea.tips.use_chatgpt",
            "remote_school.tips.cost_levels",
            "remote_school.tips.funding_options",
            "remote_school.tips.ask_agency_first"
        ],
        links: [
            { title: "remote_school.links.ils_school", url: "https://www.ils.de" },
            { title: "remote_school.links.sgd_school", url: "https://www.sgd.de" },
            { title: "remote_school.links.klett_academy", url: "https://www.fernakademie-klett.de" },
            { title: "remote_school.links.scholarships", url: "https://www.mystipendium.de/schulabschluss" },
            { title: "remote_school.links.comparison_portal", url: "https://www.fernstudiumcheck.de/fernstudium/schule-allgemeinbildung/schulabschluss-nachholen" },
            { title: "remote_school.links.ba_funding", url: "https://www.arbeitsagentur.de/karriere-und-weiterbildung/foerderung-berufliche-weiterbildung" },
            { title: "remote_school.links.funding_search", url: "https://mein-now.de/privatpersonen/foerderungen" },
            { title: "remote_school.links.bafog_mv", url: "https://www.regierung-mv.de/regierungen/wkm/Wissenschaft/Studium/Studienfinanzierung-(Bafog)/" }
        ],
        steps: [
            { title: "remote_school.steps.research_schools", next_question_id: "TODO" },
            { title: "remote_school.steps.choose_and_apply", next_question_id: "TODO" },
            { title: "remote_school.steps.create_study_plan", next_question_id: "TODO" },
            { title: "remote_school.steps.use_support_systems", next_question_id: "TODO" },
            { title: "remote_school.steps.register_exams", next_question_id: "TODO" },
            { title: "school_certificate.steps.check_form", next_question_id: "SCHOOL_CERTIFICATE" },
            { title: "remote_school.steps.goto_no_idea", next_question_id: "NO_IDEA" },
            { title: "remote_school.steps.goto_have_idea", next_question_id: "HAVE_IDEA" }
        ],
        image: "/remote_school.png",
    },
    {
        id: "ABITUR",
        title: "abitur.title",
        content: "abitur.description",
        tips: [
            "abitur.tips.study_fields",
            "abitur.tips.language_skills",
            "abitur.tips.pathway_options",
            "abitur.tips.self_check",
            "abitur.tips.duration",
            "abitur.tips.pros_cons",
            "abitur.tips.learning_aids",
            "abitur.tips.restart_help"
        ],
        links: [
            { title: "abitur.links.schulliste", url: "https://www.schulliste.eu/" },
            { title: "abitur.links.abitur_nachholen", url: "https://www.abitur-nachholen.org/" }
        ],
        steps: [
            { title: "abitur.steps.adult_college", next_question_id: "COLLEGE_PREP_ADULTS" },
            { title: "abitur.steps.evening_school", next_question_id: "EVENING_SCHOOL_VHS" },
            { title: "abitur.steps.distance_learning", next_question_id: "REMOTE_SCHOOL" },
            { title: "abitur.steps.external_exam", next_question_id: "EXTERNAL_CANDIDATE_EXAM" },
            { title: "abitur.steps.search_school", next_question_id: "TODO" },
            { title: "abitur.steps.check_recognition", next_question_id: "TODO" },
            { title: "abitur.steps.placement_test", next_question_id: "TODO" },
            { title: "abitur.steps.counseling", next_question_id: "TODO" },
            { title: "abitur.steps.realistic_check", next_question_id: "TODO" },
            { title: "abitur.steps.online_prep", next_question_id: "TODO" },
            { title: "abitur.steps.use_ai", next_question_id: "TODO" }
        ],
        image: "/abitur.png",
    },
    {
        id: "EVENING_SCHOOL_VHS",
        title: "evening_school_vhs.title",
        content: "evening_school_vhs.description",
        tips: [
            "evening_school_vhs.tips.where_to_get_advice",
            "evening_school_vhs.tips.offered_courses",
            "evening_school_vhs.tips.when_classes_take_place",
            "evening_school_vhs.tips.cost_info"
        ],
        links: [
            { title: "evening_school_vhs.links.mv_system_overview", url: "https://www.bildung-mv.de/erwachsenenbildung/nachholen-von-bildungsabschluessen/gallery" },
            { title: "evening_school_vhs.links.mv_vhs_finder", url: "https://www.vhs-verband-mv.de/ueber-uns/unsere-volkshochschulen" },
            { title: "evening_school_vhs.links.germany_vhs_finder", url: "https://www.volkshochschule.de/vhs-welt/meine-vhs-finden/index.php" },
            { title: "evening_school_vhs.links.vhs_info_portal", url: "https://www.vhs-verband-mv.de/" },
            { title: "evening_school_vhs.links.vhs_explainer_video", url: "https://www.vhs-neuss.de/fileadmin/redaktion/Video/Was_kann_ich_bei_der_VHS_Neuss_machen.mp4" }
        ],
        steps: [
            { title: "evening_school_vhs.steps.vhs_search_tool", next_question_id: "TODO" },
            { title: "evening_school_vhs.steps.language_learning_sections", next_question_id: "TODO" },
            { title: "evening_school_vhs.steps.complete_school_certificate", next_question_id: "TODO" },
            { title: "evening_school_vhs.steps.second_education_pathway", next_question_id: "TODO" },
            { title: "evening_school_vhs.steps.goto_no_idea", next_question_id: "NO_IDEA" },
            { title: "evening_school_vhs.steps.goto_have_idea", next_question_id: "HAVE_IDEA" }
        ],
        image: "/evening_school_vhs.png",
    },
    {
        id: "EXTERNAL_CANDIDATE_EXAM",
        title: "external_candidate_exam.title",
        content: "external_candidate_exam.description",
        tips: [
            "external_candidate_exam.tips.certificates_available",
            "external_candidate_exam.tips.preparation_methods",
            "external_candidate_exam.tips.be_realistic",
            "external_candidate_exam.tips.use_ai",
            "external_candidate_exam.tips.application_deadline"
        ],
        links: [
            { title: "external_candidate_exam.links.mv_info", url: "https://www.bildung-mv.de/erwachsenenbildung/nachholen-von-bildungsabschluessen/nichtschuelerpruefung/" },
            { title: "external_candidate_exam.links.abitur_pathway", url: "https://www.abitur.com/abitur-per-externenpruefung-machen/" },
            { title: "external_candidate_exam.links.find_authority", url: "https://www.bildung-mv.de/schule/staatliche-schulaemter/" }
        ],
        steps: [
            { title: "external_candidate_exam.steps.read_certificates", next_question_id: "TODO" },
            { title: "external_candidate_exam.steps.check_prep_options", next_question_id: "TODO" },
            { title: "external_candidate_exam.steps.plan_workload", next_question_id: "TODO" },
            { title: "external_candidate_exam.steps.use_digital_tools", next_question_id: "TODO" },
            { title: "external_candidate_exam.steps.contact_authority", next_question_id: "TODO" },
            { title: "external_candidate_exam.steps.goto_no_idea", next_question_id: "NO_IDEA" },
            { title: "external_candidate_exam.steps.goto_have_idea", next_question_id: "HAVE_IDEA" }
        ],
        image: "/external_candidate_exam.png",
    },
    {
        id: "COLLEGE_PREP_ADULTS",
        title: "college_prep_adults.title",
        content: "college_prep_adults.description",
        tips: [
            "college_prep_adults.tips.common_pathway",
            "college_prep_adults.tips.prerequisites",
            "college_prep_adults.tips.german_improvement",
            "college_prep_adults.tips.financial_support",
            "college_prep_adults.tips.studienkolleg_distinction"
        ],
        links: [
            { title: "college_prep_adults.links.ba_overview", url: "https://www.arbeitsagentur.de/karriere-und-weiterbildung/nachholen-zweiter-bildungsweg" },
            { title: "college_prep_adults.links.evening_schools_overview", url: "https://www.fernstudi.net/abendschulen" },
            { title: "college_prep_adults.links.greifswald_school", url: "https://www.abendgym-greifswald.de/" },
            { title: "college_prep_adults.links.neubrandenburg_school", url: "https://www.abendgymnasium-nb.de/" },
            { title: "college_prep_adults.links.rostock_school", url: "https://abendgymnasium-rostock.de/" },
            { title: "college_prep_adults.links.schwerin_school", url: "https://www.abendgymnasium-schwerin.de/" }
        ],
        steps: [
            { title: "college_prep_adults.steps.check_certs", next_question_id: "TODO" },
            { title: "college_prep_adults.steps.contact_school", next_question_id: "TODO" },
            { title: "college_prep_adults.steps.prepare_docs", next_question_id: "TODO" },
            { title: "college_prep_adults.steps.language_check", next_question_id: "TODO" },
            { title: "college_prep_adults.steps.goto_no_idea", next_question_id: "NO_IDEA" },
            { title: "college_prep_adults.steps.goto_have_idea", next_question_id: "HAVE_IDEA" }
        ],
        image: "/college_prep_adults.png",
    },
    {
        id: "HAVE_IDEA",
        title: "have_idea.title",
        content: "have_idea.description",
        tips: [
            "have_idea.tips.check_requirements",
            "have_idea.tips.real_examples",
            "have_idea.tips.compare_professions",
            "have_idea.tips.cert_check",
            "have_idea.tips.start_early",
            "have_idea.tips.prep_programs",
            "have_idea.tips.ask_counselors",
            "have_idea.tips.use_ai"
        ],
        links: [
            { title: "have_idea.links.berufenet", url: "https://web.arbeitsagentur.de/berufenet/" },
            { title: "have_idea.links.planet_beruf", url: "https://www.planet-beruf.de/" },
            { title: "have_idea.links.berufe_tv", url: "https://www.berufe.tv/" },
            { title: "have_idea.links.counseling", url: "https://www.arbeitsagentur.de/bildung/berufsberatung/welche-ausbildung-welches-studium-passt" },
            { title: "have_idea.links.azubi_de", url: "https://www.azubi.de/" },
            { title: "have_idea.links.vhs_portal", url: "https://www.vhs-lernportal.de/" },
            { title: "have_idea.links.jobcenter", url: "https://www.jobcenter.digital/" },
            { title: "have_idea.links.berufe_tv_workplaces", url: "https://www.berufe.tv/" },
            { title: "have_idea.links.azubi_de_desc", url: "https://www.azubi.de/beruf" },
            { title: "have_idea.links.berufenet_advanced", url: "https://web.arbeitsagentur.de/berufenet/" },
            { title: "have_idea.links.planet_beruf_simple", url: "https://www.planet-beruf.de/" }
        ],
        steps: [
            { title: "have_idea.steps.school_cert", next_question_id: "SCHOOL_CERTIFICATE" },
            { title: "have_idea.steps.professions_demand", next_question_id: "DEMAND_IN_MV" },
            { title: "have_idea.steps.bvb_prep", next_question_id: "BVB_PROGRAM" },
            { title: "have_idea.steps.prevocational_school", next_question_id: "BVJ_S_PROGRAM" },
            { title: "have_idea.steps.eq_internship", next_question_id: "EQ_INTERNSHIP" },
            { title: "have_idea.steps.create_cv", next_question_id: "TODO" },
            { title: "have_idea.steps.talk_counselor", next_question_id: "TODO" },
            { title: "have_idea.steps.contact_companies", next_question_id: "TODO" },
            { title: "have_idea.steps.learn_german", next_question_id: "LEARN_GERMAN" },
            { title: "have_idea.steps.prepare_email", next_question_id: "TODO" }
        ],
        image: "/have_idea.png",
    },
    {
        id: "UKRAINIAN_SCHOOL_QUALIFICATION",
        title: "ukrainian_school_qualification.title",
        content: "ukrainian_school_qualification.description",
        tips: [
            "ukrainian_school_qualification.tips.decide_location",
            "ukrainian_school_qualification.tips.check_license",
            "ukrainian_school_qualification.tips.ausbildung_vs_uni",
            "ukrainian_school_qualification.tips.recognition_procedure",
            "ukrainian_school_qualification.tips.abitur_warning"
        ],
        links: [
            { title: "ukrainian_school_qualification.links.edebo_registry", url: "https://registry.edbo.gov.ua/" },
            { title: "ukrainian_school_qualification.links.online_schools", url: "https://school.org.ua/" },
            { title: "ukrainian_school_qualification.links.mon_ministry", url: "https://mon.gov.ua/" },
            { title: "ukrainian_school_qualification.links.mon_schooling", url: "https://mon.gov.ua/ua/tag/zagalna-serednya-osvita" },
            { title: "ukrainian_school_qualification.links.testportal", url: "https://testportal.gov.ua/" },
            { title: "ukrainian_school_qualification.links.anerkennung_counseling", url: "https://www.anerkennung-in-deutschland.de" },
            { title: "ukrainian_school_qualification.links.anerkennung_pro", url: "https://www.anerkennung-in-deutschland.de/html/de/fachkraefte.php" },
            { title: "ukrainian_school_qualification.links.zab_kmk", url: "https://zab.kmk.org/de/zeugnisbewertung" },
            { title: "ukrainian_school_qualification.links.anabin", url: "https://anabin.kmk.org/anabin.html" }
        ],
        steps: [
            { title: "ukrainian_school_qualification.steps.supplementary_classes", next_question_id: "SUPPLEMENTARY_CLASSES" },
            { title: "ukrainian_school_qualification.steps.distance_learning", next_question_id: "DISTANCE_LEARNING" },
            { title: "ukrainian_school_qualification.steps.external_learning", next_question_id: "EXTERNAL_SCHOOLING" },
            { title: "ukrainian_school_qualification.steps.private_schools", next_question_id: "PRIVATE_SCHOOLS" },
            { title: "ukrainian_school_qualification.steps.clarify_target", next_question_id: "TODO" },
            { title: "ukrainian_school_qualification.steps.ai_explanation", next_question_id: "TODO" },
            { title: "ukrainian_school_qualification.steps.check_registry", next_question_id: "TODO" },
            { title: "ukrainian_school_qualification.steps.keep_copies", next_question_id: "TODO" }
        ],
        image: "/ukrainian_school_certification.png",
    },
    {
        id: "SUPPLEMENTARY_CLASSES",
        title: "supplementary_classes.title",
        content: "supplementary_classes.description",
        tips: [
            "supplementary_classes.tips.recognition_not_automatic",
            "supplementary_classes.tips.check_official_status"
        ],
        links: [
            { title: "supplementary_classes.links.ukraine_is_home", url: "https://ukraineishome.org/uk/education/" },
            { title: "supplementary_classes.links.mon_enrollment", url: "https://ukrainian.studies.mon.gov.ua" },
            { title: "supplementary_classes.links.school_list", url: "https://lookerstudio.google.com/u/0/reporting/d0ba2dcf-a4c3-4cee-a79d-163b4e26396b/page/ZUBzC" }
        ],
        steps: [
            { title: "supplementary_classes.steps.recognition_process", next_question_id: "RECOGNITION_CERTIFICATES" },
            { title: "supplementary_classes.steps.choose_school", next_question_id: "TODO" },
            { title: "supplementary_classes.steps.ask_about_subjects", next_question_id: "TODO" },
            { title: "supplementary_classes.steps.collect_reports", next_question_id: "TODO" },
            { title: "supplementary_classes.steps.complete_subjects", next_question_id: "TODO" },
            { title: "supplementary_classes.steps.keep_records", next_question_id: "TODO" }
        ],
        image: "/supplementary_classes.png",
    },
    {
        id: "DISTANCE_LEARNING",
        title: "distance_learning.title",
        content: "distance_learning.description",
        tips: [
            "distance_learning.tips.contact_previous_school",
            "distance_learning.tips.attend_current_or_other",
            "distance_learning.tips.german_attendance_rules"
        ],
        links: [
            { title: "distance_learning.links.mon_gov_ua", url: "https://mon.gov.ua" },
            { title: "distance_learning.links.isuo_org", url: "https://isuo.org" },
            { title: "distance_learning.links.edbo_database", url: "https://info.edbo.gov.ua/news/09-02-2024-yak-diznatysia-iaki-zaklady-osvity-ie-v-pevnomu-rehioni-ukrainy/" }
        ],
        steps: [
            { title: "distance_learning.steps.contact_school_step", next_question_id: "TODO" },
            { title: "distance_learning.steps.find_new_school", next_question_id: "TODO" },
            { title: "distance_learning.steps.prepare_docs", next_question_id: "TODO" },
            { title: "distance_learning.steps.inform_german_school", next_question_id: "TODO" },
            { title: "distance_learning.steps.recognition_process", next_question_id: "RECOGNITION_CERTIFICATES" }
        ],
        image: "/distance_learning.png",
    },
    {
        id: "EXTERNAL_SCHOOLING",
        title: "external_schooling.title",
        content: "external_schooling.description",
        tips: [
            "external_schooling.tips.flexible_learning",
            "external_schooling.tips.stay_connected",
            "external_schooling.tips.official_certificates",
            "external_schooling.tips.combine_abroad",
            "external_schooling.tips.less_time",
            "external_schooling.tips.online_platforms"
        ],
        links: [
            { title: "external_schooling.links.uis_org", url: "https://uis.org.ua" },
            { title: "external_schooling.links.lms_eschool", url: "https://lms.e-school.net.ua" },
            { title: "external_schooling.links.mon_gov", url: "https://mon.gov.ua" }
        ],
        steps: [
            { title: "external_schooling.steps.choose_school", next_question_id: "TODO" },
            { title: "external_schooling.steps.email_admin", next_question_id: "TODO" },
            { title: "external_schooling.steps.prepare_docs", next_question_id: "TODO" },
            { title: "external_schooling.steps.recognition_process", next_question_id: "RECOGNITION_CERTIFICATES" }
        ],
        image: "/external_schooling.png",
    },
    {
        id: "PRIVATE_SCHOOLS",
        title: "private_schools.title",
        content: "private_schools.description",
        tips: [
            "private_schools.tips.prices_vary",
            "private_schools.tips.not_easier",
            "private_schools.tips.check_recognition",
            "private_schools.tips.beware_contracts"
        ],
        links: [
            { title: "private_schools.links.privatschulberatung", url: "https://www.privatschulberatung.de/" },
            { title: "private_schools.links.bildungsserver", url: "https://www.bildungsserver.de/bildungswesen-allgemein/privatschulen-in-deutschland-12374-de.html" }
        ],
        steps: [
            { title: "private_schools.steps.search_compare", next_question_id: "TODO" },
            { title: "private_schools.steps.check_certificate_need", next_question_id: "TODO" },
            { title: "private_schools.steps.contact_school", next_question_id: "TODO" },
            { title: "private_schools.steps.check_contract", next_question_id: "TODO" },
            { title: "private_schools.steps.recognition_process", next_question_id: "RECOGNITION_CERTIFICATES" }
        ],
        image: "/private_schools.png",
    },
    {
        id: "RECOGNITION_CERTIFICATES",
        title: "recognition_certificates.title",
        content: "recognition_certificates.description",
        tips: [
            "recognition_certificates.tips.application_method",
            "recognition_certificates.tips.incomplete_apps",
            "recognition_certificates.tips.official_certification",
            "recognition_certificates.tips.translation_requirement",
            "recognition_certificates.tips.cost_coverage"
        ],
        links: [
            { title: "recognition_certificates.links.mv_info", url: "https://www.bildung-mv.de/erwachsenenbildung/anerkennung-von-abschluessen/auslaendische-schulabschluesse/" }
        ],
        steps: [
            { title: "recognition_certificates.steps.prepare_docs", next_question_id: "TODO" },
            { title: "recognition_certificates.steps.ask_funding", next_question_id: "TODO" },
            { title: "recognition_certificates.steps.translate_docs", next_question_id: "TODO" },
            { title: "recognition_certificates.steps.certify_copies", next_question_id: "TODO" },
            { title: "recognition_certificates.steps.send_post", next_question_id: "TODO" },
            { title: "recognition_certificates.steps.goto_no_idea", next_question_id: "NO_IDEA" },
            { title: "recognition_certificates.steps.goto_have_idea", next_question_id: "HAVE_IDEA" }
        ],
        image: "/recognition_certificates.png",
    },
    {
        id: "LEARN_GERMAN",
        title: "learn_german.title",
        content: "learn_german.description",
        tips: [
            "learn_german.tips.practice_over_grammar",
            "learn_german.tips.combine_life_courses",
            "learn_german.tips.free_offers",
            "learn_german.tips.start_early",
            "learn_german.tips.work_improves_skills",
            "learn_german.tips.imperfect_okay",
            "learn_german.tips.decide_method",
            "learn_german.tips.daily_success",
            "learn_german.tips.use_ai"
        ],
        links: [
            { title: "learn_german.links.bamf_integration", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" },
            { title: "learn_german.links.vhs_portal", url: "http://www.vhs-lernportal.de/" },
            { title: "learn_german.links.goethe_institute", url: "https://www.goethe.de/de/spr/ueb.html" },
            { title: "learn_german.links.dw_learn_german", url: "https://learngerman.dw.com/" },
            { title: "learn_german.links.babbel_app", url: "https://play.google.com/store/apps/details?id=de.babbel.mobile.android.en" }
        ],
        steps: [
            { title: "learn_german.steps.integration_courses", next_question_id: "INTEGRATION_COURSES" },
            { title: "learn_german.steps.job_related_courses", next_question_id: "JOB_RELATED_COURSES" },
            { title: "learn_german.steps.vhs_portal", next_question_id: "VHS_LEARNING_PLATFORM" },
            { title: "learn_german.steps.goethe_institute", next_question_id: "TODO" },
            { title: "learn_german.steps.language_exams", next_question_id: "TODO" },
            { title: "learn_german.steps.everyday_practice", next_question_id: "TODO" },
            { title: "learn_german.steps.apps_others", next_question_id: "APPS_PRIVATE_OFFERS" }
        ],
        image: "/learn_german.png",
    },
    {
        id: "INTEGRATION_COURSES",
        title: "integration_courses.title",
        content: "integration_courses.description",
        tips: [
            "integration_courses.tips.course_structure",
            "integration_courses.tips.placement_test",
            "integration_courses.tips.course_types",
            "integration_courses.tips.attendance_mode",
            "integration_courses.tips.ukrainian_refugees",
            "integration_courses.tips.costs_fee",
            "integration_courses.tips.fee_exemption"
        ],
        links: [
            { title: "integration_courses.links.bamf_info", url: "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html" },
            { title: "integration_courses.links.bamf_finder", url: "https://bamf-navi.bamf.de/en/Themen/Integrationskurse/" },
            { title: "integration_courses.links.bamf_application", url: "https://www.bamf.de/SharedDocs/Anlagen/DE/Integration/Integrationskurse/Kursteilnehmer/AntraegeAlle/630-007_antrag-zulassung-integrationskurs-ausl_pdf.html?nn=282388" }
        ],
        steps: [
            { title: "integration_courses.steps.check_suitability", next_question_id: "TODO" },
            { title: "integration_courses.steps.take_test", next_question_id: "TODO" },
            { title: "integration_courses.steps.apply_admission", next_question_id: "TODO" },
            { title: "integration_courses.steps.find_provider", next_question_id: "TODO" },
            { title: "integration_courses.steps.register_course", next_question_id: "TODO" }
        ],
        image: "/integration_courses.png",
    },
    {
        id: "JOB_RELATED_COURSES",
        title: "job_related_courses.title",
        content: "job_related_courses.description",
        tips: [
            "job_related_courses.tips.b1_requirement",
            "job_related_courses.tips.course_variety",
            "job_related_courses.tips.format_options",
            "job_related_courses.tips.flexibility",
            "job_related_courses.tips.cost_rules",
            "job_related_courses.tips.participation_permit"
        ],
        links: [
            { title: "job_related_courses.links.bamf_general", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/BerufsbezogeneSprachfoerderung/berufsbezogenesprachfoerderung-node.html" },
            { title: "job_related_courses.links.bamf_azubi", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Azubi-BSK/azubi-bsk-node.html" },
            { title: "job_related_courses.links.bamf_participation", url: "https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/BSK/bsk-teilnahme-node.html" }
        ],
        steps: [
            { title: "job_related_courses.steps.contact_authority", next_question_id: "TODO" },
            { title: "job_related_courses.steps.check_permit", next_question_id: "TODO" },
            { title: "job_related_courses.steps.choose_school", next_question_id: "TODO" },
            { title: "job_related_courses.steps.bring_docs", next_question_id: "TODO" },
            { title: "job_related_courses.steps.placement_test", next_question_id: "TODO" },
            { title: "job_related_courses.steps.attend_regularly", next_question_id: "TODO" },
            { title: "job_related_courses.steps.final_exam", next_question_id: "TODO" }
        ],
        image: "/job_related_courses.png",
    },
    {
        id: "VHS_LEARNING_PLATFORM",
        title: "vhs_learning_platform.title",
        content: "vhs_learning_platform.description",
        tips: [
            "vhs_learning_platform.tips.advice",
            "vhs_learning_platform.tips.language_interest",
            "vhs_learning_platform.tips.school_certificate"
        ],
        links: [
            { title: "vhs_learning_platform.links.mv_overview", url: "https://www.bildung-mv.de/erwachsenenbildung/nachholen-von-bildungsabschluessen/gallery" },
            { title: "vhs_learning_platform.links.mv_finder", url: "https://www.vhs-verband-mv.de/ueberuns/unsere-volkshochschulen" },
            { title: "vhs_learning_platform.links.de_finder", url: "https://www.volkshochschule.de/vhs-welt/meine-vhs-finden/index.php" },
            { title: "vhs_learning_platform.links.mv_association", url: "https://www.vhs-verband-mv.de/" },
            { title: "vhs_learning_platform.links.explainer_video", url: "https://www.vhs-neuss.de/fileadmin/redaktion/Video/Was_kann_ich_bei_der_VHS_Neuss_machen.mp4" }
        ],
        steps: [
            { title: "vhs_learning_platform.steps.find_nearest", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.book_appointment", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.take_test", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.choose_goal", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.register_course", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.check_funding", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.start_routine", next_question_id: "TODO" },
            { title: "vhs_learning_platform.steps.plan_next", next_question_id: "TODO" }
        ],
        image: "/vhs_learning_courses.png",
    },
    {
        id: "APPS_PRIVATE_OFFERS",
        title: "apps_private_offers.title",
        content: "apps_private_offers.description",
        tips: [
            "apps_private_offers.tips.supplement_course",
            "apps_private_offers.tips.watch_costs",
            "apps_private_offers.tips.free_limits",
            "apps_private_offers.tips.provider_transparency",
            "apps_private_offers.tips.practice_only"
        ],
        links: [
            { title: "apps_private_offers.links.duolingo", url: "https://www.duolingo.com/" },
            { title: "apps_private_offers.links.babbel", url: "https://www.babbel.com/" },
            { title: "apps_private_offers.links.busuu", url: "https://www.busuu.com/" },
            { title: "apps_private_offers.links.dw_learn", url: "https://learngerman.dw.com/" },
            { title: "apps_private_offers.links.youtube", url: "https://www.youtube.com/" }
        ],
        steps: [
            { title: "apps_private_offers.steps.check_public_courses", next_question_id: "TODO" },
            { title: "apps_private_offers.steps.practice_everyday", next_question_id: "TODO" },
            { title: "apps_private_offers.steps.assess_level", next_question_id: "TODO" },
            { title: "apps_private_offers.steps.combine_learning", next_question_id: "TODO" }
        ],
        image: "/apps_private_offers.png",
    },
    {
        id: "FIND_JOB",
        title: "find_job.title",
        content: "find_job.description",
        tips: [
            "find_job.tips.portal_focus",
            "find_job.tips.similar_positions",
            "find_job.tips.support_services",
            "find_job.tips.hidden_market",
            "find_job.tips.internships",
            "find_job.tips.apply_anyway",
            "find_job.tips.track_applications"
        ],
        links: [
            { title: "find_job.links.arbeitsagentur", url: "https://www.arbeitsagentur.de/jobsuche/?angebotsart=4" },
            { title: "find_job.links.indeed", url: "https://de.indeed.com" },
            { title: "find_job.links.stepstone", url: "https://www.stepstone.de" },
            { title: "find_job.links.lebenslauf_de", url: "https://www.lebenslauf.de/vorlagen/" },
            { title: "find_job.links.lebenslauf_com", url: "https://lebenslauf.com/vorlagen-und-muster" },
            { title: "find_job.links.easy_lebenslauf", url: "https://easy-lebenslauf.de" }
        ],
        steps: [
            { title: "find_job.steps.register_portals", next_question_id: "TODO" },
            { title: "find_job.steps.use_ai", next_question_id: "TODO" },
            { title: "find_job.steps.adapt_cv", next_question_id: "TODO" },
            { title: "find_job.steps.search_routine", next_question_id: "TODO" },
            { title: "find_job.steps.google_companies", next_question_id: "TODO" }
        ],
        image: "/find_job.png",
    },
];
