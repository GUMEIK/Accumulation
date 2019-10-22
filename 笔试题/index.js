






function reOrderArray(array)
{
    // write code here
    let len = array.length;
    let leftArr = []
    for(let i = 0;i < len;i++){
        
        if(array[i] % 2 != 0){//奇数
            leftArr.push(array[i]);
            array[i] = '';
        }else{
            array[i] += '-'
        }
    }
    array = array.join('').split('-');
    array = leftArr.concat(array)
    return array;
}