FROM node:10.13-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
ADD --chown=node:node ./pages/location/[[]location].tsx ./pages/location/
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]