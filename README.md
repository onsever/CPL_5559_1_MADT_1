# Question to Ask

// Fetching Data Questions
1. Where should we fetch the data? (In which component?)
    - Whenever user logs in to application, it will go the Home Screen. (We want we fetch.) -> List of Movies
2. When should we fetch the data? (Whenever component get loads)
    - Whenever Home Screen is loaded.
3. How should we fetch the data?
    - Using axios, we can fetch the data from the API.
    - Fetch API (fetch()) is also used to fetch the data from the API.
    - We will use Supabase client fetching. (O)

... after fetching the data ... => Results [99% of the time, JSON data]
JSON: JavaScript Object Notation

- User clicked on Reviews page. => Reviews page is loaded.
- Reviews page is loaded. => Reviews data is fetched.

```javascript
    
    const movie = { // JavaScript Object
        title: 'Avengers', // title is without quotes, it's a key
        releaseDate: '2012',
        rating: 8.3,
        director: 'Joss Whedon'
    }
    
    const movieJSON = { // JavaScript Object Notation (JSON)
        "title": "Avengers", // title is with quotes, it's a string
        "releaseDate": "2012",
        "rating": 8.3,
        "director": "Joss Whedon"
    }
```

// How to use fetched data?
