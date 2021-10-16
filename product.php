<?php include 'header.php'; ?>

<div class="container-fluid">
  <div class="row">
    <div class="col-lg-3 left-col">
      <!-- start left col content -->
      <?php include 'parts/cart.php'; ?>
      <!-- end left col content -->
    </div>
    <div class="col-lg-9 right-col">
      <!-- start right col content -->
      <div class="row">
        <div class="col-12">
          <div class="product-main">
            <div class="row">
              <div class="col-md-6 product-col text-center">
                <img src="images/product.jpg" alt="Product name" class="prod-list__img">
              </div>
              <div class="col-md-6 product-col product-meta-col">
                <div>
                  <h1 class="product-title">Product Title</h1>
                  <div class="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni iure distinctio ea voluptatibus consectetur quasi error quam consequuntur dolor tempora, numquam asperiores deleniti impedit natus cumque odio at perspiciatis?
                  </div>
                  <div href="index.php" class="add-to-cart" data-name="Product Titlle 1" data-price="$25" data-id="2">ADD TO CART</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end right col content -->
    </div>
  </div>
</div>

<script>
  $(function() {
    $('.product-col').matchHeight();
  });
</script>

<?php include 'footer.php'; ?>