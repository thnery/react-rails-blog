# React Rails Blog

This is a blog application written in Ruby on Rails and React. The backend is
Ruby on Rails with --api and the frontend is a React application.

## Requirements

* MySQL 5.7
* Ruby 2.7.3
* Node 15.7.0
* Yarn 1.22.10
* Docker and Docker Compose (optional)

## Running with Docker Compose

From root directory run: 

* `$ docker-compose up` or `$ docker-compose -d` to run in daemon

To stop the application hit `ctrl + c` or run `$ docker-compose stop`

The API will be available at `localhost:3001` and the frontend at
`localhost:3000`.

In another terminal setup the database:

* `$ docker-compose exec api bundle exec rails db:create`
* `$ docker-compose exec api bundle exec rails db:migrate`
* `$ docker-compose exec api bundle exec rails db:seed` (optional)

## Running without Docker Compose

* `cd rails-blog-api && bundle exec rails server -p 3001`

In another terminal run:

* `cd react-blog-client && yarn start`

Setup the database

* `bundle exec rails db:create`
* `bundle exec rails db:migate`
* `bundle exec rails db:seed`

## Logs

To check the logs with Docker Compose in daemon (-d option), run:

* `$ docker-compose logs -f api`

#### Specifications

* Hottest Posts: The posts with more reactions for its comments
