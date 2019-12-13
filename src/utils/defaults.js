export default {
    apiBooks:{
        all: "https://api-bookstore-tt.herokuapp.com/api/v1/books",
        delete: (id) =>{
            return `http://api-bookstore-tt.herokuapp.com/api/v1/books/${id}`
        },
        create: 'https://api-bookstore-tt.herokuapp.com/api/v1/books'
    }
}