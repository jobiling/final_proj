var maxim_id;
var result = [];
var i = 0;
//var i = 0
// Starts the authentication
$( "#login-button" ).click(function() {
OAuth.initialize('J7jjin029IB2wjR62YUQo5bP5uI');
OAuth.popup
('twitter', function(err, res)
  {
    // Getting the JSON back
    

              res.get
              ({
        

                url: '/1.1/statuses/home_timeline.json',
                success: function(data) 
                { 
                    
                    console.log(data[10]);  
                    maxim_id = data[10].id;
                    console.log("this is the first array ")
                    console.log(maxim_id);
                    console.log("This is the first max " + maxim_id);
      //              console.log("this is initial i = " + i);
                    //i++;
                    
                   
                   // loop to display the images 
                    for (j = 0; j < data.length; j++)
                      
                    {
                      if (data[j].extended_entities)
                      {
                          var media_url = data[j].extended_entities.media[0].media_url;
                         
                          // Add the images to the document
                          $('#links').append
                          (
                            
                          '<a href="' + media_url + '"><img src="' + media_url +'" height=50 width=50 ></a>'

           
                          );
                      }
                      // Show in the console when there is no image
                      else
                      {
                        console.log("no image");
                      }
// Dans la loop donc non console.log("this is 2 i = " + i);
// i++;
                    }
//i++;
//console.log("this is 3 i = " + i);


while (i<2)
  {
      i++;
      console.log("this is 6 i = " + i + " " + maxim_id);
      console.log("1.1/statuses/home_timeline.json?max_id=" + maxim_id);         



    }  
       
      

      result[i] = res.get
                  ({
              
                  
                  
                  url: '1.1/statuses/home_timeline.json?max_id=' + maxim_id,

                      success: function(data) 
                      { 
                         
                         
                         console.log(data[10]);
                         maxim_id= data[10].id; 
                         console.log("this is a another max_id " + maxim_id);
                         
                         // loop to display the images 
                          for (k = 0; k < data.length; k++)
                            
                          {
                            if (data[k].extended_entities)
                            {
                                var media_url = data[k].extended_entities.media[0].media_url;
                               
                                // Add the images to the document
                                $('#links').append
                                (
                                  
                                '<a href="' + media_url + '"><img src="' + media_url +'" height=50 width=50 ></a>'

                  
                                );
                            }
                            // Show in the console when there is no image
                            else
                            {
                              console.log("no image");
                            }

                          }
                      
                      
                      console.log("this is 4 i = " + i);
                            
                      }

                
                  });
      

                 }

              });



  }
)
  // What happens when logged in correctly
  .done(function(result) {
      result.me()
      .done(function (response) {
          //this will display "John Doe" in the console
          console.log(response.name);
          var name = response.name;
          var id = response.id;
          console.log(result.oauth_token);
          //$('#name').html(name);
           //$( "#login-button" ).hide();   
           $( ".text_login" ).hide() ;
           $(".background").hide();     
      })
      
      .fail(function (err) {
          
      });

  })
  // What happens when error at login
  .fail(function (err) {
      
  });
  
});
