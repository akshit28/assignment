var Sidebar = React.createClass({
	render:function(){
		var filter = [
			{name:"new arrival", value:"newarrival"},
			{name:"accessories", value:"accessories"},
			{name:"bags", value:"bags"},
			{name:"dressed", value:"dressed"},
			{name:"jackets", value:"jackets"},
			{name:"jewelery", value:"jewelery"},
			{name:"shoes", value:"shoes"},
			{name:"shirts", value:"shirts"},
			{name:"sweaters", value:"sweaters"},
			// {name:"green", value:"green"},
			// {name:"yellow", value:"yellow"},
			// {name:"blue", value:"blue"},
			// {name:"aqua", value:"aqua"},
			// {name:"black", value:"black"},
			// {name:"grey", value:"grey"}
		];
	return(
			<Category options={filter} />
		);

	}
});

React.render(<Sidebar />, document.getElementById('sidebarHldr'));