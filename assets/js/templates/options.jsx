var RadioOption = React.createClass({
 render: function (){
 	return(
 		<div className="pd-hldr">
 			<img src= {this.props.value} />
 			<div className="mask">
 			 <div>Details</div>
 			</div>
 			<div className="pd-info">
 			<div className="hldr clearfix">
	 			 <span className="pd-name">{this.props.children}</span>
	 			 <span className="pd-price">{this.props.price}</span>
 			</div>
 			<div className="pd-color-hldr">
 			  <span>Colors</span>
 			  <div className="pd-color">{this.props.colors}</div>
 			</div>
 			<div className="pd-size-hldr">
 			<span>Sizes</span>
 			 <div className="pd-sizes">{this.props.sizes}</div>
 			</div>
 			</div>
 		</div>
 		

 		);
 }
});
 