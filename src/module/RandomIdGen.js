function RandomIdGenerator(length)
{
    let char='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let randomId=''
    for(let i=0;i<length;i++)
    {
        let randomNumber=Math.round(Math.random()*char.length);
        randomId+=char[randomNumber];
        
    }
    return randomId;
    
}
export default RandomIdGenerator;