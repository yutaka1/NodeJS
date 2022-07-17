import { Router } from "express"
import { Register, Login, AuthenticatedUser, Logout, UpdateInfo, UpdatePassword } from "./controller/auth.controller"
import { Users, CreateUser, GetUser, UpdateUser, DeleteUser } from "./controller/user.constroller";
import { AuthMiddleware } from "./middleware/auth.middleware";

export const routes = (router: Router) => {
  router.post('/api/register', Register);
  router.post('/api/login', Login);
  router.post('/api/user', AuthMiddleware, AuthenticatedUser);
  router.post('/api/logout', AuthMiddleware, Logout);
  router.put('/api/users/info', AuthMiddleware, UpdateInfo);
  router.put('/api/users/password', AuthMiddleware, UpdatePassword);
  
  router.get('/api/users', AuthMiddleware, Users);
  router.post('/api/users', AuthMiddleware, CreateUser);
  router.get('/api/users/:id', AuthMiddleware, GetUser);
  router.put('/api/users/:id', AuthMiddleware, UpdateUser);
  router.delete('/api/users/:id', AuthMiddleware, DeleteUser);
}