module.exports = function() {
  var data = { users: [] }
  for (var i = 0; i < 6; i++) {
    data.users.push({ id: i+3000 })
  }
  return data
}
