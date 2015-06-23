var App = React.createClass({
render: function(){
	var products = [
	 	{name:'Fluted hem dress', price: '$34', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
	 	{name:'Plent printed dress', price: '$39', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
	 	{name:'Flow Shirt dress', price: '$35', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
	 	{name:'Double layer dress', price: '$36', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
	 	{name:'BEAD DETAIL DRESS', price: '$102', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
	 	{name:'PLEATED DETAIL DRESS', price: '$99', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
	 	{name:'Fluted hem dress', price: '$75', image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg',colors:{red:'red', green:'green',blue:'blue',yellow:'yellow'},size:{XS:'XS',S:'S',M:'M',L:'L',XL:'XL'}},
		
	];

  return (
  		<RadioOptionGroup options={products} />
 	);
}
});

React.render(<App />, document.getElementById('main-div'));