let dice1 = 1, dice2 = 1;
let rolling = false;

$(document).ready(() => setDices(1, 1));

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function throwDices() {
  if (rolling) return;
  rolling = true;
  
  let interval = setInterval(() => { 
    if (rolling) setDices(rnd(1, 6), rnd(1, 6));
  }, 100);
  
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (!dice1 || !dice2) {
        reject(new Error('Dice has fell from the table. Thats unlicky!'));
      } else {
        resolve(dice1+dice2);
      }
      rolling = false;
    }, 2000 + rnd(0, 10)*250);
  });
  
  promise.then(function(res) {
    let msg = `Dices show ${dice1} | ${dice2}.`;
    if (res == 12) msg += ' You are lucky bastard'
    //log(msg);
    clearInterval(interval);
  }, function(err) {
    //log(err.message);
    clearInterval(interval);
  });
  $('#promiser p').remove();
}

function setDices(d1, d2) {
  dice1 = d1; dice2 = d2;
  let s1 = d1 ? '&#' + (9855 + d1) + ';' : '';
  let s2 = d2 ? '&#' + (9855 + d2) + ';' : '';
  $('#dice1').html(s1);
  $('#dice2').html(s2);
}

function log(msg) { $('#promiser').append($('<p>').text(msg)); }