import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

const themeColor = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

const loadCal = async () => {
  const cal = await getCalApi({ namespace: 'lionheart-pacific' })
  cal('ui', {
    theme: 'light',
    cssVarsPerTheme: {
      light: {
        'cal-brand': themeColor('--color-brand-primary'),
        'cal-border-booker': themeColor('--color-brand-light-gray'),
      },
      dark: { 'cal-brand': themeColor('--color-brand-concrete') },
    },
    hideEventTypeDetails: true,
    layout: 'month_view',
  })
}

export const CalComponent = () => {
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
