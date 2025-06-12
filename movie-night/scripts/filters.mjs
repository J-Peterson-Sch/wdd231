export function filter(moviesList,filterType,filterList=[]) {
    
    if (filterType === 'excludeWatchedMovies') {

        let filterdList = [];

        moviesList.forEach(movie => {
            if (movie in filterList) {
                filterdList.push(movie);
            }
        });
        return filterdList;
    }else {
        console.log('You tried to filter with a filter that doesn\'t exist');        
    }
}

export function sort(moviesList,sortType) {
    
    if (sortType === 'title') {
        moviesList.sort((a, b) => a.Title.localeCompare(b.Title));

        return movies;
    }else if (sortType === 'runtime') {
        moviesList.sort((a, b) => b.runtime - a.runtime);

        return movies;
    }else if (sortType === 'year') {
        moviesList.sort((a, b) => b.year - a.year);

        return movies;
    }else {
        console.log('You tried to sort with an option that doesn\'t exist');        
    }
}