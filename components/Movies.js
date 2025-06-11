import { useState, useEffect } from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=267bef6c974e61e80475763ff92c845c')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setMovies(data.results || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetching movies failed:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading movies.</div>;

    return (
        <div>
            <h2>Popular Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <strong>{movie.title}</strong>
                        <br />
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            style={{ borderRadius: '8px', marginTop: '0.5rem' }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;
