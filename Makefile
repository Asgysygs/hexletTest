install:
	npm ci

test:
	npm test

test-steps:
	npx jest --testNamePattern step1
	npx jest --testNamePattern step2
	npx jest --testNamePattern step3
	npx jest --testNamePattern step4
	npx jest --testNamePattern step5

	#       // console.log(right[2].trim())
    #   const test5Push = right[2].trim().split(' ')
    #   if(test5Push.length === 1){
    #     test5Obj[test5Push] =+1
    #   }else{
    #     const first =test5Push[0].replace(',','').trim()
    #     const toUpperCase = test5Push[1].slice(0,1).toUpperCase()
    #     const resull = `${toUpperCase}${test5Push[1].slice(1).trim()}`
    #     const second =test5Push[1].replace(',','').trim()
    #     // test5Obj[first] +=1
    #     // test5Obj[resull] +=1
    #   }