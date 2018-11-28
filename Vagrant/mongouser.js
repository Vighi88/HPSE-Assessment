db.createUser(
  {
    user: "tester1",
    pwd: "taas",
    roles: [ { role: "readWrite", db: "TAAS" } ]
  }
)
