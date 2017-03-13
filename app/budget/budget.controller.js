(function() {
    'use strict';

    angular
        .module("app")
        .controller("budget", budget);

    function budget() {
        var vm = this;
        vm.infoAddEx=[];
        vm.infoAddIn=[];

        vm.addExpenseCall = function(name, amount) {
            vm.infoAddEx.push(vm.addExpense);
            vm.addExpense = {};

        };
        vm.addIncomeCall = function(name, amount) {
            vm.infoAddIn.push(vm.addIncome);
            vm.addIncome = {};

        };

    }
})();
