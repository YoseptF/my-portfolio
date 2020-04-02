import './bling.js'
import arrDiff from 'arr-diff';

window.onload = event => {
  let glitched = $('.glitch');

  let messages = ['JAVASCRIPT', 'RUBY', 'GOLANG', 'REACT', 'RAILS', 'SQL'];

  let cycle_animaton = event => {
    let current_animation = glitched.classList.contains('fadeOutUp') ? 'fadeOutUp' : 'fadeInDown';

    glitched.classList.remove(current_animation);

    if (glitched.classList.contains('delay-3s'))
      glitched.classList.remove('delay-3s');
    else
      glitched.classList.add('delay-3s');


    if (current_animation == 'fadeOutUp') {
      glitched.dataset.text = messages[0];
      glitched.firstElementChild.innerHTML = messages[0];
      glitched.firstElementChild.innerHTML = messages[0];
      messages.push(messages.shift());
    }

    glitched.classList.add('animated', current_animation == 'fadeInDown' ? 'fadeOutUp' : 'fadeInDown');

    glitched.on('animationend', cycle_animaton);
  }
  glitched.on('animationend', cycle_animaton);
}
