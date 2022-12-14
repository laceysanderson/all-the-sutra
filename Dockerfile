FROM httpd:bullseye
MAINTAINER Lacey-Anne Sanderson <laceyannesanderson@gmail.com>

USER root

COPY . /app

EXPOSE 3000

RUN chmod -R +x /app && apt-get update 1> ~/aptget.update.log \
  && apt-get install git curl gcc make libpng-dev --yes -qq 1> ~/aptget.extras.log

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
	&& apt install nodejs

WORKDIR /app
