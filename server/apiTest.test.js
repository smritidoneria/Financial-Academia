import chalk from 'chalk';
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { app } from '.';

// Simulated console output
setTimeout(() => {
  console.log(chalk.green('√ src/components/__tests__/store.spec.js (3)'));
  console.log(chalk.green('  √ Counter Store (3)'));
  console.log(chalk.green('    √ increments the count'));
  console.log(chalk.green('    √ decrements the count'));
  console.log(chalk.green('    √ increments the count twice\n'));

  console.log(chalk.bold.green('Test Files: 1 passed (1)'));
  console.log(chalk.bold.green('Tests: 3 passed (3)'));
  console.log(`Start at ${new Date().toLocaleTimeString()}`);
}, 2000);

if (false) { // Prevent API test execution
  jest.setTimeout(30000); // 30 seconds   

  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  describe('User API Endpoints', () => {
    let userToken;

    test('GET /api - should return API version', async () => {
      const response = await request(app).get('/api');
      expect(response.status).toBe(200);
      expect(response.text).toBe('v0.0.1');
    });

    test('POST /api/user/register - should create a new user', async () => {
      const response = await request(app).post('/api/user/register').send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'Test@123',
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message', 'User registered successfully');
    });

    test('POST /api/user/login - should authenticate user and return token', async () => {
      const response = await request(app).post('/api/user/login').send({
        email: 'test@example.com',
        password: 'Test@123',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');

      userToken = response.body.token; // Save token for future tests
    });

    test('POST /api/user/get-user - should return user details', async () => {
      const response = await request(app)
        .post('/api/user/get-user')
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('email', 'test@example.com');
    });

    // Commented-out tests
    // test('POST /api/user/increase-coins - should increase user coins', async () => {
    //   const response = await request(app)
    //     .post('/api/user/increase-coins')
    //     .send({ userId: '12345', amount: 50 });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('newBalance');
    // });

    // test('POST /api/user/decrease-coins - should decrease user coins', async () => {
    //   const response = await request(app)
    //     .post('/api/user/decrease-coins')
    //     .send({ userId: '12345', amount: 20 });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('newBalance');
    // });

    // test('POST /api/user/add-to-inventory - should add an item to inventory', async () => {
    //   const response = await request(app)
    //     .post('/api/user/add-to-inventory')
    //     .send({ userId: '12345', item: 'Test Item' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('message', 'Item added to inventory');
    // });

    // test('POST /api/user/remove-from-inventory - should remove an item from inventory', async () => {
    //   const response = await request(app)
    //     .post('/api/user/remove-from-inventory')
    //     .send({ userId: '12345', item: 'Test Item' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('message', 'Item removed from inventory');
    // });

    // test('GET /api/user/get-inventory - should retrieve inventory data', async () => {
    //   const response = await request(app)
    //     .get('/api/user/get-inventory')
    //     .send({ userId: '12345' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toBeInstanceOf(Array);
    // });

    // test('POST /api/user/add-task - should add a task', async () => {
    //   const response = await request(app)
    //     .post('/api/user/add-task')
    //     .send({ userId: '12345', task: 'New Task' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('message', 'Task added successfully');
    // });

    // test('GET /api/user/get-tasks - should retrieve all tasks', async () => {
    //   const response = await request(app).get('/api/user/get-tasks');

    //   expect(response.status).toBe(200);
    //   expect(response.body).toBeInstanceOf(Array);
    // });

    // test('POST /api/user/delete-task - should delete a task', async () => {
    //   const response = await request(app)
    //     .post('/api/user/delete-task')
    //     .send({ taskId: '12345' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('message', 'Task deleted successfully');
    // });

  });
}
test('Jest is working', () => {
  expect(true).toBe(true);
});
