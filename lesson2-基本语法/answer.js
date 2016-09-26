function coverNumber(n){
    if(n==0){
        return 0;
    }
    var _array=[]; //__array=new Array(); 
    while(n!=1){
        if(n%2==0){
            _array.push(0);
        }else{
            _array.push(1);
        }
        n=parseInt(n/2);
    }
    _array.push(1);
    return _array.reverse().join("");//将字符串从后往前输出
}
