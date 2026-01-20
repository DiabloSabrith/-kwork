export interface User {
  id: number;
  role: string;
  name: string;
  username: string;
  position: string;
  telegram: string;
  email: string;
  phone: string;
  city: string;
}

export const positions = ['Дизайнер', 'Front end разработчик', 'Back end разработчик'];

export const users: User[] = [
  {
    id: 13619,
    role: 'Админ',
    name: 'Александр',
    username: 'someDesigner',
    position: 'Дизайнер',
    telegram: '@test',
    email: 'test@test.ru',
    phone: '+7 999 999 99 99',
    city: 'Нижний Новгород',
  },
  {
    id: 13620,
    role: 'Пользователь',
    name: 'Мария',
    username: 'mariaUser',
    position: 'Front end разработчик',
    telegram: '@maria',
    email: 'maria@test.ru',
    phone: '+7 888 888 88 88',
    city: 'Москва',
  },

];
