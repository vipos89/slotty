# Используем официальный образ Go
FROM golang:1.23.5-alpine
# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем go.mod и go.sum
COPY ../api-gateway/go.mod ../api-gateway/go.sum ./

# Скачиваем зависимости
RUN go mod download

# Копируем исходный код
COPY ../api-gateway ./

# Собираем приложение
RUN go build -o api-gateway ./cmd/main.go

# Открываем порт
EXPOSE 8000

# Запускаем приложение
CMD ["./api-gateway"]