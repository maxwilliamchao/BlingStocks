use users

db.users.insert({
  username: 'Brandon',
  email: 'api@gmail.com',
  password:'cool',
  phone: 5555555555,
  createdAt: Date.now,
  stocks: [{
    AAPL: 'AAPL',
    GOOGL: 'GOOGL'
  }]
})