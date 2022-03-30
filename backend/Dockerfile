FROM node:16 AS build-env

ADD package.json /app/
ADD package-lock.json /app/
ADD server.js /app/

RUN cd /app; npm ci --only=production

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app /app
WORKDIR /app
ENV PORT 8080
EXPOSE 8080
CMD [ "server.js" ]