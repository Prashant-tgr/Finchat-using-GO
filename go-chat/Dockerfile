FROM golang:alpine AS builder
WORKDIR /app

COPY go.mod .
COPY go.sum .
COPY . .

RUN go mod tidy
RUN go build -o main .

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .
CMD ["./main"]
