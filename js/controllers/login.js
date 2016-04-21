(function() {
    'use strict';

    angular
      .module('shopulate')
      .controller('LoginController', LoginController);

      function LoginController() {

        this.user = localStorage.getItem('user');

        this.time = new Date();

        this.addNewUser = function addNewUser() {
          localStorage.setItem('user', this.user);
        };

        this.logout = function logout(form) {
          this.user = '';
          localStorage.setItem('user', '');
          form.$setPristine();
          form.$setUntouched();
        };
      }
})();
