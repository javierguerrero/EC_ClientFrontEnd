
https://mherman.org/blog/dockerizing-a-react-app/
Instalar dependencias
faker
json-server
npm-run-all

npm install faker json-server npm-run-all --save-dev





docker build -f Dockerfile.dev -t sample:dev 


```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/package.json \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```


docker run -it \
-v ${PWD}:/usr/src/app \
-v /usr/src/app/node_modules \
-v /usr/src/app/package.json \
-p 3000:3000 \
--rm \
sample:dev