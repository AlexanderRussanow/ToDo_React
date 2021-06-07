import React from 'react'
import { v1 } from 'uuid'

const students = [
   {
      name: 'codsdb',
      age: 16,
      isMaried: false,
      scores: 486
   },
   {
      name: 'bob',
      age: 22,
      isMaried: true,
      scores: 86
   },
   {
      name: 'akaka',
      age: 2,
      isMaried: false,
      scores: 867
   },
   {
      name: 'mmmmdb',
      age: 1,
      isMaried: false,
      scores: 1486
   },
   {
      name: 'dTRWEYRob',
      age: 88,
      isMaried: true,
      scores: 186
   },
   {
      name: 'joPRPWPRWPb',
      age: 72,
      isMaried: true,
      scores: 999
   },
]


const addFriends = (students) => {
   let nameArray = students.map(s => s.name)
   let mapArray = students.map(s => ({ ...s, friend: [...nameArray].filter(s => s.name !== s.name) }))
   return mapArray
}


const user = {
   name: 'bob',
   age: 22,
   friends: ['alex', 'nick', 'marks']
}

const copyUser = { ...user } // поверхностная копия

console.log(user === copyUser) // false
console.log(user.friends === copyUser.friends) // true


let deepCopyUser = {
   ...user,
   friends: [...user.friends]
}

let copeStudents = [...students]
console.log(students === copeStudents)
console.log(students[0] === copeStudents[0])

let deepCopyStudents = students.map(i => ({ ...i }))

let sortByName = deepCopyStudents.sort((a, b) => a.name - b.name)


const ussr = {}
ussr['0'] = { id: 1, name: 'dimych' }


const rrr = rrr.reduce((acc, el) => {
   acc.push(el.name)
   return acc
}, [])



const newArrray = [11, 33, 4325, 5235, 254, 34, 43124234, 34, 314, 43, 412343214, 41, 4, 2314, 34, 34, 3412, 54365, 6, 5465, 76, 7, 47, 6746577, 4767, 67, 6745, 765, 77, 4567]


for (let g = 0; g < newArrray.length - 1; g++) {
   for (let h = 0; h < newArrray.length - 1; h++) {
      if (newArrray[h] > newArrray[h + 1]) {
         let tryy = newArrray[h + 1];
         newArrray[h + 1] = newArrray[h]
         newArrray[h] = tryy
      }
   }
}

console.log(newArrray)


for (let i = 0; i < newArrray.length; i++) {
   if (newArrray[i] > newArrray[i + 1]) {
      let temp = newArrray[i + 1]
      newArrray[i + 1] = newArrray[i]
      newArrray[i] = temp
   }
}

for (let u = 0; u < newArrray.length; u++) {
   newArrray[u] = x
}


const neww = []
for (let i = 0; i < 10; i++) {
   neww[i] = Math.random()
}
console.log(neww)


const randomaiser = () => Math.random()

function randomaiser2() {
   return Math.random()
}

function randomClever(min, max) {
   return Math.random() * (max - min) + min
}

const userTest = {
   name: 'alex',
   age: 29,
   married: false,
   car: null,
   occupation: 'web-developer',
   friends: ['stas', 'kolja', 'stas', 'igor', 'andrjuha', 'misa', 'zuzka']
}

const userTestCopy = { ...userTest }
const userTestDeepCopy = {
   ...userTest,
   friend: [...userTest.friends]
}

const shallowCopy = [...students]
const deepStudentsCopy = [...students.map(s => s)]

// const FunMapForStud = (students) => {
//    const arrayJustWithName = students.map(s => s.name)
//    const filteredArray = students.map(s => ({...s, friend: [...arrayJustWithName].filter(s => s.name !== name)}))
// }


const mariedBob = [...students].map(s => {
   if (s.name === 'bob') {
      s.isMaried = true
   }
})


const deeepCopy2 = [...student].map(s => ({ ...s, howManyDollarasonYourBeel: '10000000000' }))

const findBob = (students) => {
   if (students.name === 'akaka') {
      students.isMaried = true
   }
   return students
}


const findBob = [...deepStudentsCopy2].map(s => {
   if (s.name === 'bob') {
      return {
         ...s, isMaried: true
      }
   } return s
})

const mii = [...deepStudentsCopy2].map(s => ({...s, million: true}))