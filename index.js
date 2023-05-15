export default function solution(content) {
  let test1 = 0
  let test2 = []
  let safeCounter = 0
  let unSafeCounter = 0
  let test3Save = 0
  let test3UnSave = 0
  let test4 = 0
  let forestPlantCounter = 0
  let test5Obj = {}
  let test5 
const splitContent= content.split('\n')
splitContent.map((elen)=>{
  const right = elen.split('|')
  if(!right[1].includes('Название растения')){
    if(!right[1].includes('-')){
    test1++
    let firstSymbol = right[1].trim().slice(0,1).toUpperCase()
    let result = `${firstSymbol.trim()}${right[1].slice(2).trim()}`
    test2.push(result)
    if(right[5].trim() === 'Нет'){
      unSafeCounter++
    }else if(right[5].trim() === 'Да'){
      safeCounter++
    }
    test3Save = safeCounter/(test1 / 100)
    test3UnSave = unSafeCounter/(test1 / 100)
    if(right[2].includes('Леса')){
      forestPlantCounter++
      const test4Right = right[4].replace(/года|год|лет/,'')
      if(test4Right.includes('-')){
        let res = test4Right.split('-')
        let test4result = Number(res[0])+Number(res[1])
        test4 = test4 + test4result
      }else{
        if(typeof test4Right === 'string'){
          test4 = Number(test4Right) + test4
        }
      }
    }
    }
    if(right[5].trim() === 'Да'){
      const test5Push = right[2].trim().split(' ')
      test5Push.map((elem)=>{
        const firstSymb = elem.slice(0,1).trim().toUpperCase()
        let rightTest5 = `${firstSymb}${elem.slice(1).replace(',','').trim()}`
        test5Obj[rightTest5] = (test5Obj[rightTest5] ?? 0) + 1
        test5 =Object.entries(test5Obj).sort((a, b) => a[1] - b[1]).at(-1)[0]
      })
    }
  }
})
console.log(`-Всего растений ${test1}`)
console.log(`-Cписок растений в алфавитном порядке (${test2.sort()})`)
console.log(`-Количество опасных растений ${test3UnSave}%,безопасных ${test3Save}%`)
console.log(`-Среднее время жизни растений ${(test4 = test4 / forestPlantCounter).toFixed(1)}`)
console.log(`-Самое опасное место обитания ${test5}`)
}