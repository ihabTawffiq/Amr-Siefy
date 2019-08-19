class Counter extends React.Component{
    constructor(props){


        super(props);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state ={
            count : props.count
        };
    }
    handleAdd(){
        this.setState((prevState) => {
            return{
                count : prevState.count +1
            };  
        });
    }

    handleRemove(){
        this.setState((prevState) => {
            return{
                count : prevState.count -1
            };  
        });

    }
    handleReset(){
        this.setState((prevState) => {
            return(
                this.state.count=0
            );
        });

    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAdd} >+1</button>
                <button onClick={this.handleRemove} >-1</button>
                <button onClick={this.handleReset} >reset</button>
            </div>

        );
    }
}

Counter.defaultProps = 
{
    count : 0
};

ReactDOM.render(<Counter/> ,document.getElementById('app'));





// var nameVar="oss";
// console.log('nameVar');




// var name='oss osama';
// if(name){
//     var firstname= name.split(' ')[0];
//     console.log(firstname);
// }

// let count =0;
// const addOne =()=>
// {
//     count ++;
//     renderCounterApp();
// }

// const minusOne=()=>{

//     count --;
//     renderCounterApp();
// }
// const reset =()=>{

//     count =0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp =() =>{
// const template2 = (
// <div> 
//     <h1>Count:{count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>rest</button>
// </div>);
// ReactDOM.render(template2,appRoot);
// };

// renderCounterApp();