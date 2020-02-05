import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ArticleItem from '../../components/articleItem/ArticleItem';
import Button from '../../components/button/Button';
import { isLogged, get } from '../../utils/services';

import './styles.css';

class Articles extends Component {
    
    constructor(props) {
        super(props);
        this.buildArticleItem = this.buildArticleItem.bind(this);
        this.state = {
            articles: []
          };
    }

    componentDidMount() {
        if (!isLogged()) {
            this.props.history.push('/');
        } else {
            get('http://localhost:3000/articles').then(articles => {
                this.setState({
                    articles
                });
            });
        }
    }

    buildArticleItem() {
        return this.state.articles.map(article => {

            const { id, title, copete } = article;          
            return (
                <ArticleItem
                    key={id}
                    id={id}
                    title={title}
                    body={copete}
                    onEdit={() => {
                        this.props.history.push(`/article/${id}`)
                    }}
                />
            );
          });
    }

    render() {
        return (
            <div className='container'>
                <h1>Articles</h1>                
                {this.buildArticleItem()}
                <div className="text-right fixed-bottom mb-4 mr-4">
                    <Button
                        id="btn-add"
                        text="Agregar"
                        type="button"
                        color="primary" 
                        onClick = {() => {this.props.history.push('/article')}}/>
                </div>
            </div>
        );
    }
}


export default withRouter(Articles);