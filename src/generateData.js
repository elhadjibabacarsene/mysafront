//On fait appel à faker
var faker = require('faker');

//On initialise notre database fictif
var database = { users: [], profils: [] };

//TODO:On crée les données avec faker
  tabProfil = ['ADMIN','FORMATEUR','APPRENANT','CM'];
  tabProfil.forEach(((value, index) => {
    database.profils.push({
      id: index+1,
      libelle: value,
      archivage: faker.random.boolean()
    });
    for (var i=1; i<=5; i++){
        database.users.push({
          id: i,
          penom: faker.name.firstName(),
          nom: faker.name.lastName(),
          email: faker.internet.email(),
          password: 'password',
          telephone: faker.phone.phoneNumber(),
          profil: index,
          role: 'ROLE_'+value,
          archivage: faker.random.boolean()
        });
    }
  }))

console.log(JSON.stringify(database));


