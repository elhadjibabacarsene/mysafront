export class ProfilModel {
  public id: number;
  public libelle: string;
  public archivage: boolean;
  constructor(id: number, libelle: string, archivage: boolean) {
    this.id = id;
    this.libelle = libelle;
    this.archivage = false;
  }
}
