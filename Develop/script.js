// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

 
  //code to apply the past, present, or future class to each time block by comparing the id to the current hour
  function updatePPF() {

    //gets current time
    var currentTime = dayjs().hour(); 

    //loops over each time block
    $(".time-block").each(function() {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      //change classes depending on current time
      if (currentTime === timeBlock) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }

      else if (currentTime > timeBlock) {
        $(this).addClass ("past");
        $(this).removeClass ("present");
        $(this).removeClass ("future");
      }

      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  
    
  };

   // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveButtonEl = $("button");
  saveButtonEl.on("click", function(){
    var text = $(this).siblings("textarea").val();
    var time = $(this).parent().attr("id")
    //saves text to local storage
    localStorage.setItem(time, text);
    });
    
  for (var i = 0; i < localStorage.length; i++) {
      var savedInput = localStorage.key(i);//.key returns name of key at specified index
      var output = localStorage.getItem(savedInput);//
      $("#" + savedInput).find("textarea").val(output);
    };

    
  updatePPF();
 
  




