import React, { Component } from 'react';
// Components
import Test from '../../components/test/Test';
import Button from '../../components/button/Button';
import Aside from '../../components/aside/Aside';
import Card from '../../components/card/Card';
import Carrousel from '../../components/carrousel/Carrousel';
import Comment from '../../components/comment/Comment';
import InputElement from '../../components/input/InputElement';
import Clock from '../../components/date/Date';

class Playground extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: '',
            busqueda2: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        const { target: { value, id } } = event;
        this.setState({
            [id]: value
        })
    }

    render() {
        return (
            <div id="playground" className="container">
                <h1>PlayGround</h1>
                
                <article id="test">
                    <h3>Test Component</h3>
                    <Test testProp="Soy una propiedad" />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>testProp</li>
                    </ul>
                </article>

                <article id="button">
                    <h3>Button Component</h3>
                    <Button 
                        id="1"
                        text="Aceptar"
                        type="submit"
                        size="md"
                        color="success" 
                        onClick = {() => {console.log("Acpetar")}}
                        icon=""
                    />
                    <Button 
                        id="1"
                        text="Cancelar"
                        type="submit"
                        size="md"
                        color="danger" 
                        onClick = {() => {console.log("Cancelar")}}
                        icon=""
                    />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>id</li>
                        <li>text</li>
                        <li>type</li>
                        <li>size</li>
                        <li>color</li>
                        <li>onClick</li>
                        <li>icon</li>
                    </ul>
                </article>
                <article id="carrousel">
                    <h3>carrousel Component</h3>
                    <Carrousel
                        items={[
                            {
                                imgName:'https://img.over-blog-kiwi.com/2/36/16/91/20171027/ob_d8e2b5_cuidados-en-el-primer-mes-de-vida-de-u.jpg',
                                title: 'noticia principal',
                                description: 'description de producto de pueba',
                                path: '/article/1',
                            },{
                                imgName:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Perrito_triste.jpg',
                                title: 'noticias mas recientes',
                                description: 'segundo perrito de prueba',
                                path: '/article/2',
                            },
                            {
                                imgName:'https://thehappening.com/wp-content/uploads/2018/12/sombreros-perritos-7.jpg',
                                title: 'noticias de prueba ',
                                description: 'otro perrito de prueba',
                                path: '/article/3',
                                
                            },
                        ]}
                    />
                    <h4>Propiedades</h4>
                    <ul>
                        <li>imgName</li>
                        <li>title</li>
                        <li>descriptions</li>
                        <li>onClick</li>
                    </ul>
                </article>
                

                <article>
                    <Clock/>
                </article>

                <article id="comment">
                    <h3>Comment Component</h3>
                    <Comment />
                </article>

                <article>
                    <h3>Aside Component</h3>
                    <Aside
                        items={[
                            {
                                id: 1,
                                title:'titulo1',
                                img: 'https://www.hola.com/imagenes/estar-bien/20180831128704/ronroneo-gatos-causas/0-595-638/gato-ronroneo-1-t.jpg?filter=w600&filter=ds75'
                            },
                            {
                                id: 2,
                                title:'titulo2',
                                img: 'https://www.hola.com/imagenes/estar-bien/20180831128704/ronroneo-gatos-causas/0-595-638/gato-ronroneo-1-t.jpg?filter=w600&filter=ds75'
                            },
                            {
                               id: 3,
                               title: 'Titulo 3',
                               img: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg' 
                            }
                        ]}
                    />
                    <h4>Propiedades</h4>
                </article>

                <article id="inputElement">
                    <h3>InputElement</h3>
                    <InputElement
                        value={this.state.busqueda} 
                        label="busqueda" 
                        type="search" 
                        id="busqueda" 
                        placeholder="busqueda" 
                        handleOnChange={this.handleOnChange}
                    />
                    <InputElement
                        value={this.state.busqueda2} 
                        label="busqueda2" 
                        type="text" 
                        id="busqueda2" 
                        placeholder="busqueda" 
                        handleOnChange={this.handleOnChange}
                    />
                    <form>
                        <div className="form-inline-group">
                            <InputElement
                                onLeft
                                value={this.state.busqueda2} 
                                label="busqueda3" 
                                type="text" 
                                id="busqueda3" 
                                placeholder="busqueda" 
                                handleOnChange={this.handleOnChange}
                                />
                        </div>
                    </form>
                    <h4>Propiedades</h4>
                    <ul>
                        <li>label. Agrega un label que puede ir arriba o a la izquierda del componente</li>
                        <li>type. Para activar el buscador, deben colocar type="search"</li>
                        <li>id. Añade un identificar único al input</li>
                        <li>placeholder. Añade un placeholder</li>
                        <li>Description. Permite agregar una descripción abajo del input.</li>
                        <li>onLeft. Coloca el label a la izquierda del input</li>
                        <li>handleOnChange. Permite manipular el estado en los formularios.</li>
                    </ul>
                </article>

                <Card 
                    title="Card Component" 
                    subTitle="Subtitulo" 
                    someText="Texto descriptivo de la noticia" 
                    cardLink="Link 1" 
                    date="11/01/2020"
                />

                <article id="clock"> 
                    <h3>Clock component</h3>
                    <Clock />
                </article>
            </div>
        );
    }
}

export default Playground;