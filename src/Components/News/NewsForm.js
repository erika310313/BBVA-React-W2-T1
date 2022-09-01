import React, { useState, useEffect } from 'react';
import '../../Components/FormStyles.css';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPrivate from '../../Services/privateApiService';
import { useParams } from 'react-router-dom';


const NewsForm = () => {
    const endpoint = 'news/'
    let {id} = useParams();

    const [categories, setCategories] = useState([]);

    const [initialValues, setInitialValues] = useState({
        name: '',
        content: '',
        category_id: '',
        image: ''
    });
    //const idTest = 2189;
    const aNew = async () => {
        if (id) {
            const res = await apiPrivate.Get(`${endpoint + id}`)
            console.log(res)
            const {name,content,category_id,image} = res
            setInitialValues({...initialValues,name,content,category_id,image})
            console.log(initialValues)
        }
    }
    console.log(initialValues)

    useEffect(() => {
        aNew();
    }, [])

    useEffect(() => {
        const endPoint = 'https://ongapi.alkemy.org/api/categories'
        axios
            .get(endPoint)
            .then(response => {
                const apiCategories = response.data.data;
                setCategories(apiCategories);
            })
    }, []);

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'category') {
            setInitialValues({...initialValues, category_id: e.target.value})
        }
        if(e.target.name === 'urlImage') {
            setInitialValues({...initialValues, image: e.target.value})
        }
        console.log(initialValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        const name = initialValues.name;
        const content = initialValues.content;
        const category = initialValues.category_id;
        const image = initialValues.image;
        
        if (id) {
            apiPrivate.Put(`${endpoint + id}`, {name, content, category,image})
        }
        else {
            if (name === "" || content === "" || category === "" || image === "") {
                alert("Los campos no pueden estar vacíos")
            }
            if (name.length < 4) {
                alert("Longitud mínima de 4 letras")
            }
            apiPrivate.Post(`news`,initialValues)
        }
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder="Título"></input>
            <CKEditor
                name="content"
                data={initialValues.content}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log(data)
                    setInitialValues((statePrev) => ({...statePrev, content:data}));
                    console.log(initialValues)
                } }
                editor={ClassicEditor}
            />
            <select className="select-field" name="category" value={initialValues.category_id  || ''} onChange={handleChange}>
                <option value="" disabled>Select category</option>
                {categories.map((oneCategorie) => {
                    return (
                        <option key={oneCategorie.id}>{oneCategorie.name}</option>
                    )})}
            </select>
            {id && <img src={initialValues.image} alt='categoria'></img>}
            <input className="input-field" type="text" placeholder='Ingresar URL de la imagen' name='urlImage' onChange={handleChange}></input>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default NewsForm;