// Простой JavaScript: смена фона и показ подробностей
(function(){
  let colors = ['#ffffff','#f7f9fc','#0b1220','#fff7ed'];
  let idx = 0;
  function changeBg(){
    idx = (idx + 1) % colors.length;
    document.body.style.background = colors[idx];
    // изменить текст кнопок в зависимости от темы
    document.querySelectorAll('.header-actions .btn').forEach(b => {
      b.textContent = 'Сменить фон';
    });
  }
  window.changeBg = changeBg;
  // Привязка разных кнопок
  ['themeBtn','themeBtn2','themeBtn3','themeBtn4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', changeBg);
  });

  // Toggle details (для дискографии)
  window.toggleDetails = function(){
    const el = document.getElementById('album-details');
    if(!el) return;
    if(el.classList.contains('hidden')) el.classList.remove('hidden');
    else el.classList.add('hidden');
  };

  // Accessibility: allow enter to toggle when focused
  document.addEventListener('keydown', function(e){
    if(e.key === 't') changeBg();
  });
})();