// var Common = function() {
//   var self = this;

//   self.init = function() {
//     console.log('init!');
//   }

//   self.init();
// }

// var common = new Common();

console.log('??');
const todoItems = [
  { title: 'title',
    createDate: Date.now(),
    description: 'lorem',
    alramYN: true,
    completeYN: false,
    starYN: true
  }
]

// elelment 
const viewWrap = document.querySelector('.view_wrap');
const createWrap = document.querySelector('.create_wrap');
const dropdown = document.querySelector('.dropdown');


const addTodoList = () => {
  viewWrap.classList.add('display_none');
  createWrap.classList.remove('display_none');
  console.log(createWrap);
  console.log(viewWrap);
  
}

// var IndexController = function() {
//   var self = this;

//   self.init = function() {
//     console.log('index controller init edit');
//   }

//   self.init();
// }

// var idxCtl = new IndexController();