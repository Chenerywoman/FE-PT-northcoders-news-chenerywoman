import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TopicChooser extends Component {

    render () {
    return (
        <React.Fragment>
       <p> Choose a topic:</p>
            <Link to='/articles/coding' > <button>coding</button> </Link>
            <Link to='/articles/football' > <button>football</button> </Link>
            <Link to='/articles/cooking' > <button>cooking</button> </Link>
        </React.Fragment >
    )
}
}

export default TopicChooser;

