import express, { Router } from "express"
import { Register, Login, AuthenticatedUser, Logout, UpdateInfo, UpdatePassword } from "./controller/authController"
import { Permissions } from "./controller/permissionController";
import { CreateRole, Roles, GetRole, UpdateRole, DeleteRole } from "./controller/roleController";
import { CreateProduct, Products, GetProduct, UpdateProduct, DeleteProduct } from "./controller/productController";
import { Users, CreateUser, GetUser, UpdateUser, DeleteUser } from "./controller/userController";
import { AuthMiddleware } from "./middleware/authMiddleware";
import { Upload } from "./controller/imageController";
import multer from "multer";
import path from "path";
import { Chart, Export, Orders } from "./controller/orderController";

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

  router.get('/api/permissions', AuthMiddleware, Permissions);

  router.get('/api/roles', AuthMiddleware, Roles);
  router.post('/api/roles', AuthMiddleware, CreateRole);
  router.get('/api/roles/:id', AuthMiddleware, GetRole);
  router.put('/api/roles/:id', AuthMiddleware, UpdateRole);
  router.delete('/api/roles/:id', AuthMiddleware, DeleteRole);

  router.get('/api/products', AuthMiddleware, Products);
  router.post('/api/products', AuthMiddleware, CreateProduct);
  router.get('/api/products/:id', AuthMiddleware, GetProduct);
  router.put('/api/products/:id', AuthMiddleware, UpdateProduct);
  router.delete('/api/products/:id', AuthMiddleware, DeleteProduct);

  
  router.post('/api/upload/:id', AuthMiddleware, Upload);
  router.use('/api/upload/:id', express.static('./uploads'));

  router.get('/api/orders', AuthMiddleware, Orders);
  router.post('/api/export', AuthMiddleware, Export);
  router.get('/api/chart', AuthMiddleware, Chart);
}