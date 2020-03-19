# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

department_two = Department.create(name: 'Clothes')

item_two = department_two.items.create(name: 'Shirt')
item_two = department_two.items.create(name: 'Pants')
item_two = department_two.items.create(name: 'Socks')
item_two = department_two.items.create(name: 'Underwear')
item_two = department_two.items.create(name: 'Shoes')

department_three = Department.create(name: 'Home')

item_three = department_three.items.create(name: 'Pillow')
item_three = department_three.items.create(name: 'Blanket')
item_three = department_three.items.create(name: 'Towels')
item_three = department_three.items.create(name: 'Silverware')
item_three = department_three.items.create(name: 'Pots/Pans')

department_five = Department.create(name: 'Video Games')

item_five = department_five.items.create(name: 'Dark Souls')
item_five = department_five.items.create(name: 'Bloodborne')
item_five = department_five.items.create(name: 'Overwatch')
item_five = department_five.items.create(name: 'GTA V')
item_five = department_five.items.create(name: 'Shadow of the collosus')