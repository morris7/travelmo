FROM node:10.13-alpine
RUN mkdir -p /home/portfolio && chown -R node:node /home/portfolio
WORKDIR /home/portfolio
COPY ../portfolio/index.html ./index.html
EXPOSE 3001