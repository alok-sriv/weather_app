console.log('Starting')

setTimeout(()=>{
    console.log('2 Second Timer')
},2000)

setTimeout(()=>{
    console.log('0 Second Timer')
},0)
console.log('Stopping')
/*
1. One thing at a time. 

2. NodeJS uses "Call Stack"," Node APIs", "Event Loop" , "Callback Queue" areas.

3. If we call any function, that function (ex.console.log()) will get added to "CallStack"
and get removed(popped-out) after execution.

4. If NodeJS finds any callback function it push that function to "Node APIs" area.
All other statements/functions will go to "Call Stack".

5. If there is an Event-Callback Pair (e.g. setTimeout(Callback)). Event will get gegistered
with Node-API. Meanwhile JS will work on next lines instead of waiting to complete
Event-Callback pair... After Event complettion, Callback will be added to Callback
queue. Callback function will be added to CallStack if Call Stack if empty.
*/