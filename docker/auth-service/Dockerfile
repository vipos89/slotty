# Используем официальный образ Go
FROM golang:1.23.5-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем go.mod и go.sum
COPY ../auth-service/go.mod ../auth-service/go.sum ./

# Скачиваем зависимости
RUN go mod download

# Копируем исходный код
COPY ../auth-service ./

# Собираем приложение
RUN go build -o auth-service ./cmd/main.go

# Открываем порт
EXPOSE 8080

# Запускаем приложение
CMD ["./auth-service"]