import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TopicChooser extends Component {

    render () {
    return (
        <React.Fragment>
       <p> Choose a topic:</p>
            <Link to='/topics/coding/articles' > <button>coding</button> </Link>
            <Link to='/topics/football/articles' > <button>football</button> </Link>
            <Link to='/topics/cooking/articles' > <button>cooking</button> </Link>
        </React.Fragment >
    )
}
}

export default TopicChooser;

