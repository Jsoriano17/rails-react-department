# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

department_two = Department.create(name: 'Clothes')

item_two = department_two.items.create(name: 'Shirt', price: '10')
item_two = department_two.items.create(name: 'Pants', price: '20')
item_two = department_two.items.create(name: 'Socks', price: '5')
item_two = department_two.items.create(name: 'Underwear', price: '8')
item_two = department_two.items.create(name: 'Shoes', price: '40')

department_three = Department.create(name: 'Home')

item_three = department_three.items.create(name: 'Pillow', price: '10')
item_three = department_three.items.create(name: 'Blanket', price: '30')
item_three = department_three.items.create(name: 'Towels', price: '20')
item_three = department_three.items.create(name: 'Silverware', price: '25')
item_three = department_three.items.create(name: 'Pots/Pans', price: '50')

department_five = Department.create(name: 'Video Games')

item_five = department_five.items.create(name: 'Dark Souls', price: '50')
item_five = department_five.items.create(name: 'Bloodborne', price: '50')
item_five = department_five.items.create(name: 'Overwatch', price: '50')
item_five = department_five.items.create(name: 'GTA V', price: '50')
item_five = department_five.items.create(name: 'Shadow of the collosus', price: '50')
