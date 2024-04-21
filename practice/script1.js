let count = 0;
function handleClick() {
  count += 1;
  document.getElementById('demo').innerHTML =
    'You clicked the button ' + count + ' times.';
}
