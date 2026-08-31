import React, {Component} from "react";

class Song extends Component {
    render() {
        return (
            <article className="cancion">
                <h2>{this.props.title}</h2>
                <p>Artista: {this.props.artist}</p>
                <p>Álbum: {this.props.album}</p>
                <p>Duración: {this.props.duration}</p>
            </article>
        );
    }
}
export default Song;