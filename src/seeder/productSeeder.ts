import { AppDataSource } from "../dataSource";
import { Product } from "../entity/productEntity";
import { faker } from '@faker-js/faker';
import { randomInt } from "crypto";

AppDataSource.initialize()
  .then(async () => {
    const repository = AppDataSource.getRepository(Product);

    for (let i = 0; i < 30; i++) {
      await repository.save({
        title: faker.lorem.words(2),
        description: faker.lorem.words(20),
        image: faker.image.imageUrl(200, 200, '', true),
        price: randomInt(10, 100)
      });
    }

    process.exit(0);
  });