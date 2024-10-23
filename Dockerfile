FROM node:20-alpine AS build
WORKDIR "/app"
COPY . .
RUN npm install --force
EXPOSE 3000
CMD ["npm","run","dev"]