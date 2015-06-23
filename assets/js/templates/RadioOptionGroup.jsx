var RadioOptionGroup = React.createClass({
 render: function(){
 	return (
 		<div className="wrapper">
 			{this.props.options.map(function (option){
 			 return (
 			 		<RadioOption value={option.image} key={option.value} price={option.price} colors={option.colors} sizes={option.size}>
 			 			{option.name}
			 		</RadioOption>
 			 	);

			 })}
 			</div>
 		)
 }
});