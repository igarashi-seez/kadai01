FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y software-properties-common
RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php
RUN apt-get update
RUN apt-get install -y php7.4

COPY ./ /var/www/html/

CMD [ "php", "-S", "0.0.0.0:80", "-t", "/var/www/html/" ]