import {createWebHistory, createRouter} from 'vue-router';

import HomePage from '../Pages/HomePage.vue';
import AboutUsPage from '../Pages/AboutUsPage.vue';
import GamePage from '../Pages/GamePage.vue';
import GalleryPage from '../Pages/GalleryPage.vue';
import LeaderboardPage from '../Pages/LeaderboardPage.vue';
import LoginPage from '../Pages/LoginPage.vue';
import SignUpPage from '../Pages/SignUpPage.vue';
import ProfilePage from '../Pages/ProfilePage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/game',
        name: 'GamePage',
        component: GamePage,
    },
    {
        path: '/leaderboard',
        name: 'LeaderboardPage',
        component: LeaderboardPage,
    },
    {
        path: '/gallery',
        name: 'GalleryPage',
        component: GalleryPage,
    },
    {
        path: '/about',
        name: 'AboutUsPage',
        component: AboutUsPage,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/signup',
        name: 'SignUpPage',
        component: SignUpPage,
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;