<template>
    <div>
        <UIcon name="stash:user-avatar" v-if="!user" dynamic class="text-3xl hover:cursor-pointer"
            @click="isOpen = true" />

        <UModal v-model="isOpen" :ui="{ background: 'bg-gray-100 dark:bg-[#19191a]' }">
            <div class="flex mx-auto dark:text-golden text-3xl mt-5">Login Options</div>
            <div class="p-4 flex">
                <div class="mx-auto">
                    <div
                        class="mt-10 bg-primary-300 hover:bg-primary-300/[0.7] dark:bg-primary-600/[0.7] dark:hover:bg-primary-600 dark:text-golden rounded-3xl pt-2 pb-2 p-5">
                        <button @click="login" class="flex justify-center items-center gap-2 w-full">
                            <UIcon name="line-md:github-loop" dynamic class="text-4xl" />
                            <p class="font-bold">Login with GitHub</p>
                        </button>
                    </div>
                    <div
                        class="mt-5 bg-primary-300 hover:bg-primary-300/[0.7] dark:bg-primary-600/[0.7] dark:hover:bg-primary-600 dark:text-golden rounded-3xl pt-2 pb-2 p-5">
                        <ULink to="https://member.openmobilealliance.org/ftp"
                            class="flex justify-center items-center gap-2 w-full text-black hover:text-black dark:text-golden hover:dark:text-golden">
                            <UIcon name="i-heroicons-user" dynamic
                                class="text-4xl text-black hover:text-black dark:text-golden hover:dark:text-golden" />
                            <p class="font-bold dark:text-golden hover:dark:text-golden">Login for members</p>
                        </ULink>
                    </div>
                    <div class="flex justify-center items-center mt-10">
                        <hr class="border border-black dark:border-golden w-full mr-2" />
                        <p class="dark:text-golden">OR</p>
                        <hr class="border border-black dark:border-golden w-full ml-2" />
                    </div>
                    <div class="mx-auto pt-2 pb-2 p-5">
                        <ULink to="https://account.openmobilealliance.org/AccountCreation/GetAccount.asp"
                            class="flex justify-center items-center gap-2 w-full">
                            <UIcon name="i-heroicons-user-plus" dynamic class="text-2xl" />
                            <p>Create an account</p>
                        </ULink>
                    </div>
                </div>
            </div>
        </UModal>
    </div>

    <!-- avatar section -->
    <div v-if="user" class="flex items-center">
        <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }"
            :ui="{ background: 'bg-gray-100 dark:bg-[#19191a]', item: 'hover:bg-primary-200/[0.7] dark:hover:bg-primary-600' }">
            <img class="rounded-full w-9 h-9 ring -mt-2 mr-2 ring-green-600" :src="profile" />
            <template v-slot:item="{ item, index }">
                <div v-if="index === 0" class="text-black dark:text-golden flex items-center pl-3 pr-3 p-2">
                    <UIcon :name="item.icon" class="text-2xl mr-2" />
                    {{ item.label }}
                </div>
                <div v-if="index === 1" class="text-black dark:text-golden flex items-center pl-3 pr-3 p-2">
                    <NuxtLink :to="item.to" :target="item.target">
                        <UIcon :name="item.icon" class="text-2xl mr-2" />
                        {{ item.label }}
                    </NuxtLink>
                </div>
                <button v-else @click="item.click"
                    class="text-black hover:text-black dark:text-golden hover:dark:text-golden flex items-center pl-3 pr-3 p-2">
                    <div v-if="index === 0" class="text-black dark:text-golden flex items-center pl-3 pr-3 p-2">
                        <NuxtLink :to="item.to">
                            <UIcon :name="item.icon" class="text-2xl mr-2" />
                            {{ item.label }}
                        </NuxtLink>
                    </div>
                    <UIcon v-else :name="item.icon" class="text-2xl mr-2" />
                    {{ item.label }}
                </button>
            </template>
        </UDropdown>

        <!-- <div class="text-right">
            <div class="font-medium">{{ name }}</div>
            <button class="text-sm underline text-slate-500" @click="logout">
                Log out
            </button>
        </div> -->
        <!-- end of avatar section -->

    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const supabase = useSupabaseClient();
const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    });
    if (error) {
        console.error(error);
    }
    await navigateTo(route.path);
};

const route = useRoute();

const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const logout = async () => {
    const { error } = await auth.signOut();

    if (error) {
        console.error(error);
        return;
    }

    try {
        await $fetch('/api/_supabase/session', {
            method: 'POST',
            body: { event: 'SIGNED_OUT', session: null },
        });
        user.value = null;
    } catch (e) {
        console.error(error);
    }

    await navigateTo(route.path);
};

const name = computed(
    () => user.value?.user_metadata.full_name
);
const profile = computed(
    () => user.value?.user_metadata.avatar_url
);

const username = computed(
    () => user.value?.user_metadata.preferred_username
);
const email = computed(
    () => user.value?.user_metadata.email
);

const items = [
    [{
        label: name,
        icon: 'solar:user-hand-up-linear',

    }, {
        label: username,
        icon: 'line-md:github-loop',
        to: 'https://github.com/' + user.value?.user_metadata.preferred_username,
        target: '_blank',
    }, {
        label: email,
        icon: 'line-md:email',
    }], [{
        label: 'Guidelines',
        to: '/guidelines',
        icon: 'line-md:document',
    },
    {
        label: 'Logout',
        icon: 'line-md:logout',
        click: logout,
    }]
]
</script>