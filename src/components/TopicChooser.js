import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TopicChooser extends Component {

    render () {
    return (
        <React.Fragment>
       <p> Choose another topic:</p> 
           {this.props.topic !== 'coding' ? <Link to='/articles/topic/coding' > <button>coding</button> </Link> : <div></div> }
           {this.props.topic !== 'football' ? <Link to='/articles/topic/football' > <button>football</button> </Link>  : <div></div> }
           {this.props.topic !== 'cooking' ? <Link to='/articles/topic/cooking' > <button>cooking</button> </Link> : <div></div> }
        </React.Fragment >
    )
}
}

export default TopicChooser;

