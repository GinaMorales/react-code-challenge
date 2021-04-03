import { Npri } from './Npri';

export type Mineral = {
  id: number;
  name: string;
  homeworld: string;
  affiliations: string[];
  npris?: Npri[];
}