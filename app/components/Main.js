var React = require('react');
var Search = require('./Search.js');
var Main = React.createClass({
    render: function() {
        return ( 
            <div className = "main-container" >
            <div className = "jumbotron">
            <h1 className = "text-center" > New York Times Search </h1> 
            <p className = "lead text-center" > A React.js that lets you search
            for New York Times articles, save articles and comment on them! </p>  
            </div> 
            <div className = "container" > { this.props.children } 
            </div> 
            </div>
        )
    }
});

module.exports = Main;