class Demo extends React.Component{
    render(){
        return(
            <div>
                <h1 className="mauvang">{this.props.name} + {this.props.props2}</h1>
                <Demo2 />
            </div>
        );
    }
};

class Demo2 extends React.Component{
    render(){
        return(
            <h1>Class Demo2</h1>
        );
    }
};

ReactDOM.render(
<div>
    <Demo name="ReactJS" props2="Giang"/>
    <Demo name="NodeJS" props2="River"/>
</div> 
,document.getElementById("root") );