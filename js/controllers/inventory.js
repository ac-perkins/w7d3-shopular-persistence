(function() {
    'use strict';

    angular
      .module('shopulate')
      .controller('InventoryController', InventoryController);

      InventoryController.$inject = ["inventoryFactory"];

      function InventoryController(inventoryFactory) {

          this.all = inventoryFactory.data;

          this.newItem = {
            name: "",
            price: "",
            quantity: "",
            color: "",
            discount: ""
          };

          this.priceConvert = function priceConvert(item) {
              return (item.price - item.discount) + ( (item.price - item.discount) * inventoryFactory.tax );
          };

          this.GBP = false;
          this.color = 'Color';

          this.convert = function convert() {
            if(this.GBP === false) {
              this.GBP = true;
              this.color = 'Colour';
            } else {
              this.GBP = false;
              this.color = 'Color';
            }
          };

          this.addNewItem = function addNewItem(form) {
            console.log("Saving");
            if (form.$valid) {
            this.all.push(this.newItem);
            this.newItem = {};
            inventoryFactory.save(this.all);
            form.$setPristine();
            form.$setUntouched();
          } else {
            console.log("Something was wrong! Fix your form!");
          }
          };

          this.plusOne = function plusOne(merch) {
            merch.quantity++;
          };

          this.minusOne = function plusOne(merch) {
            if (merch.quantity === 0) {
              merch.quantity = 0;
            } else {
            merch.quantity--;
          }
          };

      }
})();
