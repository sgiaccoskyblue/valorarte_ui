export type ProfileType = 'Actor' | 'Cantante' | 'Locutor';

export interface Profile {
    id: string;
    name: string;
    description: string;
    mainPhoto: string;
    type: ProfileType | string;
}
