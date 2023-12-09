FROM node:19
ENV PORT 8080
WORKDIR /app
RUN chmod +rw /
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
