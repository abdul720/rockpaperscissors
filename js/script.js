var user;

$("#shoot").click(function(){
    user = $("#input").val();
    result();
});

function result(){ 
  var cpt = Math.random() * 99 + 1;
  if (cpt < 20.0) {
    cpt = "rock";
  } else if(cpt <= 40.0) {
    cpt = "paper";
  } else if(cpt <= 60.0){
    cpt = "scissors";
  } else if(cpt <= 80.0){
    cpt = "spock";
  } else{
    cpt = "lizard";
  } 
  
  
  if(user === "rock"){
    if(cpt === "rock"){
      $("#result").html("It's a Tie");
    } else if(user === "rock"){
      if(cpt === "scissors"){
        $("#result").html("You Win.");
      } else if(user === "rock"){
        if(cpt === "lizard"){
          $("#result").html("You Win.");
        } else if(user === "rock"){
          if(cpt === "spock"){
            $("#result").html("CPU Wins!!");
          } else if(user === "rock"){
            if(cpt === "paper"){
              $("#result").html("CPU Wins!!");
            }
          }
        }
      }
    }
  }
  
  
  if(user === "paper"){
    if(cpt === "rock"){
      $("#result").html("You Win.");
    } else if(user === "paper"){
      if(cpt === "scissors"){
        $("#result").html("CPU Wins!!");
      } else if(user === "paper"){
        if(cpt === "lizard"){
          $("#result").html("CPU Wins!!");
        } else if(user === "paper"){
          if(cpt === "spock"){
            $("#result").html("You Win.");
          } else if(user === "paper"){
            if(cpt === "paper"){
              $("#result").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  
  if(user === "scissors"){
    if(cpt === "paper"){
      $("#result").html("You Win.");
    } else if(user === "scissors"){
      if(cpt === "rock"){
        $("#result").html("CPU Wins!!");
      } else if(user === "scissors"){
        if(cpt === "lizard"){
          $("#result").html("You Win.");
        } else if(user === "scissors"){
          if(cpt === "spock"){
            $("#result").html("CPU Wins!!");
          } else if(user === "scissors"){
            if(cpt === "scissors"){
              $("#result").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  
  if(user === "spock"){
    if(cpt === "paper"){
      $("#result").html("CPU Wins!!");
    } else if(user === "spock"){
      if(cpt === "scissors"){
        $("#result").html("CPU Wins!!");
      } else if(user === "spock"){
        if(cpt === "lizard"){
          $("#result").html("CPU Wins!!");
        } else if(user === "spock"){
          if(cpt === "rock"){
            $("#result").html("You Win.");
          } else if(user === "spock"){
            if(cpt === "spock"){
              $("#result").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  
  if(user === "lizard"){
    if(cpt === "scissors"){
      $("#result").html("CPU Wins!!");
    } else if(user === "lizard"){
      if(cpt === "paper"){
        $("#result").html("You Win.");
      } else if(user === "lizard"){
        if(cpt === "spock"){
          $("#result").html("You Win.");
        } else if(user === "lizard"){
          if(cpt === "rock"){
            $("#result").html("CPU Wins!!");
          } else if(user === "lizard"){
            if(cpt === "lizard"){
              $("#result").html("It's a Tie.");
            }
          }
        }
      }
    }
  }
  
  $("#userChoice").html(user);
  $("#computerChoice").html(cpt); 
}
