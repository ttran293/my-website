function f() {
  document.getElementsByClassName('dropdown')[0].classList.toggle('down');
  document.getElementsByClassName('arrow')[0].classList.toggle('gone');
  if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
    setTimeout(function() {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
  }
}

function f2() {
  document.getElementsByClassName('dropdown-2')[0].classList.toggle('down-2');
  document.getElementsByClassName('arrow-2')[0].classList.toggle('gone-2');
  if (document.getElementsByClassName('dropdown-2')[0].classList.contains('down-2')) {
    setTimeout(function() {
      document.getElementsByClassName('dropdown-2')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown-2')[0].style.overflow = 'hidden'
  }
}
