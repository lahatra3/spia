import { Dispatch, SetStateAction } from 'react';

export interface PropsHeader {
  setModeWhite: Dispatch<SetStateAction<string>>;
  modeWhite: string;
}

export interface PropsMode {
  modeWhite: string;
}

export interface Props {
  name: string;
  color: string;
}

export interface Dream {
  name: string;
  color: string;
}

export interface UserInsertResult {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: Date;
  updated: Date;
  name: string;
  avatar: string;
  age: number;
  description: string;
  situation: string;
  sexe: string;
  id_google: string;
  nom: string;
  prenom: string;
  picture: string;
}

export interface DreamParams {
  description: string;
  response: string;
  user_id: string | null;
}

export interface CredentialUser {
  tokenResponse: string | undefined;
  isConnected: boolean;
  access_token: string | undefined;
}

export interface UserInfo {
  id: string;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
}

export const userInfoage = 20;

export interface UserData {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: userItem[];
}

export interface userItem {
  age: number;
  collectionId: string;
  collectionName: string;
  created: Date;
  description: string;
  fullname: string;
  id: string;
  id_google: string;
  nom: string;
  picture: string;
  prenom: string;
  updated: Date;
}

export type PropsDream = {
  titre: string;
  description: string;
  sous_titre1: string;
  sous_titre2: string;
};

export interface CommonData {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: ItemCommon[];
}

export interface ItemCommon {
  collectionId: string;
  collectionName: string;
  created: Date;
  description: string;
  expand: Expand;
  id: string;
  name: string;
  themes: string[];
  updated: Date;
}

export interface Expand {
  themes: Theme[];
}

export interface Theme {
  avatar: string;
  category: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  direction: string;
  id: string;
  meaning: string;
  name: string;
  updated: Date;
}

export interface ThemesData {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: ItemThemeData[];
}

export interface ItemThemeData {
  id: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  updated: Date;
  name: string;
  meaning: string;
  direction: string;
  avatar: string;
  category: string;
}

export interface ThemesCategoryData {
  avatar: string;
  category: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  direction: string;
  expand: Expand;
  id: string;
  meaning: string;
  name: string;
  updated: Date;
}

export interface Expand {
  category: Category;
}

export interface Category {
  collectionId: string;
  collectionName: string;
  created: Date;
  id: string;
  image: string;
  name: string;
  updated: Date;
}

export interface IAibooks {
  label: string;
  description: string;
  route: string;
  img: string;
}