module.exports = {
	title: 'wdm个人小记',
	description: 'blog',
	base: '/press/',
	themeConfig:{
		nav: [
			{ text: 'HOME', link: '/'},
			{ text: '碎片片', link: '/tips/'},
			{ text: '机器学习', link: '/machine_learning/'},
			{ text: 'SQL', link:'/sql/'},
			{ text: 'Python', link:'/python/'}
		],

		sidebar: {
			'/sql/':[
				{
					title: 'SQL',
					//sidebarDepth: 2,
					children:[
						'/sql/sql.start',
						'/sql/sql.use',
						'/sql/worker/worker.onmessage',
						'/sql/worker/worker.postmessage'
						
					]
				}
			]
		}
					

				

		},		
	
}