import React from 'react';
import {get, post } from '../../utils/services';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.buildComments = this.buildComments.bind(this);
        this.state = {
            comments: []
          };
    }

    componentDidMount() {
        get('http://localhost:3000/comments').then(comments => {
        this.setState({
            comments
          });
        });
    }

    buildComments() {
        
        return this.state.comments.map(comments => {
          const { id, userName, email, comment } = comments;          
         
          const CardTitle = React.createElement('h5', {className: 'card-title',  key:`cardTitle-${id}`}, userName);
          const CardSubtitle = React.createElement('h6', {className: 'card-titlecard-subtitle mb-2 text-muted text-right', key:`cardSubtitle-${id}`}, email);
          const CardText = React.createElement('p', {className: 'card-text', key:`cardText-${id}`}, comment);
		  const CardBody = React.createElement('div', {className: 'card-body'},  [CardTitle, CardSubtitle, CardText]);
          const Card = React.createElement('div', {className: 'card', key:`card-${id}` },  CardBody);
          
          return (
            <div key={`row-${id}`} className="row my-1">
                <div key={`col-${id}`} className="col">
                    {Card}               
                </div>
            </div>
          );
        });
    }

    render() {       
        
        return(
            <div>
                {this.buildComments()}
            </div>
        );
    }
}

export default Comment;