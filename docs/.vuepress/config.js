module.exports = {
	title: 'wdm个人小记',
	description: 'blog',

	themeConfig:{
		nav: [
			{ text: 'HOME', link: '/'},
			{ text: 'SQL', link:'/sql/'},
			{ text: 'Python', link:'/python/'}
		],

		sidebar: [
			
				'/sql/': [
				title: 'sql大标题',
				children:[
					'/sql/sql.start',
					'/sql/sql.use'
					]
			
				]		

		],		
	
}