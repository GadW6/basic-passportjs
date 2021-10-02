const records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findById = (uid) => {
  return new Promise((resolve, reject) => {
    records.find(key => {
      if (key.id === uid) resolve(key)
    })
    resolve(false)
    reject(new Error(`User with id: ${id} does not exist`))
  })
}

exports.findByUsername = (uname) => {
  return new Promise((resolve, reject) => {
    records.find(value => {
      if (value.username === uname) resolve(value)
    })
    resolve(false)
    reject(new Error(`User with credentials: ${uname} does not exist`))
  })
}