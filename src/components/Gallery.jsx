import { Component } from "react";
const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ea139948&s=";

class Gallery extends Component {
  state = {
    films: [],
    isLoading: true,
  };

  getFilms = async () => {
    try {
      const response = await fetch(URL + this.props.film);
      if (response.ok) {
        const data = await response.json();
        this.setState({
          films: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
        });
        throw new Error('ERROR something went wrong');
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <>
        <h4 className="text-white mx-3 mt-4">{this.props.title}</h4>
        {this.state.isLoading && (
          <div className="d-flex justify-content-center align-items-center" style={{height: "18em"}}>
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        <div className="row mx-3">
          {this.state.films.length > 0 ? (
            this.state.films.map((film) => (
              <div key={film.imdbID} className="col mb-2 text-center px-1">
                <img
                  className="img-fluid"
                  src={film.Poster}
                  alt={film.Title}
                  style={{ height: "18em" }}
                />
              </div>
            ))
          ) : (
            !this.state.isLoading && (<div className="d-flex justify-content-center align-items-center" style={{height: "18em"}}><p className="text-white">No films found</p></div>)
          )}
        </div>
      </>
    );
  }
}

export default Gallery;
