const fs = require('fs')
// Blocking I/O : Synchronous file read
const data = fs.readFileSync('file.txt', 'utf8')
console.log(data)
console.log('This will run only after the file is read')

//non-blocking
resourse = [socketA, socketB, fileB, fileA]
while(!resourse.isEmpty()){
    for (resource of resources){
        //try to read
        data = resource.read()
        if (data === NO_DATA_AVAILABLE){
            continue
        }
        if (data === RESOURCE_CLOSED){
            //the resource is closed remove it from the list
            resources.remove(resource)
            
        } else {
            //we got some data to process
            consumeData(data)
        }
    }
}