export type Character = {
    id: number;
    name: string;
    height: number;
    mass: number;
    gender: string;
    homeworld: string;
    wik: string;
    image: string;
    born: number;
    bornLocation: string;
    died: number;
    diedLocation: string;
    species: string;
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    cybernetics: string;
    affiliations: Array<string>;
    masters: Array<string>;
    apprentices: Array<string>;
    formerAffiliations: Array<string>;
};