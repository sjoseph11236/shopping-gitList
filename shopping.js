// lets create a wrapper function that waits fro the DOM to lead 
$(document).ready(function() {
    //     add an event listener that listens for a click on the id #add
      $('#add').click(function() {
    //   grab the user input 
        let userInput = $('input[name = shoppingListItem]').val();
    // test to make we are grabing value
        console.log(userInput); 
        
        $('.list').append('<li>' + '<input class = "checked-item" type = "checkbox">'+ userInput + '</li>');
        $('input[name = shoppingListItem]').val(' ')
        return false;
      })    
    // keep track of the user togglin each item and event listener
        $(document).on('click', '.checked-item', function() {
          // capture the current list item user is clicking on
          $(this).parent().toggleClass('it-is-checked');
        });
        
        // add an event listener to the check button
        $('.checked').on('click', function(e) {
          
          // prevent the default action on the event
          e.preventDefault();
          
          // remove the checked items
          $('.it-is-checked').remove();
        });
      
    // add event listener to reset button
      
      $('.reset-list').on('click', function(e) {
       
        e.preventDefault();
        // remove  all list items in the shoppin cart 
        $('li').remove();    
      })
    })
    