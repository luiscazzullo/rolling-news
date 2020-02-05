import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import InputElement from '../../components/input/InputElement';
import Button from '../../components/button/Button';
import { get, post, put } from '../../utils/services';



class Article extends Component {
    constructor(props){
        super(props);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);  
        this.handleOnChange = this.handleOnChange.bind(this);    
        this.state = {
            imgItems: [],
            title: '',
            copete: '',
            description: ''
        }
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        if (id) {
            // Edition
            get(`http://localhost:3000/articles/${id}`)
            .then(article => {
                const { title, copete, description } = article;
                this.setState({
                    title,
                    copete,
                    description
                });
            });
        } else {
            // New
        }
    }
    handleOnAdd(){
        this.setState({
            imgItems: [...this.state.imgItems, {}]
        });
    }
    handleOnChange(event) {
        const { target: { id, value }} = event;
        this.setState({
            [id]: value
        });
    }
    handleOnSubmit(){
        const { match: { params: { id } } } = this.props;
        const { title, copete, description } = this.state;
        if (title !== '' && description !== '' && copete !== '') {
            const payload = {
                title,
                date: (new Date()).toLocaleDateString(),
                copete,
                image: "https://img.lagaceta.com.ar/fotos/notas/2020/01/08/vienen-almendra-van-pol-fernandez-830894-230218.jpg",
                description
            };
            if (id) {
                put(`http://localhost:3000/articles/${id}`, payload).then(() => {
                    window.alert('El articulo se ha editado correctamente.'); 
                })
            } else {
                post('http://localhost:3000/articles', payload).then(() => {
                window.alert('El articulo se ha cargado correctamente.');
                    this.setState({
                        title: '',
                        copete: '',
                        description: '',
                        imgItems: []
                    });
                })
            }
        } else {
            alert('Todos los datos del formulario son obligatorios');
        }
    }
   
    render() {
        const { title, copete, description } = this.state;
        return (
            <div className="container">
                <InputElement
                    label="Título"
                    id="title"
                    value={title}
                    handleOnChange={this.handleOnChange}
                />
                <br/>
                <InputElement
                    label="Copete"
                    id="copete"
                    value={copete}
                    handleOnChange={this.handleOnChange}
                />
                <br/>
                <InputElement
                    label="Cuerpo"
                    id="description"
                    value={description}
                    type="textarea"
                    handleOnChange={this.handleOnChange}
                />
                <div>
                    <label>Imagen</label>
                    <Button 
                         id="1"
                         text="Añadir"
                         type="submit"
                         size="md"
                         color="success" 
                         onClick={this.handleOnAdd}
                    />
                </div>          
                <section>
                    {this.state.imgItems.map((item, index) => {
                        return (
                            <InputElement id={`img_${index}`} key={`img_${index}`} />
                        );
                    })}
                </section>
                <div className="mt-3">
                    <Button 
                        id="1"
                        text="Guardar"
                        type="submit"
                        size="md"
                        color="primary" 
                        onClick = {this.handleOnSubmit}
                        icon=""
                    />
                    <Button
                    id="2"
                    text="Cancelar"
                    type="submit"
                    size="md"
                    color="danger" 
                    onClick = {
                        () => {
                            if(window.confirm("está seguro?")) {
                                window.location.href= "/articles";
                            }
                        }                        
                    }                    
                    />
                </div>
             </div>  
        )}
}

export default withRouter(Article);
