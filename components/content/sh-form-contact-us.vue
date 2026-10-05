<!-- INTERNAL: single-page component, used only on the contact page. Not intended for general content authoring; no guideline. -->
<template>
  <div>
    <div id="hubspot-form"></div>
    <p v-if="consentStatus !== 'accepted'" class="text-sm text-gray-500 dark:text-gray-400 py-4">
      To use this form, please
      <button class="text-primary underline" @click="openSettings">accept cookies</button>.
    </p>
  </div>
</template>

<script setup lang="ts">
const { consentStatus, openSettings } = useCookieConsent()

const loadHubSpotForm = () => {
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '21247113',
      formId: 'c9bf8828-7520-4e8c-987b-70fe763e77eb',
      target: '#hubspot-form',
    });
    return;
  }

  const script = document.createElement('script');
  script.src = '//js.hsforms.net/forms/embed/v2.js';
  script.charset = 'utf-8';
  script.type = 'text/javascript';
  document.head.appendChild(script);

  script.onload = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '21247113',
        formId: 'c9bf8828-7520-4e8c-987b-70fe763e77eb',
        target: '#hubspot-form',
      });
    }
  };
}

onMounted(() => {
  if (consentStatus.value === 'accepted') {
    loadHubSpotForm();
  }
})

watch(consentStatus, (status) => {
  if (status === 'accepted') {
    nextTick(() => loadHubSpotForm());
  }
})
</script>
