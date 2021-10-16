    // CART BUILD
    var cart;
    var cartItems;

    function addItemToCart(id, name, price) {
        let cartItem = {
            id: id,
            name: name,
            price: price
        };

        cartItems.push(cartItem);
        Cookies.set('cart', JSON.stringify(cartItems, null, 4), { expires: 7 });
        $(".cart__content").removeClass('empty');
        $(".cart-elements").append('<li><span class="cart-price">' + cartItem.price + '</span> ' + cartItem.name + '</li>');
    }

    function displayExistingCart(){
        cartItems = jQuery.parseJSON(cart);
        jQuery.each(cartItems, function(index, value) {
            $(".cart-elements").append('<li><span class="cart-price">' + value.price + '</span> ' + value.name + '</li>');
        });
    }


    $(document).ready(function() {
      cart = Cookies.get('cart');
      if (typeof cart !== 'undefined') {
          displayExistingCart();
      } else {
        cartItems = [];
        $(".cart__content").addClass('empty');
      }

      // ADD ITEMS TO CART
      $(".add-to-cart").click(function() {
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');
        addItemToCart(id, name, price);
      });

      // EMPTY CART
      $(".empty-cart").click(function() {
        Cookies.remove('cart');
        $(".cart__content").addClass('empty');
        cartItems = [];
      });
    });