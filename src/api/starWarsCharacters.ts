import axios from 'axios';
import { URL_STARS_WARS } from '../utils/constants';

export const getPeople = () => axios.get('all.json', { baseURL: URL_STARS_WARS });

export const getPerson = (id: string) => axios.get(`id/${id}.json`, { baseURL: URL_STARS_WARS });