export const { format: formatNumber } = Intl.NumberFormat('en', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency'
})
export const truncate = (text: string) => text.substring(0, 15)

