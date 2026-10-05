<!-- INTERNAL: single-page component, used only on the subscription page. Not intended for general content authoring; no guideline. -->
<template>
  <div>
    <div id="contact-us-form"></div>
    <p v-if="consentStatus !== 'accepted'" class="text-sm text-gray-500 dark:text-gray-400 py-4">
      To use this form, please
      <button class="text-primary underline" @click="openSettings">accept cookies</button>.
    </p>
  </div>
</template>

<script setup lang="ts">
const { consentStatus, openSettings } = useCookieConsent()

// HubSpot form name: Join OMA Newsletter - 24-Sep-24
const loadHubSpotForm = () => {
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: "na1",
      portalId: "21247113",
      formId: "56969656-646b-423d-98af-133ab4c4e2dd",
      target: "#contact-us-form"
    });
    return;
  }

  const script = document.createElement('script')
  script.src = "//js.hsforms.net/forms/embed/v2.js"
  script.type = "text/javascript"
  script.charset = "utf-8"
  document.body.appendChild(script)

  script.onload = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "21247113",
        formId: "56969656-646b-423d-98af-133ab4c4e2dd",
        target: "#contact-us-form"
      })
    }
  }
}

onMounted(() => {
  if (consentStatus.value === 'accepted') {
    loadHubSpotForm()
  }
})

watch(consentStatus, (status) => {
  if (status === 'accepted') {
    nextTick(() => loadHubSpotForm())
  }
})
</script>
  