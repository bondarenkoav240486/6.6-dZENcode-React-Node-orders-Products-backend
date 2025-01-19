CREATE TABLE Orders (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  date DATETIME,
  description TEXT
);

CREATE TABLE Products (
  id INT PRIMARY KEY,
  serialNumber INT,
  isNew BOOLEAN,
  photo VARCHAR(255),
  title VARCHAR(255),
  type VARCHAR(255),
  specification TEXT,
  guarantee_start DATETIME,
  guarantee_end DATETIME,
  price_value DECIMAL(10, 2),
  price_symbol VARCHAR(10),
  price_isDefault BOOLEAN,
  order_id INT,
  date DATETIME,
  FOREIGN KEY (order_id) REFERENCES Orders(id)
);
