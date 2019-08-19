


console.log('app running');





const app ={
    
    title : 'Indecision App',
    subtitle : ' Put ur life in the hands of the computer',
    options :[]
};

const number=[10, 20, 30];

const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value= '';
        renderArray();
    }
};

const remove= ()=>{
    app.options=[];
    renderArray();

}
const appRoot = document.getElementById('app');


const makeDes=()=>{

const randomNum=Math.floor(Math.random()*app.options.length);
const option =app.options[randomNum];
alert(option);

}

const renderArray= () =>{
const  template = (
<div>
<h1>{app.title}</h1>
<header>{app.title}</header>
<p>{app.options.length > 0 ? 'Here is your option' : 'No option' } </p>
<p>{app.options.length} </p>


    <form onSubmit={onFormSubmit}>
    <button >ِAddd</button>
<button onClick={remove}>remove</button>
<button disabled={app.options.length ===0} onClick={makeDes}>What SHould i do?</button>
        <input type="text" name="option" /> 
        <ol>
            {
                app.options.map((option) => {
                  return  <li key={option}>Option: {option}</li>;
                })
            }
        </ol> 
    </form>
</div>

);

ReactDOM.render(template,appRoot);
};
    



renderArray();





