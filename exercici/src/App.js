
import Book from './Book';
import data from './data/data.js';

export default () => {

    const books = data.map(item => <Book key={item.id} title={item.title} author={item.author}/>)

    return (
    <div>
        {books}  
    </div>
        
    );
};