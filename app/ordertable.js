module.exports = function() {
  var data = { users: [] }
  for (var i = 0; i < 100; i++) {
    data.users.push({ orgid: i+3000, orgname: "ABS", porg:"GHT", upo:"G453", curl:"feyt" , lmod: "564", stat:"t" })
  }
  return data
}
