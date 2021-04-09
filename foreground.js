let items = document.getElementsByClassName('itemtile-header');
let posts = [];
for (i = 0; i < items.length; i += 1) {
  posts.push(items[i].firstElementChild.href);
}
