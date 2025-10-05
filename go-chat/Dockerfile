# Builder stage
FROM golang:alpine AS builder
WORKDIR /app

# Copy go.mod and go.sum first for dependency resolution
COPY go.mod .
COPY go.sum .

# Copy the rest of the source code
COPY . .

# Download dependencies
RUN go mod tidy

# Build the Go app
RUN go build -o main .

# Final stage
FROM alpine:latest
WORKDIR /root/

# Copy the binary from builder
COPY --from=builder /app/main .

# Command to run the executable
CMD ["./main"]




