import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import CurriculumVitae from "../components/CurriculumVitae/CurriculumVitae";
import CurriculumVitaeEdit from "../components/CurriculumVitae/CurriculumVitaeEdit";
import Basic from "../components/Edit/Basic";
import Job from "../components/Edit/Job";
import Skill from "../components/Edit/Skill";
import Other from "../components/Edit/Other";
import Education from "../components/Edit/Education";
import AddBasic from "../components/Add/AddBasic";
import AddJob from "../components/Add/AddJob";
import AddSkill from "../components/Add/AddSkill";
import AddOther from "../components/Add/AddOther";
import AddEducation from "../components/Add/AddEducation";
import CurriculumVitaePrint from "../components/CurriculumVitae/CurriculumVitaePrint";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add',
        name: 'Add new CV',
        component: CurriculumVitae
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: CurriculumVitaeEdit
    },
    {
        path: '/print/:id',
        name: 'Print',
        component: CurriculumVitaePrint
    },
    {
        path: '/editBasic/:id',
        name: 'EditBasic',
        component: Basic
    },
    {
        path: '/editJob/:id',
        name: 'EditJob',
        component: Job
    },
    {
        path: '/editSkill/:id',
        name: 'EditSkill',
        component: Skill
    },
    {
        path: '/editOther/:id',
        name: 'EditOther',
        component: Other
    },
    {
        path: '/editEducation/:id',
        name: 'EditEducation',
        component: Education
    },
    {
        path: '/addBasic',
        name: 'AddBasic',
        component: AddBasic
    },
    {
        path: '/addJob',
        name: 'AddJob',
        component: AddJob
    },
    {
        path: '/addSkill',
        name: 'AddSkill',
        component: AddSkill
    },
    {
        path: '/addOther',
        name: 'AddOther',
        component: AddOther
    },
    {
        path: '/addEducation',
        name: 'AddEducation',
        component: AddEducation
    },
]
const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
