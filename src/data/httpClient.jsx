const API = "https://api.themoviedb.org/3"

export function get (path) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQwMjRlOGY0MDA4ODIxODViOWU0Y2Q0Njc3NzI0MyIsInN1YiI6IjYzOTUzNGFkYTFhOWJhMDBlMjA2YWQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lF1av2-ETwU6SMQkfDPEKVojcoMBwGyCZEZg8pb32t4'
        }
    }
    
    return fetch(API + path, options).then(response => response.json())
}