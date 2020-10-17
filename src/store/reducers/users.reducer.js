import { USERS_ACTIONS } from '../actions/users.actions'

const InitialUserState = {
  usersData: [],
}

const users = (state = InitialUserState, action) => {
  switch (action.type) {
    case USERS_ACTIONS.ADD_USER:
      const newItem = {
        id: action.id,
        name: '',
        level: 0,
        items: itemList.map((e) => ({
          count: 0,
          name: e,
        })),
      }
      return { ...state, usersData: [...state.usersData, newItem] }
    case USERS_ACTIONS.CHANGE_USER_DATA:
      return { ...state }

    default:
      return state
  }
}

const itemList = [
  'Apple',
  'Apple_Jam',
  'Apple_Juice',
  'Apple_Pie',
  'Axe',
  'Bacon_and_Eggs',
  'Bacon_Pie',
  'Baked_Potato',
  'Beeswax',
  'Berry_Juice',
  'Blackberry',
  'Blackberry_Jam',
  'Blackberry_Muffin',
  'Blue_Sweater',
  'Blue_Woolly_Hat',
  'Bolt',
  'Bracelet',
  'Bread',
  'Brick',
  'Brown_Sugar',
  'Butter',
  'Buttered_Popcorn',
  'Cacao',
  'Caffe_Latte',
  'Caffe_Mocha',
  'Carrot',
  'Carrot_Cake',
  'Carrot_Juice',
  'Carrot_Pie',
  'Casserole',
  'Cheese',
  'Cheesecake',
  'Cherry',
  'Cherry_Jam',
  'Cherry_Juice',
  'Cherry_Popsicle',
  'Chicken_Feed',
  'Chili_Pepper',
  'Chili_Popcorn',
  'Chocolate_Cake',
  'Chocolate_Ice_Cream',
  'Chocolate_Popcorn',
  'Coal',
  'Coffee_Bean',
  'Cookie',
  'Corn',
  'Corn_Bread',
  'Cotton',
  'Cotton_Fabric',
  'Cotton_Shirt',
  'Cow_Feed',
  'Cream',
  'Cream_Cake',
  'Diamond_Ring',
  'Duck_Trap',
  'Duct_Tape',
  'Dynamite',
  'Espresso',
  'Expansion_Permit',
  'Feta_Pie',
  'Fish_and_Chips',
  'Fish_Burger',
  'Fish_Pie',
  'Frutti_di_Mare_Pizza',
  'Goat_Cheese',
  'Goat_Feed',
  'Gold_Bar',
  'Gold_Ore',
  'Hamburger',
  'Hammer',
  'Hand_Drill',
  'Honey',
  'Honey_Apple_Cake',
  'Honey_Popcorn',
  'Hot_Chocolate',
  'Indigo',
  'Iron_Bar',
  'Iron_Bracelet',
  'Iron_Ore',
  'Land_Deed',
  'Lobster_Skewer',
  'Lobster_Soup',
  'Mallet',
  'Map_Piece',
  'Marker_Stake',
  'Nail',
  'Necklace',
  'Paint_Bucket',
  'Pancake',
  'Pig_Feed',
  'Pizza',
  'Plank',
  'Platinum_Bar',
  'Platinum_Ore',
  'Popcorn',
  'Potato',
  'Potato_Bread',
  'Potato_Feta_Cake',
  'Pumpkin',
  'Pumpkin_Pie',
  'Pumpkin_Soup',
  'Raspberry',
  'Raspberry_Jam',
  'Raspberry_Mocha',
  'Raspberry_Muffin',
  'Red_Berry_Cake',
  'Red_Scarf',
  'Refined_Coal',
  'Roasted_Tomatoes',
  'Rustic_Bouquet',
  'Saw',
  'Scharfe_Pizza',
  'Screw',
  'Sesame',
  'Sesame_Ice_Cream',
  'Sheep_Feed',
  'Shepherds_Pie',
  'Shovel',
  'Silver_Bar',
  'Silver_Ore',
  'Soybean',
  'Stone_Block',
  'Strawberry',
  'Strawberry_Cake',
  'Strawberry_Candle',
  'Strawberry_Ice_Cream',
  'Strawberry_Jam',
  'Sugarcane',
  'Sweater',
  'Syrup',
  'Tar_Bucket',
  'TNT_Barrel',
  'Tomato',
  'Tomato_Juice',
  'Tomato_Soup',
  'Vanilla_Ice_Cream',
  'Violet_Dress',
  'Wheat',
  'Wheat_Bundle',
  'White_Sugar',
  'Wood_Panel',
  'Wooly_Chaps',
]

export default users
