# Встановлення базового образу
FROM node:20

# Встановлення робочої директорії
WORKDIR /app

# Копіювання package.json та package-lock.json до робочої директорії
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання всіх файлів проекту до робочої директорії
COPY . .

# Відкриття порту, на якому буде працювати бекенд
EXPOSE 3001

# Команда запуску сервера
CMD ["npm", "start"]
