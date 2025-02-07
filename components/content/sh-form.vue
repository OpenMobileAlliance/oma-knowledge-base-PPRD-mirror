<script setup lang="ts">

const props = defineProps<{ formId : string }>()

const formContainer = ref<HTMLElement | null>(null)

const loadHubSpotScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')) {
            resolve()
            return
        }
        const script = document.createElement('script')
        script.src = "//js.hsforms.net/forms/embed/v2.js"
        script.type = "text/javascript"
        script.charset = "utf-8"
        script.onload = () => resolve()
        script.onerror = () => reject(new Error("Failed to load HubSpot script"))
        document.body.appendChild(script)
    })
}

const renderForm = async () => {
    if (!props.url || !formContainer.value) return

    formContainer.value.innerHTML = ''

    try {
        await loadHubSpotScript()
        // Use the HubSpot API to create the form.
        // Here, the `url` prop is used as the formId.
        window.hbspt.forms.create({
            portalId: "21247113",
            formId: props.formId,
            target: formContainer.value
        })
    } catch (error) {
        console.error("Error embedding the form:", error)
    }
}

watch(
    () => props.url,
    (newUrl) => {
        if (newUrl) renderForm()
    },
    { immediate: true }
)

onMounted(() => {
    if (props.url) renderForm()
})
</script>
