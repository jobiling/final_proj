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
    // Getting the JSON back & asking 3 times the images...
    

              res.get
              ({
        

                url: '/1.1/statuses/home_timeline.json',
                success: function(data) 
                { 
                    
                    
                    console.log(data[data.length-1]);  
                    maxim_id = data[data.length-1].id;
                    
                   
                   // loop to display the images and fetch the tweets
                    for (j = 0; j < data.length; j++)
                      
                    {
                      if (data[j].extended_entities)
                      {
                          var media_url = data[j].extended_entities.media[0].media_url;
                          var tweet_text = data[j].text;
                          console.log(tweet_text);
                          tweet_id = data[j].id;
                          console.log(tweet_id);
                          // Add the images to the document
                          $('#links').append
                          (
                            
                          '<a href="' + media_url + '"' + ' title="' + tweet_text +'"><img src="' + media_url +'" height=100 width=100 ></a>'

           
                          );
                      }
                      // Show in the console when there is no image
                      else
                      {
                        console.log("no image");
                      }

                    }




             

      res.get
                  ({
              
                  
                  
                  url: "1.1/statuses/home_timeline.json?max_id=" + maxim_id,

                      success: function(data) 
                      { 
                         
                         
                         console.log(data[data.length-1]);
                         maxim_id= data[data.length-1].id; 
                        
                         
                         // loop to display the images 
                          for (k = 0; k < data.length; k++)
                            
                          {
                            if (data[k].extended_entities)
                            {
                                 var media_url = data[k].extended_entities.media[0].media_url;
                                  var tweet_text = data[k].text;
                                  console.log(tweet_text);
                                  // Add the images to the document
                                  $('#links').append
                                  (
                                    
                                  '<a href="' + media_url + '"' + ' title="' + tweet_text +'"><img src="' + media_url +'" height=100 width=100 ></a>'

                  
                                );
                            }
                            // Show in the console when there is no image
                            else
                            {
                              console.log("no image");
                            }

                          }
                      
                      
                      
                            
                    

                res.get
                  ({
              
                  
                  
                  url: "1.1/statuses/home_timeline.json?max_id=" + maxim_id,

                      success: function(data) 
                      { 
                         
                         
                         console.log(data[data.length-1]);
                         maxim_id= data[data.length-1].id; 
                      
                         
                         // loop to display the images 
                          for (k = 0; k < data.length; k++)
                            
                          {
                            if (data[k].extended_entities)
                            {
                                 var media_url = data[k].extended_entities.media[0].media_url;
                                  var tweet_text = data[k].text;
                                  console.log(tweet_text);
                                  // Add the images to the document
                                  $('#links').append
                                  (
                                    
                                  '<a href="' + media_url + '"' + ' title="' + tweet_text +'"><img src="' + media_url +'" height=100 width=100 ></a>'
                          
                                );
                            }
                            // Show in the console when there is no image
                            else
                            {
                              console.log("no image");
                            }

                          }
                      
                      
                      
                            
                      }

                
                      });
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
          //Show greeting with username
      
          var full_name = response.name;

          var first_name = full_name.split(' ')[0];
          var id = response.id;
    
       
          $('span.name').html(first_name);
           
           $( ".login_container" ).hide() ;
           $(".background").hide(); 
       
           $("#links").css( "display", "block");    
           $(".container").css( "display", "block");
      })
      
      .fail(function (err) {
          
      });

  })
  // What happens when error at login
  .fail(function (err) {
      
  });
  
});



$(document).ready(function() {
  blueimp.Gallery(
    document.getElementById('links').getElementsByTagName('a'),
    {
      container: '#blueimp-gallery',
      carousel: true,
      onslide: function (index, slide) {
                var title_tag = this.list[index].getAttribute('title');
                console.log(title_tag);
      }
    }
  );
});

