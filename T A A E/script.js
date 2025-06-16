function filterServices() {
  const input = document.getElementById('serviceSearch');
  const filter = input.value.toLowerCase();
  const ul = document.getElementById('servicesList');
  const li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    const textValue = li[i].textContent || li[i].innerText;
    if (textValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
