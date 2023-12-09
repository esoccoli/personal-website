FROM node:19
ENV PORT 8080
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
