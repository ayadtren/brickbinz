import React from "react";
const AddProducts = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h4>Add Products</h4>
            <form>
              <div className="form__group">
                <span>Product title</span>
                <input type="text" placeholder="Lego set 1" />
              </div>

              <div className="form__group">
                <span>Short Description</span>
                <input type="text" placeholder="lorem...." />
              </div>

              <div className="form__group">
                <span>Description</span>
                <input type="text" placeholder="Description...." />
              </div>
              <div>
                <div className="form__group">
                  <span>Price</span>
                  <input type="number" placeholder="$10" />
                </div>

                <div className="form__group">
                  <span>Category</span>
                  <select>
                    <option value="Star wars">star wars</option>
                    <option value="Lego">lego</option>
                    <option value="Jungle">jungle</option>
                    <option value="Fantasy">fantasy</option>
                    <option value="Cars">cars</option>
                    <option value="Dragons">dragons</option>
                    <option value="Movies">movies</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="form__group">
                  <span>Product Image</span>
                  <input type="file" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
