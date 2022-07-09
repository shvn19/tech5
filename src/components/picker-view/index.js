years = []
for (let index = 2022; index >=1900; index--) {
  years.push(`Năm ${index}`)
}

months = []
for (let index = 1; index <= 12; index++) {
  months.push(`Tháng ${index}`)
}

days = []
for (let index = 1; index <= 31; index++) {
  days.push(`Ngày ${index}`)
}

Component({
  data: {days, months, years},
});