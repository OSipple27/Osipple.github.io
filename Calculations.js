function calculateTotal()
{
  let unit_price={
    Suit: 200,
    Bowtie: 20,
    Shoes: 150,
    Belt:50    
  };
  let item_price={}
  
  item_price.suit = ($("#qty_suit").val() * unit_price.suit )
  $("#price_suit").val(item_price.suit);
  
  item_price.bowtie = ($("#qty_bowtie").val() * unit_price.bowtie)
  $("#price_bowtie").val(item_price.bowtie);
  
  item_price.shoes = ($("#qty_shoes").val() * unit_price.shoes)
  $("#price_shoes").val(item_price.shoes);  
  
  item_price.belt = ($("#qty_belt").val() * unit_price.belt )
  $("#price_belt").val(item_price.belt);    
  
  let total = item_price.suit + item_price.bowtie + item_price.shoes + item_price.belt;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})