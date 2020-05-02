# FROM ubuntu:18.04
# RUN mkdir -p /home/portfolio && chown -R root:root /home/portfolio
# WORKDIR /home/portfolio
# COPY index.html ./
# EXPOSE 3001
# CMD tail -f /dev/null

FROM node:10.13-alpine
RUN mkdir -p /home/node/portfolioapp/node_modules && chown -R node:node /home/node/portfolioapp
WORKDIR /home/node/portfolioapp
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3001
CMD ["npm", "start"]