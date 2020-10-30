function greet()

{
    var name=document.getElementById("textboxName").value;

    

    console.log(displayName(name));

}


function displayName(name)

{

    return "Hello "+name;

}