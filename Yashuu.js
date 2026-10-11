async function func()
{
    let response=await fetch('Info1.txt')
    let text=await response.text()
    console.log(text)
    document.getElementById("yas").innerHTML=text
}
func()
