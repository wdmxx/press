module.exports = {
	title: 'wdm个人小记',
	description: 'blog',
	base: '/press/',
	themeConfig:{
		nav: [
			{ text: 'HOME', link: '/'},
			{ text: '机器学习', link: '/machine_learning/'},
			{ text: 'SQL', link:'/sql/'},
			{ text: 'Python', link:'/python/'}
		],

		sidebar: {
			'/sql/':[
				{
					title: 'SQL',
					children:[
						'/sql/sql.start',
						'/sql/sql.use'
					]
				}
			]
		}
					

				

		},		
	
}