function clearPanel(){
    // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
    $(document).ready(function(){
		$('.js-slideout-toggle2').trigger('click');
	});
};

Path.map("#/home").to(function(){
	$('#load').load("src/routes/home.html");
	document.title = 'Austin Liu';
}).enter(clearPanel);

Path.map("#/about").to(function(){
	$('#load').load("src/routes/about.html");
	document.title = 'About | Austin Liu';
}).enter(clearPanel);

Path.map("#/experience").to(function(){
	$('#load').load("src/routes/experience.html");
	document.title = 'Experience | Austin Liu';
}).enter(clearPanel);

Path.map("#/projects").to(function(){
	$('#load').load("src/routes/projects.html");
	document.title = 'Projects | Austin Liu';
}).enter(clearPanel);

Path.map("#/contact").to(function(){
	$('#load').load("src/routes/contact.html");
	document.title = 'Contact | Austin Liu';
}).enter(clearPanel);

Path.root("#/home");
Path.listen();