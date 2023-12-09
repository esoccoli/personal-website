FROM node:latest
ENV PORT 8080
WORKDIR /app
RUN chown -R 1003490000:0 "/.npm"
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
