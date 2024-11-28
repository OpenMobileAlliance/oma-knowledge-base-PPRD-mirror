<template>
    {{ guidelines }}
</template>

<script setup>

const guidelines  = await useAsyncData('guidelines', () => queryContent('/_8.guidelines').where({ _partial: true }).findOne())

</script>