FROM node:12-alpine

WORKDIR .
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000