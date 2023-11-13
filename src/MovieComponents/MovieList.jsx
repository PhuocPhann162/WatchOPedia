const MovieList = (props) => {
    return (
        <div>
            {
                props.movieList.map((movie, index) => {
                    return (
                        <div className="text-white" key={index}>
                            - {movie}
                        </div>
                    )
                })
            }
        </div>
    );

};
export default MovieList;
