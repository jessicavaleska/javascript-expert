const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

;
(async() => {
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const excepted = [
      {
        "id": 1,
        "name": "Jessica",
        "profession": "Javascript Instructor",
        "birthDay": 1996
      },
      {
        "id": 2,
        "name": "Valeska",
        "profession": "Javascript Specialist",
        "birthDay": 1941
      },
      {
        "id": 3,
        "name": "Silva",
        "profession": "Angular Developer",
        "birthDay": 1991
      }
    ]
    
    deepStrictEqual(JSON.stringify(result), JSON.stringify(excepted))
  }
})()