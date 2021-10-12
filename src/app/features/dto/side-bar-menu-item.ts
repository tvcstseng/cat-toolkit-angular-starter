export class SideBarMenuItem {
  url: string;
  materialIcon: string;
  description: string;

  constructor(url: string, materialIcon: string, description: string) {
    this.url = url;
    this.materialIcon = materialIcon;
    this.description = description;
  }
}
