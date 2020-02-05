import React, { Component } from 'react';
import InputElement from '../../components/input/InputElement';
import Carrousel from '../../components/carrousel/Carrousel';
import Aside from '../../components/aside/Aside';
import Card from '../../components/card/Card';
import { get, post } from '../../utils/services';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            articlesCarrousel:[],
            articlesAside:[],
            articlesCardPrimary:[],
            articlesCardSecondary:[],
            index:0
          };
        this.BuildCardsPrimary= this.BuildCardsPrimary.bind(this);
        this.BuildCardsSecondary= this.BuildCardsSecondary.bind(this);
        this.timerID = setInterval(
            () => this.changeAside(),
            5000
          );
    }

    componentDidMount() {
        get('http://localhost:3000/articles').then(articles => {
            articles.sort((a,b) => { 
                if (a.id > b.id) {
                    return -1;
                } else if (a.id < b.id) {
                    return 1;
                } else {
                    return 0;
                }                
            });

            articles.forEach((article, id) => {
                articles[id].path = `/detail/${article.id}`;
            });

            let indexAside;

            if (articles.length-2 > this.state.index){
                indexAside = this.state.index + 2;
            } else {
                this.setState({index: 0});
                indexAside = 2;
            }
            
            const articlesCarrousel = articles.slice(0,2);
            const articlesAside = articles.slice(this.state.index, indexAside);
            const articlesCardPrimary = articles.slice(4, 6);
            const articlesCardSecondary = articles.slice(6);

            this.setState({
                articles,
                articlesCarrousel,
                articlesAside,
                articlesCardPrimary,
                articlesCardSecondary
            });
        });
    }

    BuildCardsPrimary() {
        return this.state.articlesCardPrimary.map(articleCard => {
            const { id, title, copete, description, path, date, image } = articleCard;  
            const titleCard = title && title.substr(0, 100) + (title.length > 100 ? '...' : '');  
            const subtitle = copete && copete.substr(0, 200) + (copete.length > 200 ? '...' : '');      
            return (
                <div key={id} className="col-12 col-md-6 d-none d-lg-block">
                    <Card
                        title={titleCard} 
                        subTitle={subtitle}
                        cardLink={path}
                        date={date}
                        img={image}
                    />
                </div>

            );
          });
    }

    BuildCardsSecondary() {
        return this.state.articlesCardSecondary.map(articleCard => {

            const { id, title, copete, description, path, date, image } = articleCard;
            const subtitle = copete && copete.substr(0, 100) + (copete.length > 100 ? '...' : '');
            return (
                <div className='col-12 col-md-6 col-lg-3' key={id}>
                    <Card 
                        title={title} 
                        subTitle={subtitle}
                        cardLink={path}
                        date={date}
                        img={image}
                    />
                </div>
            );
          });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeAside() {
        get('http://localhost:3000/articles').then(articles => {
            articles.sort((a,b) => { 
                if (a.id > b.id) {
                    return -1;
                } else if (a.id < b.id) {
                    return 1;
                } else {
                    return 0;
                }                
            });

            articles.forEach((article, id) => {
                articles[id].path = '/detail/'+article.id;
            });

            let indexAside;

            if (articles.length-2 > this.state.index){
                indexAside = this.state.index + 2;
            } else {
                this.setState({index: 0});
                indexAside = 2;
            }

            const articlesAside = articles.slice(this.state.index, indexAside);
            
            this.setState({
                articlesAside,
                index: indexAside
            });
            $('.carousel').carousel('next');
        });
        
    }

    render() {
        return (
            <div className='container'>
                <hr />
                <InputElement                    
                    type="search" 
                    id="busqueda" 
                    placeholder="busqueda" 
                />
                <hr />
                <div className='row mb-2'>
                    <div className='col-12 col-lg-8'>
                        <Carrousel
                            items={this.state.articlesCarrousel}
                        />
                    </div>
                    <div className='col-4 d-none d-lg-block'>
                    <Aside
                        items={this.state.articlesAside}
                    />
                    </div>
                </div>
                <hr />
                <div className='row'>
                    {this.BuildCardsPrimary()}
                </div>
                <div className="row">
                    {this.BuildCardsSecondary()}
                </div>              
            </div>
        );
    }
}

export default Home;
