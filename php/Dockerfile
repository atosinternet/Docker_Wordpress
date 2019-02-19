FROM php:7.1-fpm

ENV PHP_EXTRA_CONFIGURE_ARGS --enable-fpm --with-fpm-user=www-data --with-fpm-group=www-data --enable-intl --enable-opcache --enable-zip

RUN echo 'deb http://httpredir.debian.org/debian jessie contrib' >> /etc/apt/sources.list

RUN apt-get update && apt-get upgrade -y
RUN export DEBIAN_FRONTEND=noninteractive && apt-get update && apt-get install -y --force-yes curl  libcurl4-gnutls-dev libxml2-dev libicu-dev libmcrypt-dev  libmemcached11 libmemcached-dev

RUN apt-get update && apt-get install -y --no-install-recommends \
        g++ \
        autoconf \
        git \
        vim \
        re2c \
        # libpng3 \
        libtidy-dev \
        libgd-dev \
        libvpx-dev \
        libmagic-dev \
        libexif-dev \
        file \
        libssh2-1-dev \
        libjpeg-dev \
        curl \
        wget \
        librabbitmq-dev \
        # libzip-dev \
        # libzip2 \
        # libpng++-dev \
        libxslt1-dev \
        libimlib2-dev \
        libxpm-dev \
        libltdl-dev \
        libbz2-dev \
        zlib1g-dev \
		# libicu52 \
        # libicu-dev \
		# libpng-dev \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libmcrypt4 \
		libmcrypt-dev \
        libcurl4-gnutls-dev \
        libxml2-dev \
        # libpng12-dev \
        libssl-dev \
        unzip \
        libxslt-dev \
	&& apt-get clean all \
	&& docker-php-ext-enable \
		opcache \
  && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-install \
		intl \
		zip \
		exif \
		gd \
		pdo \
		pdo_mysql \
		mcrypt \
		bcmath \
        bz2 \
        mbstring \
        xml \
        wddx \
        gettext \
        curl \
        json \
        xsl \
        mysqli \
        hash \
        simplexml \
        soap \
        dom \
        pcntl \
        phar \
        posix \
	&& apt-get purge -y \
		zlib1g-dev \
		# libicu-dev \
		# libpng-dev \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libmcrypt-dev \
	&& apt-get autoremove -y

## Install GD
RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev 
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install gd

#Xdebug
RUN yes | pecl install xdebug

#APCu
#RUN yes | pecl install apcu-5.1.5 && docker-php-ext-enable apcu wddx

## Install Composer
RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer

RUN chown -R www-data:www-data /var/www/
RUN chmod -R g+w /var/www/

EXPOSE 9000
CMD ["php-fpm"]
