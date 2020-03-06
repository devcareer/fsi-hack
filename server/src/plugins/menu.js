const UssdMenu = require('ussd-menu-builder');

const menu = new UssdMenu();

menu.startState({
  run: () => {
    menu.con(`
      Welcome. Choose option:
        1. Show Balance
        2. Exit
    `);
  },
  next: {
    '1': 'showBalance',
    '2': 'exit'
  },
});

menu.state('showBalance', {
  run: () => {
    fetchBalance(menu.args.phoneNumber)
      .then(function(balance) {
        menu.end(`Balance is: ‎₦${balance}`)
      });
  },
});

module.exports = menu;
