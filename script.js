const tMatch = document.querySelector('#tMatch'),
tWr = document.querySelector('#tWr'),
wrReq = document.querySelector('#wrReq'),
btn = document.querySelector('.btn-submit'),
result = document.querySelector('.result-place p'),
sosmed = document.querySelectorAll('.img');

btn.addEventListener('click', () => {
  if(tMatch.value && tWr.value && wrReq.value !== ''){
    
    const values = {
      tMatch: parseInt(tMatch.value),
      tWr: parseInt(tWr.value),
      wrReq: parseInt(wrReq.value)
    };
    
    if(values.tMatch && values.tWr && values.wrReq !== NaN){
      
      if(values.tWr < values.wrReq){
        if(values.tWr && values.wrReq <= 99){
        const hasil = rumus(values.tMatch, values.tWr, values.wrReq);
        
        result.innerHTML = `Kamu harus Memainkan <span class="bold">${hasil}</span> Match tanpa Kalah untuk Mendapatkan <span class="bold">${values.wrReq}%</span> Winrate`;
        }else{
          result.innerHTML = `WR lu <span class="bold">100%</span> ? Halah...`;
        }
      }else{
        result.innerHTML = `<sapn class="red">Unknown Error!</span>`;
      }
    }
  }else{
    result.innerHTML = `<sapn class="red">Unknown Error!</span>`;
  }
});

sosmed.forEach(el => {
  el.addEventListener('click', () => {
  if(el.classList.contains('github-link')){
    window.location.href = 'https://github.com/SCxoneZ'
  }else if(el.classList.contains('tiktok-link')){
    window.location.href = 'https://vt.tiktok.com/ZSeuGDS5F/';
  }else if(el.classList.contains('instagram-link')){
    window.location.href = 'https://instagram.com/int_to_str?utm_medium=copy_link';
  }
  });
});


function rumus(tMatch, tWr, wrReq) {
    let tWin = tMatch * (tWr / 100);
    let tLose = tMatch - tWin;
    let sisaWr = 100 - wrReq;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - tMatch;
    return Math.round(final);
}

function rumusLose(tMatch, tWr, wrReq) {
    let persen = tWr - wrReq;
    let final = tMatch * (persen / 100);
    return Math.round(final);
}

function minLose(tMatch, tWr) {
    return Math.ceil(tMatch * tWr / 100)
}

function loseStreak(tMatch, tWr, lsReq) {
    const win = Math.floor(tMatch * (tWr / 100) - lsReq) / tMatch * 100;
    return win.toFixed(1);
}
