$("#submit-btn").on("click", function(event){
    event.preventDefault();

    function validateInputs(){
        var isValid = true;
        $(".form-input").each(function(){
            if ($(this).val() === ""){
                isValid = false
            }
        });

        $(".selected").each(function(){
            if ($(this).val() === ""){
                isValid = false
            }
        });

        return isValid
    }

    if(validateInputs()) {
        var newFriend = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        $.post("/api/friends", newFriend, function(data){
            console.log(data)
        });
    } else {
        return false
    }

    $.get("/api/match", function(data){
        console.log(data)
        $("#your-name").text($("#name").val())
        $("#your-photo").attr("src", $("#photo").val())
        $("#match-name").text(data[0])
        $("#match-photo").attr("src", data[1])

        $("#myModal").modal("toggle");
    })
})
