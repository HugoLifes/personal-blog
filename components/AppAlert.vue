<script setup lang="ts">
import {BlendFunction} from 'postprocessing'
import { Color, BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { EffectComposer, Bloom } from '@tresjs/post-processing' 

const gl = {
  clearColor: 'black',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}


const bloomParams = reactive({
  luminanceThreshold: 0.2,
  luminanceSmoothing: 0.3,
  mipmapBlur: true,
  intensity: 0.3,
  blendFunction: BlendFunction.ADD,
})

console.log(bloomParams)
</script>

<template>
    <TresCanvas window-size v-bind="gl">
      <TresPerspectiveCamera :look-at="[0, 0, 0]" :position="[-7.3, 8.3, 10.6]" />
      <OrbitControls />

      <Suspense>
        <Stone/>
      </Suspense>

      <EffectComposer>
        <Bloom v-bind="bloomParams" />
      </EffectComposer>
      
      <TresGridHelper/>
      
    </TresCanvas>
</template>






