FROM node:19
ENV PORT 8080
WORKDIR /app
RUN chmod +rwx /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
