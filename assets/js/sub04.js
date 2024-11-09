// 캠페인 필터링
// const filterMenuInit = () => {
//     const filters = document.querySelectorAll('[data-filter-id]');

//     filters.forEach(filter => {
//         const filterBtns = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'BUTTON');
//         const filterLists = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'ARTICLE');

//         filterBtns.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 const filterType = btn.getAttribute('data-filter');

//                 filterBtns.forEach(btn => btn.classList.remove('active'));
//                 btn.classList.add('active');

//                 filterLists.forEach(list => {
//                     if (filterType === 'all'){
//                         list.style.display = 'list-item';
//                         return;
//                     }
                    
//                     list.style.display = list.getAttribute('data-filter') === filterType ? 'list-item' : 'none';
//                 })
//             });
//         })
//     })
// };

// filterMenuInit();

$(function(){
    $('.content-area').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });

      $('.tab-button-area .list').on( 'click', 'li', function() {
        var filterValue = $(this).children().attr('data-filter');
        $('.content-area').isotope({ filter: filterValue });
        $('.tab-button-area .list li').removeClass('active');
        $(this).addClass('active');
      });
});