var
_texto = "Սիրելի Մերի - «Շնորհավորում եմ նոր տարվա առթիվ: Նախորդ տարուց թող շարունակվի միայն դրականը: Ցանկանում եմ քեզ նպատակների իրականացում, գլխապտույտ սեր և արժանի ընկերներ»".split(''),
$elem = document.getElementById('conteudo'),
i = 0;

_fn = setInterval(function(){
  $elem.insertAdjacentText('beforeend', _texto[i]);
  i++;  
  i == _texto.length ? clearInterval(_fn) : null;
}, 70);