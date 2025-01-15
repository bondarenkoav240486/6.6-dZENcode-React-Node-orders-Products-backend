require('dotenv').config();
const mongoose = require('mongoose');
const Order = require('./models/Order');
const Product = require('./models/Product');

const orders = [
  {
    orderId: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: [
      { productId: 1, amount: 1 },
      { productId: 2, amount: 2 },
    ],
  },
  {
    orderId: 2,
    title: 'Order 2',
    date: '2018-07-29 12:09:33',
    description: 'desc',
    products: [
      { productId: 1, amount: 3 },
      { productId: 2, amount: 4 },
    ],
  },
  {
    orderId: 3,
    title: 'Order 3',
    date: '2019-08-29 12:09:33',
    description: 'desc',
    products: [
      { productId: 1, amount: 5 },
      { productId: 2, amount: 6 },
    ],
  },
];

const products = [
  {
    productId: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    productId: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 2',
    type: 'Telephones',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: 0 },
      { value: 5200, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    productId: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 3',
    type: 'Monitors',
    specification: 'Specification 3',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 300, symbol: 'USD', isDefault: 0 },
      { value: 7800, symbol: 'UAH', isDefault: 1 },
    ],
    order: 3,
    date: '2017-06-29 12:09:33',
  },
  {
    productId: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 4',
    type: 'refrigerators',
    specification: 'Specification 4',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 400, symbol: 'USD', isDefault: 0 },
      { value: 10400, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    productId: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 5',
    type: 'refrigerators',
    specification: 'Specification 5',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 500, symbol: 'USD', isDefault: 0 },
      { value: 13000, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    productId: 6,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 6',
    type: 'refrigerators',
    specification: 'Specification 5',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 600, symbol: 'USD', isDefault: 0 },
      { value: 15600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 3,
    date: '2017-06-29 12:09:33',
  },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('Connected to MongoDB');

  await Order.deleteMany({});
  await Product.deleteMany({});

  await Order.insertMany(orders);
  await Product.insertMany(products);

  console.log('Data seeded successfully');
  mongoose.connection.close();
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});