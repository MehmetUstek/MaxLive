FROM golang:latest

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y sqlite3 && go build -o analytics main.go

CMD [ "./analytics" ]