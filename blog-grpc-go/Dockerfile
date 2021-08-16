FROM golang:1.16-alpine
WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY data data
COPY ./protos ./protos
COPY ./server ./server
RUN ls
RUN  cd server && go build .
CMD ./server/server