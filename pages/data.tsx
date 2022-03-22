export const sliderItems = [
	{
		id: 0,
		img: 'https://th.bing.com/th/id/R.f1f4e0eff8ce42ba20805da5f709d6e4?rik=8rVndKkAzONkiQ&pid=ImgRaw&r=0',
		title: 'All your adventuring needs',
		desc: 'Bombs and Potions galore! 10% off for new customers',
		bg: 'bg-gray-100',
	},
	{
		id: 1,
		img: 'https://th.bing.com/th/id/R.f1f4e0eff8ce42ba20805da5f709d6e4?rik=8rVndKkAzONkiQ&pid=ImgRaw&r=0',
		title: 'Placeholder 2',
		desc: 'Bombs and Potions galore! 10% off for new customers',
		bg: 'bg-gray-200',
	},
	{
		id: 2,
		img: 'https://th.bing.com/th/id/R.f1f4e0eff8ce42ba20805da5f709d6e4?rik=8rVndKkAzONkiQ&pid=ImgRaw&r=0',
		title: 'Placeholder 3',
		desc: 'Bombs and Potions galore! 10% off for new customers',
		bg: 'bg-gray-300',
	},
];

export const categories = [
	{
		id: 1,
		icon: 'ra ra-sword text',
		title: 'Weapons',
	},
	{
		id: 2,
		icon: 'ra ra-helmet',
		title: 'Armor',
	},
	{
		id: 3,
		icon: 'ra ra-crystals',
		title: 'Magic',
	},
	{
		id: 4,
		icon: 'ra ra-key-basic',
		title: 'Inventory',
	},
  {
    id: 5,
    icon: 'ra ra-queen-crown',
    title: 'All Products'
  }
];

export const socialLogos = [
  {name: 'facebook'},
  {name: 'instagram'},
  {name: 'twitter'}
]
export const cardLogos = [
  {name: 'visa'},
  {name: 'discover'},
  {name: 'american-express'},
  {name: 'master-card'},
  {name: 'paypal'}
]

export const singleProductIcons = [
  {name: 'shoppingCart'},
  {name: 'magnifyingGlass'},
  {name: 'emptyHeart'}
]

export const weapons = [
	{ id: 1, name: 'sword.png' },
	{ id: 2, name: 'axe.png' },
	{ id: 3, name: 'bow.png' },
	{ id: 4, name: 'spear.png' },
];

export const armor = [
	{ id: 6, name: 'helmet.png' },
	{ id: 7, name: 'cuirass.png' },
	{ id: 8, name: 'shield.png' },
];

export const magic = [
	{ id: 9, name: 'ring.png' },
	{ id: 10, name: 'wand.png' },
	{ id: 11, name: 'poisonPotion.png' },
];

export const inventory = [
	{ id: 12, name: 'key.png' },
	{ id: 13, name: 'bag.png' },
	{ id: 14, name: 'lifePotion.png' },
];

export const fullInventory = [
  ...weapons, ...armor, ...magic, ...inventory
]