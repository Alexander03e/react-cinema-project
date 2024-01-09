import type {ColumnsType} from 'antd/es/table'

export interface Film {
  title: string,
  subtitle:string, 
  year:number,
  genre:string[],
  rating_stars:number,
  id:number,
  image:string,
  is_favorite: boolean 
}

export interface User {
  key: number;
  name: string;
  age: number;
}

export const columns : ColumnsType<Film> = [
  {
    key: 'title',
    title: 'Фильм',
    dataIndex: 'title',
  }, 
  {
    key:'subtitle',
    title: 'Описание',
    dataIndex: 'subtitle'
  }, 
  {
    key: 'rating',
    title: 'Рейтинг',
    dataIndex: 'rating_stars'
  },
  {
    key:'year',
    title: 'Год',
    dataIndex: 'year',
  },
  {
    key:'genre',
    title: 'Жанр',
    dataIndex: 'genre'
  }
]

export const columns_user: ColumnsType<User> = [
  {
    key: 'name',
    title: 'Имя',
    dataIndex: 'firstName',
    render: (text) => <a>{text}</a>,
  },
  {
    key: 'age',
    title: 'Возраст',
    dataIndex: 'age',
  },
]