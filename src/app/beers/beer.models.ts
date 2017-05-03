export class BeerModel {
  id: string;
  name: string;
  style: string;
  label: string;
  description: string;
  abv: string;
  ibu: string;
  favorite?: boolean;
}

export class LegendModel {
  abv: string;
  ibu: string;
  srm: string;
}

export class ToggleModel {
  images: boolean;
  descriptions: boolean;
}