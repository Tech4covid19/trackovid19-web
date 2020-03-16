FROM centos:7.6.1810

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 13.5.0
ENV ANGULAR_VERSION 9.0.6

RUN source ${NVM_DIR}/nvm.sh \
    && nvm install ${NODE_VERSION} \
    && nvm alias default ${NODE_VERSION} \
    && nvm use default

ENV NODE_PATH ${NVM_DIR}/v${NODE_VERSION}/lib/node_modules
ENV PATH ${NVM_DIR}/versions/node/v${NODE_VERSION}/bin:${PATH}

RUN mkdir -p /web_trackovid19/node_modules

COPY . /web_trackovid19

WORKDIR /web_trackovid19

RUN npm install pm2 -g
RUN npm install -g @angular/cli@${ANGULAR_VERSION}
RUN npm install --save-dev @angular-devkit/build-angular@0.900.6
RUN npm install

CMD npm start