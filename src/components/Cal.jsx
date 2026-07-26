import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

// Cal renders in an iframe, so it can't see our CSS variables — resolve them
// on the page and pass the computed values across.
const themeColor = (name, fallback) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback

const loadCal = async function () {
  const cal = await getCalApi({ namespace: 'lionheart-pacific' })
  cal('ui', {
    theme: 'light',
    cssVarsPerTheme: {
      light: { 'cal-brand': themeColor('--color-brand-primary', '#012B5D') },
      dark: { 'cal-brand': themeColor('--color-brand-concrete', '#F2F2F2') },
    },
    hideEventTypeDetails: true,
    layout: 'month_view',
  })
}

export default function CalComponent() {
  useEffect(() => {
    void loadCal()
  }, [])
  return (
    <Cal
      namespace="lionheart-pacific"
      calLink="lnhrdt/lionheart-pacific"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light' }}
    />
  )
}
