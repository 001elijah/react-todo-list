FROM node:18-alpine
WORKDIR /react-todo-list/
COPY public/ /react-todo-list/public
COPY src/ /react-todo-list/src
COPY package.json /react-todo-list/
RUN npm install
CMD ["npm", "start"]