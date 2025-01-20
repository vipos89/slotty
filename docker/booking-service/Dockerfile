# Используем официальный образ Go
FROM golang:1.23.5-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем go.mod и go.sum
COPY ../booking-service/go.mod ../booking-service/go.sum ./

# Скачиваем зависимости
RUN go mod download

# Копируем исходный код
COPY ../booking-service ./

# Собираем приложение
RUN go build -o booking-service ./cmd/main.go

# Открываем порт
EXPOSE 8081

# Запускаем приложение
CMD ["./booking-service"]