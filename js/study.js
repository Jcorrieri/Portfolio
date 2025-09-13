document.addEventListener('DOMContentLoaded', () => {
   const submitBtn = document.getElementById('search-button');
   const textfield = document.getElementById('gallery-input');
   const tagSelector = document.getElementById('tag-selector');
   const noResult = document.getElementById('no-result-div');

   submitBtn?.addEventListener('click', () => {
       noResult.classList.add('hidden');
       let query = textfield.value.trim().toLowerCase();
       let tag = tagSelector.value;

       let visibleCount = 0;
       document.querySelectorAll('a.article-link').forEach(link => {
           const title = link.dataset.title;
           const keywords = link.dataset.keywords;
           const tags = link.dataset.categories;

           let matchesTag = tag === "all" || tags.includes(tag);
           let matchesQuery = title.includes(query) || keywords.includes(query);

           if (matchesTag && matchesQuery) {
               link.classList.remove('hidden');
               visibleCount++;
           } else {
               link.classList.add('hidden');
           }
       });

       noResult.classList.toggle('hidden', visibleCount !== 0);
   });
});