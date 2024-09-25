<template>
    <div class="w-full group">
        <p class="dark:text-golden">
            <b>Useful links</b>
        </p>
        <ul class="">
            <NuxtLink to="/newsletter" class="not-prose flex mb-3 text-black dark:text-golden">
                <UIcon name="iconamoon:news-thin" dynamic class="mr-2 text-2xl" />
                Newsletter
                <UIcon name="ph:arrow-up-right" dynamic class="ml-1" />
            </NuxtLink>

            <NuxtLink to="/faq" class="not-prose flex mb-3 text-black dark:text-golden">
                <UIcon name="icons8:question-mark" dynamic class="mr-2 text-2xl" />
                F.A.Q
                <UIcon name="ph:arrow-up-right" dynamic class="ml-1" />
            </NuxtLink>

            <NuxtLink to="/contact-us" class="not-prose flex mb-3 text-black dark:text-golden">
                <UIcon name="streamline:send-email" dynamic class="mr-3 mt-1 text-xl" />
                Contact Us
                <UIcon name="ph:arrow-up-right" dynamic class="ml-1" />
            </NuxtLink>
        </ul>
    </div>
</template>