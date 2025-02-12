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


watchedList.add(socketA,FOR_READ)
watchedList.add(socketB,FOR_READ)
while(event = demultiplexer(watchedList)){
    //event lop
  for (event of events){
    // the resourse was closed, remove it from the wathed the list  
    data= event.resource.read()
    if(data === RESOURCE_CLOSED){
        // the resourse was closed, remove it form the watched list 
        demultiplexer.unwatch(event.resource)
    }else{
        //some actual data was received, proess it 
        consumerData(data)
    }
  }
}