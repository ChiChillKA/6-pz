console.log("Задание 2")
let array = []
let week = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"]
let day = "среда"
let indexWeek = week.indexOf(day)
for (let i = 1; i < 32; i++){
  array.push(i);
}
for (let elem of array){
  const y = (indexWeek + elem - 1) % 6
  console.log(`${elem} января, ${week[y]}`)
}