var CategoryList = React.createClass({
 render: function(){
 	return(
 		<li>
 		  	<label>
 			  		<input type="checkbox" className="cat-check"/>
 			  		{this.props.children}
 			  	</label>
 			</li>

 		);
 }
});