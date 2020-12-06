import React from 'react';

import Footer from '../../components/Footer';

import Titles from '../../objects/Titles';
import SubTitles from '../../objects/SubTitles';

const DataForm = ({ match }) => {
    const id = match.params.id;
    const desc = match.params.desc;
    

    function registerClient (event) {
        event.preventDefault();
        
        let formData = new FormData(event.target);

        const url = "http://localhost/react-php/backend/register-client.php"

        fetch(url, {
            method:"POST",
            body:formData
        }).then((response) => response.json()).then((dados) => console.log(dados))
    }

    return (
        <div>
            <main>
                <div className="container-fluid d-flex justify-content-center pb-5">
                    <form onSubmit={registerClient}>
                        <Titles>Fazer minha compra</Titles>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <SubTitles>Nome Completo:</SubTitles>
                                <input type="text" className="form-control" name="nome" placeholder="Nome" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <SubTitles>Endereço:</SubTitles>
                                <input type="text" className="form-control" name="endereco" placeholder="Rua dos Bobos, nº 0" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <SubTitles>Telefone:</SubTitles>
                                <input type="number" min="0" className="form-control" name="telefone" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-9">
                                <SubTitles>Produto:</SubTitles>
                                <select className="form-control" name="produto">
                                    <option selected>{desc}</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <SubTitles>Quantidade:</SubTitles>
                                <input type="number" min="0" className="form-control" name="quantidade" />
                            </div>
                            <input type="hidden" name="id" value={id} />
                        </div>
                        <center>
                            <button className="btn btn-primary" style={{width:300}}>Comprar</button>
                        </center>
                    </form>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DataForm;