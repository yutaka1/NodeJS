import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "rootroot",
  database: "node_app",
  entities: [
    "src/entity/*.ts"
  ],
  logging: false,
  synchronize: true
})