


function myFastFunction (somthing, name){
    function mySecondFunction (){
        console.log(somthing,name)
    }
    mySecondFunction()
}
myFastFunction('Hello ', 'Fardin Tazbeed')





function mainFunction (curlture , name){
    function getFastName(){
        if (name){
            return name.split(' ')[0]
        }
    }
    var result = curlture +' '+getFastName()
    console.log(result)

}
mainFunction('Hello ' , 'Fardin Tazbeed')