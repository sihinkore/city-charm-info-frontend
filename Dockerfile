FROM node:15.4.0-alpine

ARG WORKDIR
ARG CONTAINER_PORT
ARG API_URL

ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0  \
  API_URL=${API_URL} \
  # 追加
  NPM_CONFIG_PRODUCTION=false

# ENV check（このRUN命令は確認のためなので無くても良い）
RUN echo ${HOME}
RUN echo ${CONTAINER_PORT}
RUN echo ${API_URL}

WORKDIR ${HOME}

# 追加
COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn run build
# ここまで

EXPOSE ${CONTAINER_PORT}
