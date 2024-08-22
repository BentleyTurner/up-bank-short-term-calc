# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup
The following commands are to be run in the app directory
### `npm i`
Installs the app

### `npm start`
Runs the app in the development mode.

### `npm run test`
Runs the test suite

## Notes

### General Code Structure
I did my best to seperate the code out into reusable components that we could extend and refactor as needed.
I kept stlying to an absolute minimum just using tailwinds as I have used it before

### Calculating the Final Amount
I did quite a bit of googling on the subject and played around with the calculator sent as a reference with my tech test to verify my work
I followed the Formula found at: https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php

The Formula is as follows: `Final Total = Starting deposit * ( 1 + Annual interest rate as decimal / interest Occurances per year) ^ Interest Occurances per investment term`

I decided to use months as the investment term because using decimals i.e 1.5 years to be 18 months complicated my math more

### What would I do next
- More tests (I was already over time so I settled for only writing tests for the calculation function)
- Displaythe interest earned (Simple to do and I saw it in the calculator linked but once again out of time)
- Sffixes to the fields so they read nicer (show 13 months instead of just 13)
- Ranges for the fields so the values make more sense and show errors if outside of those ranges
- Fix / add more styles


