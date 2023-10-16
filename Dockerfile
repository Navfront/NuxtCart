FROM node 
WORKDIR /app
COPY /.output/ /app
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "/app/server/index.mjs"]