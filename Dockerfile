FROM node:latest
ENV PORT 8080
ENV HOME=/home/app
WORKDIR $HOME
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
