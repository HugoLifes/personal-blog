<template>
    <TresCanvas clear-color="#82DBC5" >
        <TresPerspectiveCamera />
        <TresMesh>
            <TresBoxGeometry :args="[1,1,1]"/>
            <TresMeshBasicMaterial color="orange"/>
        </TresMesh>
        <TresAmbientLight :intensity="1"/>

    </TresCanvas>
</template>



