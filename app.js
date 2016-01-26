var app = angular.module('store', []); 

//Controllers 
app.controller ('StoreController', function(){
  this.product = purses; 
}); 

var purses = [
  {
    name: 'Dash of Pink',   
    price: 47.99,   
    description: 'Simple light brown purse with light pink flowers for everyday use.', 
    canPurchase: true, 
    images: [
    {
      full: 'dash_of_pink.png'
    }]
  }, 
  {
    name: 'Harvest Brown',   
    price: 59.99,   
    description: 'Brown purse for autumn outfits', 
    canPurchase: true, 
    images: [
    {
      full: 'brownpurse.png'
    }]

  },
  {
    name: 'Little Black Purse',   
    price: 68.99,   
    description: 'Elegant purse for dinner nights', 
    canPurchase: true, 
    images: [
    {
      full: 'black.png'
    }]
  }
]; 

app.controller("PanelController", function(){
  this.tab = 1; 

  this.selectTab = function(setTab){
    this.tab = setTab; 
  }; 
  this.isSelected = function(checkTab){
    return this.tab ===checkTab; 
  }; 
}); 