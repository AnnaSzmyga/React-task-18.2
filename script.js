var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju', 
        image: 'harrypotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'lionking.jpg'
    },
    {
        id: 3,
        title: 'Kubuś i Przyjaciele',
        desc: 'Film o przyjaciołach ze Stuwiekowego Lasu',
        image: 'kubus.jpg'
    },
    {
        id: 4,
        title: 'Toy Story',
        desc: 'Film o zabawkach',
        image: 'toystory.jpg'
    },
    {
        id: 5,
        title: 'Bambi',
        desc: 'Film o jelonku',
        image: 'bambi.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );


ReactDOM.render(element, document.getElementById('app'));