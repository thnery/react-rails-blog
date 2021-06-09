FROM ruby:2.7

RUN curl -sL https://deb.nodesource.com/setup_15.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list 
 
RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends \
     nodejs \
     yarn 

COPY Gemfile* /usr/src/app/
WORKDIR /usr/src/app 
ENV BUNDLE_PATH /bundler_gems 
RUN bundle install 

COPY . /usr/src/app/ 
