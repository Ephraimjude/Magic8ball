// JavaScript for Magic 8 Ball functionality
    $(document).ready(function() {

      $("#answer").hide();
  
      $("#questionButton").click(function() {
        $("#8ball").effect("roll");
  
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
      $("#answer").fadeIn(2000);
        // Prompt the user for a question
        var question = prompt("Ask the Magic 8 Ball a question:");
        
        if (question) {
          // Generate a random answer
          var answers = [
            "It is certain.",
            "Without a doubt.",
            "Yes, definitely.",
            "Most likely.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Don't count on it.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
          ];
          var randomIndex = Math.floor(Math.random() * answers.length);
          var response = answers[randomIndex];

          // Display the question and answer
          $("#answer").text("You asked: " + question + "\n8 Ball says: " + response);
        }
      });
    });