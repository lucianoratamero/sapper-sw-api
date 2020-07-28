<script>
  import searchTerm from '../../store/searchTerm.store';
  let timer;

  function handleKeyup(value){
    clearTimeout(timer);
    timer = setTimeout(() => searchTerm.update(state => state = value), 500);
  }
</script>

<div>
  <input type="text" value={$searchTerm} on:keyup={e => handleKeyup(e.target.value)} />
</div>
