menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Pepperoni Pizza (Non-Veg)", "Corn Pizza"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + "<li>" + menu_list_array[i] + "</li>";
    }
    htmldata = htmldata + "</ol>";
    document.getElementById("display_menu").innerHTML = htmldata;
    console.log(menu_list_array);
}

function add_item() {
    var htmldata;
    item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "section class='cards'>"
    for (i = 0; i < menu_list_array.length; i++); {
        htmldata = htmldata + "<div class='card'>" + "<img src='pizzaImg.png'>" + menu_list_array[i] + "</div>"
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
    console.log(menu_list_array);
}


function add_top() {
    //Complete the code
}