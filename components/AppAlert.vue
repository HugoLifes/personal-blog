<script setup lang="ts">

</script>

<template>
    <TresCanvas clear-color='#4f4f4f' window-size  >
      <TresPerspectiveCamera />
      <OrbitControls />
     
      <Suspense>
        <Stone/>
      </Suspense>
      <TresGridHelper/>
    </TresCanvas>
</template>






