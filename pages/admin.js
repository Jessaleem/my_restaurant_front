// import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from "../components/Layout";
import { fetchUrl } from '../services/api';
import { useFetchUser } from "../services/authContext";

const AdminPage = () => {

  const { user } = useFetchUser();
  // const [img, setImg] = useState(null);
  const [form, setForm] = useState({});

  // const router = useRouter();
  // const menuInfo = {
  //   title: title,
  //   description: description,
  //   price: price 
  // }

  const handleChange =(e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  // const handleFiles = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const tmpImg = e.target.files[0];
  //     setImg(tmpImg);
  //   }
  // }
  // console.log(form);
  // console.log(img);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // const file = img;
    // formData.append("images", file);
    // formData.append('data', JSON.stringyfy(...form));
    const form = document.querySelector('form');
    console.log(form);
    const data = {};
    const formData = new FormData();
    const myElements = [...form.elements]
    console.log('tipo', typeof(myElements));

    myElements
      .forEach(({ name, type, value, file }) =>{
        if (!['submit', 'file'].includes(type)) {
          data[name] = value;
          console.log('value', value);
        } else if (type === 'file') {
            formData.append(`file.${name}`, file.name)
            console.log('formdata', formData);
        }
      })
      
      formData.append('data', JSON.stringify(data));
      console.log('data', data);

    try {
    const response = await fetchUrl('http://localhost:1337/api/menus', {
      method: 'POST',
      // headers:{
      //   'Content-Type': 'application/json'
      // },
      body: formData

    })
    return response.json();
    } catch (error) {
      return new Error(error);
    }
  };
  
  

  return (
    <Layout user = {user}>
      <form className="flex justify-center " onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center p-4 border bg-white bg-opacity-50 border-gray-300 box-border rounded">
          <h1> Insert your new menu Item</h1>
          <div className="flex flex-col mt-4">
            <span className="text-lg">Images</span>
            <div className="bg-slate-50  mt-2 p-8 border border-gray-300 box-border rounded">
              <input type="file" name="files" id="files" placeholder="Image" onChange={handleChange} />
            </div>
          </div>
          <div className="flex-start">
            <div className="flex flex-col mt-4">
              <span className="text-lg">Title</span>
              <input type="text" className="rounded border-slate-500" name="title" id="title" onChange={handleChange} />
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-lg">Description</span>
              <textarea type="text" className="rounded border-gray-300" rows="4" cols="40" name="description" id="description" onChange={handleChange}/>
            </div>
            <div className="flex flex-col mt-4"></div>
              <span className="text-lg mr-4">Price (usd)</span>
              <input type="number"className="rounded border-gray-300" name="price" id="price" onChange={handleChange} />
            </div>
            <input className="pb-1 pr-2 pl-2 rounded text-white bg-slate-400 my-4" type="submit" value="submit">save</input>
          </div>
      </form>
    </Layout>
  )
}

export default AdminPage;