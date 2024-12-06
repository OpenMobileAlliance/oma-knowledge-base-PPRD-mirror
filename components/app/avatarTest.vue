<template>
    <div v-if="user">
        <img :src="profile" />
        {{ name }}
    </div>
</template>

<script setup>


const user = useSupabaseUser()

const name = computed(() => user?.value.user_metadata.full_name)
const profile = computed(() => user?.value.user_metadata.avatar_url)
</script>