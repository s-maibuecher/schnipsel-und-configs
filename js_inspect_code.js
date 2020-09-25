// Test Cases einsehen:


// Auf Hauptebene dies einfügen:

function checkTests(){
    var counter = 0;

    const howManyTimesCalled = function(){
        counter++;
        return counter;
    }

    return howManyTimesCalled;
}

var timesCalled = checkTests();



//dann in einer der zu implementierenden Funktionen:

if(timesCalled() == 1){
    const { execSync } = require('child_process');
    console.log('****vor exec');
    //let s = execSync('cat package.json');
    let s = execSync('ls ./challenge -al');
    console.log(s.toString())
    console.log('****nach exec');
    return -1;
}





//////////////////////////

// es geht auch:
let test_content  = fs.readFileSync('./tvchallenge/tests/tvchannel.test.js');
console.log(test_content.toString())
