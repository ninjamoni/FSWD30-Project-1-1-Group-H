class News {
	constructor (title, author, imageUrl, link, content) {
		this.title = title;
		this.author = author;
		this.imageUrl = imageUrl;
		this.link = link;
		this.content = content;
		
	}



	// Function to create card with content
	createCard(){
		let char50 = this.content.substring(0,80);
		var blogContent = document.getElementById('mainContent');
		var blogCard = document.createElement('div');
		blogCard.className = "col-lg-4 col-md-6 col-sm-6 col-xs-12 margin_bottom30";
		blogCard.innerHTML = `
			<a href="javascript::;">
				<img class="img-responsive center-block newsImage" src="http://i50.tinypic.com/2nbf0ht.jpg" height="250">
			</a>
			<div class="blog-content bg-white">
				<h3>${this.title}</h3>
				<p>Category : <a href="javascript::;">Nature</a></p>
				<p>${char50}...<a href="${this.link}"  class="heading_color"><strong> Continue Reading</strong></a></p>
				<p class="small text-muted">Article published: 3 days ago</p>
				<hr>
				<p><span>Share : 
				<a href="javascript::;"><i class="fa fa-facebook margin_left10" aria-hidden="true"></i></a>
				<a href="javascript::;"><i class="fa fa-twitter margin_left10" aria-hidden="true"></i></a>
				<a href="javascript::;"><i class="fa fa-google-plus margin_left10" aria-hidden="true"></i></a>
				 </span> 
				<span class="pull-right">By : <strong>${this.author}</strong></span> </p>
			</div>
        `;
    	blogContent.appendChild(blogCard);
    }

}

 var content = [ new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blogpost.html", "Lorem ipsum ddfsgsdfgsdfgsdfgsdfolor sit amet, consectetur adipiscing elit. Donec nec mauris sit amet mi posuere imperdiet. Sed congue velit placerat sapien gravida sagittis. Phasellus in convallis urna, sit amet sollicitudin augue."),
 				 new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blabla", "ni me tukaj ze vec heheheyxc vyxcvyxcvyxcvvyxcvyx"),
 				 new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blabla", "asdfsafadfgasdfgsdfgsdfEyvyxvyxcvyxcvyxcvxyvyxc"),
 				 new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blabla", "ZDAJ PA SEM TUKAJ SAMO DA VIDIM CE DELA TOLE"),
 				 new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blabla", "ZDAJ PA SEM TUKAJ SAMO DA VIDIM CE DELA TOLE"),
 				 new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blabla", "E gsdfgggggggggggg gggggggggggggggggg ggggggg ggggggggggggggggggggggggggg "),
 				 new News ("Latest Technology", "CodeFactory", "http://via.placeholder.com/350x150", "blabla", "ZDAJ PA SEM TUKAJ SAMO DA VIDIM CE DELA TOLE")
 				 // new News (title, author, imageUrl, link),
 				 // new News (title, author, imageUrl, link),
 				 // new News (title, author, imageUrl, link),
 				 // new News (title, author, imageUrl, link),
				 
];

for (var i = 0; i < content.length; i++) {
	content[i].createCard();
}