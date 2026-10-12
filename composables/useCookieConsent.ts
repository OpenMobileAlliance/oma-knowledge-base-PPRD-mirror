export const useCookieConsent = () => {
  const gtm = useGtm()
  const consentStatus = useState<string | null>('cookie-consent-status', () => null)
  const showBanner = useState<boolean>('cookie-consent-banner', () => false)

  const enableGtm = () => {
    gtm?.enable(true)
  }

  const init = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('cookie-consent')
      consentStatus.value = stored
      if (!stored) {
        showBanner.value = true
      } else if (stored === 'accepted') {
        enableGtm()
      }
    }
  }

  const accept = () => {
    consentStatus.value = 'accepted'
    localStorage.setItem('cookie-consent', 'accepted')
    showBanner.value = false
    enableGtm()
  }

  const reject = () => {
    consentStatus.value = 'rejected'
    localStorage.setItem('cookie-consent', 'rejected')
    showBanner.value = false
  }

  const openSettings = () => {
    showBanner.value = true
  }

  return { consentStatus, showBanner, init, accept, reject, openSettings }
}
