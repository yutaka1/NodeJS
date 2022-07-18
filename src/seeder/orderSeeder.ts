import { AppDataSource } from "../dataSource";
import { Product } from "../entity/productEntity";
import { faker } from '@faker-js/faker';
import { randomInt } from "crypto";
import { Order } from "../entity/orderEntity";
import { OrderItem } from "../entity/orderItemEntity";

AppDataSource.initialize()
  .then(async () => {
    const orderRepository = AppDataSource.getRepository(Order);
    const orderItemRepository = AppDataSource.getRepository(OrderItem);

    for (let i = 0; i < 30; i++) {
      const order = await orderRepository.save({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email()
      });

      for(let j = 0; j < randomInt(1,5); j++){
       await orderItemRepository.save({
          order,
          product_title: faker.lorem.words(2),
          price: randomInt(10, 100),
          quantity: randomInt(1, 5),
        });
      }
    }

    process.exit(0);
  });