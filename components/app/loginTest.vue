<template>
    <div>
        <button @click="login" class="border rounded-xl bg-red-500 p-3">Login</button>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    });
    if (error) {
        console.error(error);
    }
}

</script>