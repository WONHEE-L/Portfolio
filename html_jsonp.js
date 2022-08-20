function showItems(menu) {
    var newContent = '';

    for (var i = 0; i < menu.items.length; i++) {

      newContent += '<div class="items row mt-5 mb-5 container col-*-12">';
      newContent += '<div class="col-md-6 col-sm-12">';
      newContent += '<img class="img-fluid" src="' + menu.items[i].photo + '"';  
      newContent += ' alt="' + menu.items[i].title + '" />';
      newContent += '</div>';
      newContent += '<div class="col-md-6 col-sm-12">';
      newContent += '<h2 class="text-center p-4">' + menu.items[i].title + '</h2>';
      newContent += '<p class="description">' + menu.items[i].description + '</p>';
      newContent += '<button class="text-light p-2 float-end">' + menu.items[i].button + '</button>';
      newContent += '</div>';      
      newContent += '</div>';  

    }
    document.getElementById('content').innerHTML = newContent;
}
