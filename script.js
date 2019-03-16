var moviesData = [
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

var MovieTitle = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('h2', {}, this.props.movie.title);            
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('p', {}, this.props.movie.desc);            
    }
});

var MovieImage = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('img', {src: 'images/' + this.props.movie.image});            
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('li', {key: this.props.movie.id}, 
            React.createElement(MovieTitle, {movie: this.props.movie}),
            React.createElement(MovieDescription, {movie: this.props.movie}),
            React.createElement(MovieImage, {movie: this.props.movie})
        )        
    }
});

var Movies = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesList = this.props.movies.map(function(movie) {
            return React.createElement(Movie, {movie: movie, key: movie.id});
        })
        return React.createElement('ul', {}, moviesList);         
    }
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(Movies, {movies: moviesData})
    );

ReactDOM.render(element, document.getElementById('app'));
