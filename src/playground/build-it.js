


class Visibilty extends React.Component{

    constructor(props){
        super(props);
        this.handleVisibiltyToggle=this.handleVisibiltyToggle.bind(this);
        this.state= {
            visibilty : false 
        };
    }
    handleVisibiltyToggle(){
        this.setState((prevState) =>{
            return {
                visibilty : !prevState.Visibilty
            };
        });
    }
    render(){
        return (
            <div>
             <h1> Visibilty toggle</h1>
             <button onClick={this.handleVisibiltyToggle}>
                 {this.state.visibilty ? 'Hide' : 'Show'}
            </button> {
                this.state.visibilty && (
                     <div>
                          <p>
                           loplolololol
                         </p>
                      </div>
                 )}
         </div>
        );
    }
}

ReactDOM.render(<Visibilty />,document.getElementById('app'));







// let vis = false;

// const toggleVis=()=>{
//     vis =!vis;
//     render();
// }

// const render = () =>{
//     const jsx=(
         
//     )
//     ReactDOM.render(jsx,document.getElementById('app'));
// };

// render();