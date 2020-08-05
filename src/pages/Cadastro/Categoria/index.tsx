import React, { FC, useState } from 'react';
import { PageDefault } from '../../../components/PageDefault';
import { FormField } from '../../../components/FormField';

type Categoria = {
    nome: "",
    descricao: "",
    cor: ""
}

export const CadastroCategoria: FC = () => {
    const valoresIniciais : Categoria = {
        nome: "",
        descricao: "",
        cor: ""
    };

    const [categorias, setCategorias] = useState<Array<Categoria>>(new Array<Categoria>());

    const [categoria, setCategoria] = useState<Categoria>(valoresIniciais);

    const setValue = (key: string | null, value : string) => {
        console.log("[setValue] key: " + key);
        if (key == null) {
            throw new Error("key is mandatory.");
        }
        setCategoria({
            ...categoria,
            [key]: value
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const propertyName = event.target.getAttribute("name");
        setValue(propertyName, event.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {categoria.nome}</h1>

            <form onSubmit={(event) => {
                setCategorias([...categorias, categoria]);
                event.preventDefault();
            }}>
                <FormField 
                name="nome" 
                onChange={handleChange} 
                label="Nome da categoria: "
                value={categoria.nome}
                type="text"/>

                <FormField
                name="descricao"
                onChange={handleChange}
                label="Descrição da categoria: "
                value={categoria.descricao}
                type="area" />
                
                <FormField
                name="cor"
                onChange={handleChange}
                label="Cor da categoria: "
                value={categoria.cor}
                type="color" />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => (
                    <li key={`${categoria}-${index}`} style={{color: categoria.cor}}>
                        {categoria.nome}
                    </li>
                ))}
            </ul>

        </PageDefault>
    )
}
