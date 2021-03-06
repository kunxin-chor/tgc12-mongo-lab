/* HANDS ON PAGE 1 */

// 1. All companies founded in the year 2006
db.companies.find({
    'founded_year': 2006
}, {
    'name': 1,
    'founded_year': 1
})

// 2. All companies founded after the year 2000
db.companies.find({
    'founded_year': {
        '$gt': 2000
    }
}, {
    'name': 1,
    'founded_year': 1
})

// 3. founded between 1900 and 2010
db.companies.find({
    'founded_year': {
        '$gte':1900,
        '$lte':2010
    }
},{
   'name':1,
   'founded_year': 1 
}).pretty()

// 3a.
db.companies.find({
    'ipo.valuation_amount': {
        '$gt':100000000,
    }},{
        'name': 1,
        'ipo.valuation_amount': 1
    }
).pretty()

// 3b.
db.companies.find({
    'ipo.valuation_amount': {
        '$gt':100000000
    },
    'ipo.valuation_currency_code': {
        '$regex':'usd', '$options':'i'
    }
},{
    'name':1    ,
    'ipo.valuation_amount':1,
    'ipo.valuation_currency_code':1
}).pretty()

/* Slide 2 */

// 1
db.inspections.find({
    "result":"Violation Issued"
},{
    "business_name": 1,
    "result": 1
})

// 2.
db.inspections.find({
    "result": "Violation Issued",
    "address.city":"NEW YORK"
}, {
    "result": 1,
    "address.city": 1
})

// 3.
db.inspections.find({
    'address.city':'NEW YORK'
}).count()

db.inspections.find({
    'result': {
        '$ne':'Violation Issued'
    },
    'address.city':"RIDGEWOOD"
}).count()

