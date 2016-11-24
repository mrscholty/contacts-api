# Contacts API

sample REST based API for demo purposes

Mock Data for contacts generated from https://www.mockaroo.com/

## endpoints

get all contacts (returns an array)
- `http://localhost:3000/api/contacts`

get one contact by id (returns an object)
- `http://localhost:3000/api/contacts/1`


##live demo endpoints
- http://lab.mrscholty.com:3020/api/contacts
- http://lab.mrscholty.com:3020/api/contacts/1

## sample contact record
```
{
  "id": 1,
  "first_name": "Janet",
  "last_name": "Kelley",
  "gender": "Female",
  "email": "jkelley0@netvibes.com",
  "phone": "81-(352)427-7913",
  "birthday": "6/25/1993",
  "address_street": "0 Katie Center",
  "address_city": "Murakami"
}
```

## running the app

1. switch to contacts-api `cd contacts-api`
2. install the dependencies `npm install`
3. run in "dev" mode (using nodemon) `npm start`
4. build the app (for production) `npm run build`

