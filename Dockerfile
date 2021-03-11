FROM node:14.16.0

ENV HOME /usr/src/
WORKDIR $HOME

# copy files needed for the install
COPY "package.json" "yarn.lock" $HOME

# Install dependencies
RUN apt-get update && apt-get install -y nodejs yarn
RUN yarn install

# Copy project files
COPY . $HOME

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 3000

# Запуск проекта
CMD ["yarn", "run", "dev"]
