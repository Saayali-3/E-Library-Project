import axios from 'axios';

export const getCategoriesCollection=()=>([
    {id: 'action', title: 'Action'},
    {id: 'adventure', title: 'Adventure'},
    {id: 'comedy', title: 'Comedy'},
    {id: 'thriller', title: 'Thriller'},
    {id: 'detective', title: 'Detective'},
    {id: 'drama', title: 'Drama'},
])

const book_rest_api_url = 'http://localhost:8080/admin/books';

class BookService{
    getUrl(){
        return axios.get(book_rest_api_url);
    }
}

export default new BookService();