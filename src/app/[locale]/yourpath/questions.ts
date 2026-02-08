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
            { title: "demand_in_mv.steps.bvj_year", next_question_id: "BVJ_PROGRAM" },
            { title: "demand_in_mv.steps.bvj_s_language", next_question_id: "BVJ_S_PROGRAM" },
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
    {
        id: "BVJ_PROGRAM",
        title: "bvj_program.title",
        content: "bvj_program.description",
        tips: [
            "bvj_program.tips.daz_focus",
            "bvj_program.tips.language_practice_mix",
            "bvj_program.tips.attendance_compulsory",
            "bvj_program.tips.early_start",
            "bvj_program.tips.parents_involvement",
            "no_idea.tips.use_chatgpt",
            "no_idea.tips.job_centers_advice",
            "earn_money.tips.german_skills"
        ],
        links: [
            { title: "bvj_program.links.ba_info", url: "https://www.arbeitsagentur.de/bildung" },
            { title: "bvj_program.links.ausbildung_de_bvj", url: "https://www.ausbildung.de/ratgeber/bvj/" },
            { title: "bvj_program.links.ausbildungspark_abc", url: "https://www.ausbildungspark.com/ausbildungs-abc/berufsvorbereitungsjahr-ausbildung-bvj" },
            { title: "bvj_program.links.kmk_education", url: "https://www.kmk.org" },
            { title: "bvj_program.links.dqr_certificate", url: "https://www.dqr.de/dqr/shareddocs/qualifikationen-neu/de/Berufsvorbereitungsjahr-BVJ-an-beruflichen-Schulen-Abgangszeugnis-mit-Gleichstellungsvermerk-zum-Hauptschulabschluss.html" },
            { title: "bvj_program.links.videos_bvj", url: "https://duckduckgo.com/?q=Berufsvorbereitungsjahr+%28BVJ%29%09%09%09&atb=v348-1&ia=videos&iax=videos" },
            { title: "no_idea.links.jugend_berufs_agentur", url: "https://www.jugendberufsagentur.de" }
        ],
        steps: [
            { title: "bvj_program.steps.contact_schools_mv", next_question_id: "TODO" },
            { title: "bvj_program.steps.check_regional_options", next_question_id: "TODO" },
            { title: "bvj_program.steps.prepare_documents", next_question_id: "TODO" },
            { title: "bvj_program.steps.plan_internships", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_appointment", next_question_id: "TODO" },
            { title: "no_idea.steps.ask_your_school", next_question_id: "TODO" },
            { title: "no_idea.steps.search_for_companies", next_question_id: "TODO" }
        ],
        image: "/1.png",
    },
    {
        id: "BVJ_S_PROGRAM",
        title: "bvj_s_program.title",
        content: "bvj_s_program.description",
        tips: [
            "bvj_program.tips.daz_focus",
            "bvj_program.tips.language_practice_mix",
            "bvj_program.tips.attendance_compulsory",
            "bvj_program.tips.early_start",
            "bvj_program.tips.parents_involvement",
            "bvj_s_program.tips.helpful_for_limited_german",
            "bvj_s_program.tips.internships_orientation",
            "no_idea.tips.use_chatgpt",
            "no_idea.tips.job_centers_advice"
        ],
        links: [
            { title: "bvj_s_program.links.mv_schools_overview", url: "https://www.bildung-mv.de/de/schule/berufliche_schulen/" },
            { title: "bvj_s_program.links.mv_education_server", url: "https://www.bildung-mv.de/" },
            { title: "bvj_s_program.links.ba_vocational_schools", url: "https://www.arbeitsagentur.de/bildung/berufliche-schule" },
            { title: "bvj_s_program.links.vhs_portal", url: "https://www.vhs-lernportal.de/" },
            { title: "bvj_s_program.links.dw_learn_german", url: "https://learngerman.dw.com/" },
            { title: "bvj_s_program.links.goethe_practice", url: "https://www.goethe.de/prj/dfd/de/home.cfm" },
            { title: "no_idea.links.jugend_berufs_agentur", url: "https://www.jugendberufsagentur.de" },
            { title: "no_idea.links.arbeits_agentur", url: "https://www.arbeitsagentur.de" }
        ],
        steps: [
            { title: "bvj_program.steps.contact_schools_mv", next_question_id: "TODO" },
            { title: "bvj_program.steps.check_regional_options", next_question_id: "TODO" },
            { title: "bvj_program.steps.prepare_documents", next_question_id: "TODO" },
            { title: "bvj_s_program.steps.ask_entry_dates", next_question_id: "TODO" },
            { title: "bvj_program.steps.plan_internships", next_question_id: "TODO" },
            { title: "bvj_program.steps.contact_social_workers", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_appointment", next_question_id: "TODO" }
        ],
        image: "/1.png",
    },
    {
        id: "BVB_PROGRAM",
        title: "bvb_program.title",
        content: "bvb_program.description",
        tips: [
            "bvb_program.tips.no_plan_suitable",
            "bvb_program.tips.no_certificate_ok",
            "bvb_program.tips.learning_practice_mix",
            "bvb_program.tips.several_internships",
            "bvb_program.tips.obtain_certificate",
            "bvb_program.tips.flexible_adapted",
            "no_idea.tips.use_chatgpt",
            "no_idea.tips.job_centers_advice"
        ],
        links: [
            { title: "bvb_program.links.official_ba_info", url: "https://www.arbeitsagentur.de/bildung/ausbildung/berufsvorbereitende-bildungsmassnahme" },
            { title: "no_idea.links.arbeits_agentur", url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/berufsberatung" },
            { title: "bvb_program.links.local_agency", url: "https://www.arbeitsagentur.de/vor-ort" },
            { title: "no_idea.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" }
        ],
        steps: [
            { title: "bvb_program.steps.make_appointment", next_question_id: "TODO" },
            { title: "bvb_program.steps.attend_counselling", next_question_id: "TODO" },
            { title: "bvb_program.steps.check_suitability", next_question_id: "TODO" },
            { title: "bvb_program.steps.get_assigned", next_question_id: "TODO" },
            { title: "bvb_program.steps.apply_bvb", next_question_id: "TODO" },
            { title: "bvb_program.steps.use_internships", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_appointment", next_question_id: "TODO" }
        ],
        image: "/career_paths.png",
    },
    {
        id: "EQ_INTERNSHIP",
        title: "eq_internship.title",
        content: "eq_internship.description",
        tips: [
            "eq_internship.tips.duration",
            "eq_internship.tips.transition",
            "eq_internship.tips.time_model",
            "eq_internship.tips.prerequisite",
            "eq_internship.tips.school_mandatory",
            "eq_internship.tips.allowance",
            "eq_internship.tips.costs",
            "eq_internship.tips.company_based_only",
            "no_idea.tips.use_chatgpt",
            "no_idea.tips.job_centers_advice"
        ],
        links: [
            { title: "eq_internship.links.employment_agency", url: "https://www.arbeitsagentur.de/bildung/ausbildung/einstiegsqualifizierung" },
            { title: "eq_internship.links.ihk", url: "https://www.ihk.de/ihk-w-produkte/aus-und-weiterbildung/ausbildung/eq-871220" },
            { title: "eq_internship.links.videos", url: "https://duckduckgo.com/?q=Agentur+f%C3%BCr+Arbeit+%E2%80%93+Einstiegsqualifizierung&atb=v348-1&ia=videos&iax=videos" },
            { title: "no_idea.links.check_u", url: "https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt" }
        ],
        steps: [
            { title: "eq_internship.steps.check_reqs", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_appointment", next_question_id: "TODO" },
            { title: "bop_internship.steps.consultation_interview", next_question_id: "TODO" },
            { title: "eq_internship.steps.find_company", next_question_id: "TODO" },
            { title: "eq_internship.steps.apply", next_question_id: "TODO" },
            { title: "bop_internship.steps.wait_approval", next_question_id: "TODO" },
            { title: "no_idea.steps.search_for_companies", next_question_id: "TODO" }
        ],
        image: "/1.png",
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
            { title: "dual_apprenticeship.steps.full_time_job", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.interest_check", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.search_online", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.apply_multiple", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.create_resume", next_question_id: "TODO" },
            { title: "dual_apprenticeship.steps.write_application", next_question_id: "TODO" },
            { title: "bop_internship.steps.find_company", next_question_id: "TODO" },
            { title: "eq_internship.steps.apply", next_question_id: "TODO" }
        ],
        image: "/career_paths.png",
    },
    {
        id: "SCHOOL_CERTIFICATE",
        title: "school_certificate.title",
        content: "school_certificate.description",
        tips: [
            "school_certificate.tips.obtain_after_compulsory",
            "school_certificate.tips.advice_saves_time",
            "school_certificate.tips.language_improvement",
            "school_certificate.tips.free_programmes",
            "school_certificate.tips.several_pathways",
            "no_idea.tips.check_costs_involved",
            "no_idea.tips.use_chatgpt"
        ],
        links: [
            { title: "school_certificate.links.ba_school_advice", url: "https://www.arbeitsagentur.de/bildung/schule/schulabschluss-nachholen" },
            { title: "school_certificate.links.jba_advice", url: "https://www.jugendberufsagentur.de/" },
            { title: "school_certificate.links.vhs_main", url: "https://www.volkshochschule.de/" },
            { title: "school_certificate.links.vhs_finder", url: "https://www.volkshochschule.de/kursfinder.php" },
            { title: "school_certificate.links.mv_educational_counseling", url: "https://www.bildung-mv.de/" },
            { title: "school_certificate.links.mv_school_types", url: "https://www.bildung-mv.de/schueler/schularten/" },
            { title: "school_certificate.links.jmd_service", url: "https://www.jugendmigrationsdienste.de/" },
            { title: "school_certificate.links.jmd4you_portal", url: "https://www.jmd4you.de/" },
            { title: "school_certificate.links.mbeon_app", url: "https://www.mbeon.de/" }
        ],
        steps: [
            { title: "school_certificate.steps.vocational_qual", next_question_id: "TODO" },
            { title: "school_certificate.steps.intermediate_qual", next_question_id: "TODO" },
            { title: "school_certificate.steps.abitur", next_question_id: "TODO" },
            { title: "school_certificate.steps.ukrainian_qual", next_question_id: "TODO" },
            { title: "school_certificate.steps.bvj_pathway", next_question_id: "BVJ_PROGRAM" },
            { title: "school_certificate.steps.evening_school", next_question_id: "TODO" },
            { title: "school_certificate.steps.distance_learning", next_question_id: "TODO" },
            { title: "school_certificate.steps.external_exam", next_question_id: "TODO" },
            { title: "school_certificate.steps.check_form", next_question_id: "TODO" }
        ],
        image: "/1.png",
    },
];
