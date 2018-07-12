import API from './API';

class Products extends API {
  constructor() {
    super();
    this.products = this.products.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  /**
   * List of Products
   *
   * @return Promise
   */
  products() {
    return super.get('/products');
  }

  /**
   * Get a product
   * @param string
   * @return Promise
   */
  getProduct(id) {
    return super.get(`/products/${id}`);
  }
}
export default Products;
