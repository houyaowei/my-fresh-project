FROM denoland/deno:2.1.4

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts

EXPOSE 8000

CMD ["run", "-A", "main.ts"]