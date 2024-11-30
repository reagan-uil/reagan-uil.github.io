<script>
  let {
    name = undefined,
    room = undefined,
    email = undefined,
    time = undefined,
  } = $props();
</script>

<div class="teacher">
  {#if name}<p>{name}</p>{:else}<p>Sponsor TBD</p>{/if}
  {#if email}<p>{email}@neisd.net</p>{/if}
  {#if room}<p>{room}</p>{/if}
  {#if time}<p>{time}</p>{/if}
</div>
