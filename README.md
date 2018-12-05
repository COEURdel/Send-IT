[![Maintainability](https://api.codeclimate.com/v1/badges/ec81a45d5f4fa1409536/maintainability)](https://codeclimate.com/github/COEURdel/Send-IT/maintainability) [![Build Status](https://travis-ci.org/COEURdel/Send-IT.svg?branch=master)](https://travis-ci.org/COEURdel/Send-IT) [![Coverage Status](https://coveralls.io/repos/github/COEURdel/Send-IT/badge.svg)](https://coveralls.io/github/COEURdel/Send-IT)

# SEND-IT


SendIT is a courier service that helps users deliver parcels to different destinations and provides courier quotes based on weight categories.

## Required Features

- Users can create an account and log in.
- Users can create a parcel delivery order.
- Users can change the destination of a parcel delivery order.
- Users can cancel a parcel delivery order.
- Users can see the details of a delivery order.
- Admin can change the status and present location of a parcel delivery order.

## Optional Features

- The application should display a Google Map with Markers showing the pickup location
and the destination.
- The application should display computed travel distance and journey duration between
the pickup location and the destination. Leverage Google Maps Distance Matrix Service.
- The user gets real-time email notification when Admin changes the status of their parcel.
- The user gets real-time email notification when Admin changes the present location of their parcel.


## Technologies

- Nodejs
- Express
- Mocha, Chai, Babel, eslint
- Postgres
- JWT authentication

## API Endpoints

| Endpoint                                         | Functionality                      |
| ------------------------------------------------ | ---------------------------------- |
| POST /auth/signup                                | Register a user                    |
| POST /auth/login                                 | Login a user                       |
| GET /parcels                                       | Get all parcels        |
| GET /parcels/\<parcelId>                             | Get the details of a single parcel |
| POST /users/parcels                                | Create a parcel                |
| POST /parcels/\<parcelsId>/orders                   | Make a parcel order               |
| GET /users/parcels/\<parcelId>/orders              | Get all parcel delivery orders           |
| PUT /users/parcels/\<parcelId>/orders/\<orderId> | Accept or Reject a parcel delivery order    |

[SendIT API Documentation](https://___.docs.apiary.io/#)

## Build Setup

```
clone repo and cd into directory

git clone https://github.com/CoeurDel/Sendit.git
```
```
# install dependencies
yarn install # or npm install

#serve in development environment
yarn run dev

# build for production
yarn run build
```

## Testing

```
# Run test cases
yarn test
```

##

API Endpoint: https://

## AUTHOR
Runoro Isaie

