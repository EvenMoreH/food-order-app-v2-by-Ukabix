# food-order-app-v2

Features:
1. Initial - project biolerplate
2. Implement header, KA:
a) header is rendered on mobile and desktop
b) header has cart placeholder
c) header has header has page title
d) header has background image
2. Implement cart button element visuals:
a) cart button element has a cart icon
b) cart button element has backround color of rgb: #b94517
c) cart button element has badge with items number
- backround color: #92320c *
- text color: white
d) cart button has onHover effect on desktop
3. Meals component:
a) list of food items is rendered
b) welcome modal is rendered:
- text color: rgba 255, 255, 255, 0
- modal background: grey *
4. Card component:
a) meals are presented on dedicated card:
- background: #fffff0
- text color: black
b) each meal has name, descriptiona and price presented
5. Form component:
a) input fields are present for each meal item:
- input field type: positive number
- input field is validated *
- each input has add btn attached (border-radius: 10px, background-color: rgb (138, 43, 6)
6. Cart items output && 7. Add cart functionalities:
a) user can add meal item via form to cart
b) cart counter is updating correctly
c) cart contents are presented correctly:
- number of items, single price && total price are presented correctly
d) cart modal is closable (2 methods - find out how :)
8. Cart button element animation:
- adding meal item to cart triggers cart button animation
- animation does not hang and handles multiple fast inputs
9. Data fetching from backend:
a) data is fetched from standalone database
b) GET method returns HTTP 200
10. HTTP error handling:
a) when error - app does not hang
b) user is provided with information about error
c) meals list is not rendered if error occured
11**(no branch here). Bugfix:
a) error should not be thrown anymore
12. Implement checkout form:
a) user can click order btn on checkout form
b) after a) user can provide delivery details
c) ^ form is validated on form submit:
- name - string 1+ chars
- street - sting 1+ chars
- postal code - number (5 chars)
- city - string 1+ chars
d) form gives user feedback on bad input
- form field has changed background color, label color and input border
13. Implement POST order to BE:
a) after 12) selecting confirm btn sends POST request to backend to /orders.json dir
b) POST returns HTTP 200
c) POST payload is equal to order details - items & user delivery data
14. After succesfull POST - modal with backdrop is generated:
a) Modal prompts user with success message "Order has been successfuly sent"*
b) modal has a close btn
c) after selecting b) modal is terminated && cart contents are reset


