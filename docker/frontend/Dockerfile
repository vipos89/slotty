# Используем официальный образ Node.js
FROM node:16-alpine as build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY ../frontend/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY ../frontend ./

# Собираем приложение
RUN npm run build

# Используем легкий Nginx для продакшна
FROM nginx:alpine as production-stage

# Копируем собранные файлы
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]