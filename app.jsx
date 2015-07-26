// Require() on client gets sucked into 1 JS file via build process i.e. Watchify or Browserify.
var React = require('react');

var Router = require('react-router');
var Route = Router.Route; 
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


var PageOne = React.createClass({	
	render: function() {		

		var showListHTML = [];

		for (var i = 0; i <= 100; i++) {
			showListHTML[i] = "Run to the hills, run for your lives. Da dana na nana na na na!"
		};

		return (
			<div>
				Page One text.
				{showListHTML}
			</div>
		);
	}
});


var PageTwo = React.createClass({	
	render: function() {		
		return (
			<div>
				Page Two text.	
			</div>
		);
	}
});


var App = React.createClass({	
	render: function() {		
		return (
			<div>
				<div className="my-header-menu">
					<Link to="pageone">PageOne</Link> ---
					<Link to="pagetwo">PageTwo</Link>
				</div>

				<p />

		        <div>
		          <RouteHandler {...this.state} {...this.props} />
		        </div>	

				<p />
	    		PAGE FOOTER		
			</div>
		);
	}
});


var routes = (
  <Route handler={App} ignoreScrollBehavior={true} >
    
    {/*<DefaultRoute handler={PageOne}  />*/}

    <Route name="pageone" path="pageone" handler={PageOne}  />
    <Route name="pagetwo" path="pagetwo" handler={PageTwo} />

  </Route>
);


Router.run(routes, function (Handler, state) {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
});

// end-of-file.