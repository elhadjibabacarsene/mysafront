export class UserModel {
  public id: number;
  public nom: string;
  public prenom: string;
  public email: string;
  public password: string;
  public telephone: string;
  public genre: string;
  public archivage: boolean;
  constructor(nom: string, prenom: string, email: string, password: string, telephone: string, genre: string, archivage:boolean) {
    this.id = Date.now() + Math.round(Math.random() * 1000);
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.telephone = telephone;
    this.genre = genre;
    this.archivage = false;
  }
}
