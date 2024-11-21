<script>
  export let name,
    room,
    email,
    time = null;
</script>

<div class="teacher">
  <p>{name ? name : 'Sponsor TBD'}</p>
  <p>{email ? email + '@neisd.net' : ''}</p>
  <p>{room ? room : ''}</p>
  <p>{time ? time : ''}</p>
</div>
