import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import DashboardView from '../views/DashboardView.vue';
import RegisterClientView from '../views/RegisterClientView.vue';
import RegisterCreditView from '@/views/RegisterCreditView.vue';
import GetHistoryView from '@/views/GetHistoryView.vue'; // Importa la vista de historial

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirige la ruta raíz al login
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }, // Añade esta meta para indicar que la ruta requiere autenticación
  },
  {
    path: '/clients',
    name: 'Clients',
    meta: { requiresAuth: true },
    // component: ClientsView, // Agrega esta vista más adelante si es necesario
  },
  {
    path: '/new-credit',
    name: 'NewCredit',
    component: RegisterCreditView,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/register-client',
    name: 'RegisterClient',
    component: RegisterClientView,
    meta: { requiresAuth: true },
  },
  {
    path: '/history',
    name: 'History',
    component: GetHistoryView, // Asocia la nueva ruta al componente de historial
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login', // Redirige cualquier ruta desconocida al login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Agrega un guard de navegación para proteger rutas que requieren autenticación
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirige a la página de login si intenta acceder a una ruta protegida sin estar autenticado
    next('/login');
  } else if ((to.path === '/login' || to.path === '/signup') && isAuthenticated) {
    // Redirige al dashboard si intenta acceder a login o signup estando autenticado
    next('/dashboard');
  } else {
    // Permite el acceso si no hay restricciones
    next();
  }
});

export default router;
