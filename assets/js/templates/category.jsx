var Category = React.createClass({
render: function(){
	return (
		<ul>
		{this.props.options.map(function (option){
			return (
			 	<CategoryList value={option.value}>
			 			{option.name}
		 		</CategoryList>
		    )
		})};
		</ul>

		);
}
});