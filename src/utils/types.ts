export interface Resident {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  id: string;
}

export interface Transaction {
  id: string;
  currency: string;
  amount: number;
  user: string;
  date: string;
  status: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Resident[];
  films: string[];
  created: string;
  edited: string;
  id: string;
  transactions: Transaction[];
}

export interface Data {
  planets: Planet[];
}
