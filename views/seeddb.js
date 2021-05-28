const mongoose = require('mongoose');
const blog = require('./models/blog');


const arr =[
 
    {
    title:'IPL  2021 RCB vs KKR',
    img:'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    author:'Pankaj',
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
},
{
    title:'Covid-19 India : Cases',
    img:'https://images.unsplash.com/photo-1601055283742-8b27e81b5553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292aWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    author:'Rahul',
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
},
{
    title:'Fun at Amusment Park',
    img:'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW11c2VtZW50JTIwcGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    author:'Jatinder',
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
},
{
    title:'Exciting Food Blog',
    img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    author:'Pankaj',
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
},

]


function seedDb() {
    
    blog.insertMany(arr)
        .then(() => {
            console.log("Data Seeded");
    })
    .catch(err => {
            console.log(err);
    })

}

module.exports = seedDb;