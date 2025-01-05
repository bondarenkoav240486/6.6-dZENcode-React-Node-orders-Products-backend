const orders = [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: [
        { id: 1, amount: 1 },
        { id: 2, amount: 2 },
      ],
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2018-07-29 12:09:33',
      description: 'desc',
      products: [
        { id: 1, amount: 3 },
        { id: 2, amount: 4 },
      ],
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2019-08-29 12:09:33',
      description: 'desc',
      products: [
        { id: 1, amount: 5 },
        { id: 2, amount: 6 },
      ],
    },
  ];
  
  const products = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
  
  module.exports = { orders, products };