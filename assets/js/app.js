document.querySelector('.search_now').addEventListener('click', function(){
    document.querySelector('.popup-search-box').classList.add("show")
})
document.querySelector('.cancle_btn').addEventListener('click', function(){
    document.querySelector('.popup-search-box').classList.remove("show")
})

