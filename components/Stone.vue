<script setup lang="ts">
import { MeshBasicMaterial } from 'three';
const {scene:model, nodes, materials} = await useGLTF('/nuxt-stones.glb') 
const stoneBakedTexture = await useTexture(['/RockBaked.png'])
const littleStonesBakedTexture = await useTexture(['/LittleRocksBaked.png'])

//Normal Stone Shaders
stoneBakedTexture.flipY= false
const StoneMaterial = new MeshBasicMaterial({
  map: stoneBakedTexture
})
nodes.Stone.material = StoneMaterial
nodes.StoneCarved.material = StoneMaterial

// little Stones Shaders
littleStonesBakedTexture.flipY = false
const littleStonesBakedMaterial = new MeshBasicMaterial({
  map: littleStonesBakedTexture
})
const littleStones = Object.values(nodes).filter(node => node.name.includes('Stone00'))
littleStones.forEach((stone)=>{
  stone.material = littleStonesBakedMaterial
})

//intentar cambiar colores e intensidad
materials.RockLight.color = 'blue'
materials.RockLight.emissiveIntensity = 1

console.log(materials)

</script>

<template>
  <primitive :object="nodes.StoneCarved"/>
  <primitive :object="nodes.Stone"/>
  <primitive v-for="stones in littleStones" :object="stones" />
  <primitive :object="nodes.Logo"/>
  <primitive :object="nodes.Orbs"/>
</template>


