FROM node:18.14.1-alpine
COPY . /
RUN yarn install
CMD ["yarn", "start"]