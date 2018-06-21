
$(function(){
    $(".devourBtn").on("click",function(event){
        console.log("BUTTON CLICKED");
        event.preventDefault();
        $("#msg").text("BUTTON WAS CLICKED");
        var id = $(this).attr("data-id");
        var newDevourState = {devoured:true};
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            console.log("changed sleep to", newDevourState);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new Burger");
            location.reload();
        });
    });
});